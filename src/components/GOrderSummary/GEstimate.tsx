import { defineComponent, ref, computed, PropType, onMounted } from 'vue';
import GApplyCoupon from './GApplyCoupon';
import { Calendar, Spinner } from '../icons';
import {
  AppliedCoupon,
  EstimateActions,
  OrderSummaryAccordionState,
  GOrderSummaryState,
  OrderSummaryLabels,
  CouponComponentState,
  PriceType,
  TaxProp,
} from './types';
import { Product } from '../GProductCard';
import { Clickable } from '../../utils/accessibility';
import PriceComponent from './GEstimatePrice';

export default defineComponent({
  name: 'GEstimate',
  props: {
    state: {
      type: Object as PropType<GOrderSummaryState>,
    },
    products: {
      type: Array as PropType<Array<Product>>,
      required: true,
    },
    tax: {
      type: Object as PropType<TaxProp>,
      required: false,
    },
    subTotal: {
      type: String,
      required: true,
    },
    total: {
      type: String,
      required: true,
    },
    labels: {
      type: Object as PropType<OrderSummaryLabels>,
      required: true,
    },
    isNextCharge: {
      type: Boolean,
      default: false,
    },
    nextChargeDate: {
      type: String,
    },
    actions: {
      type: Object as PropType<EstimateActions>,
      required: false,
    },
    appliedCoupons: {
      type: Array as PropType<Array<AppliedCoupon>>,
      required: false,
      default: [],
    },
    loader: {
      type: Boolean,
    },
  },

  setup(props, context) {
    let isCartView = computed(() => props.state?.orderSummary === OrderSummaryAccordionState.Collapsed).value;
    let showLineItems = ref(false);
    let isScrollVisible = ref(false);

    onMounted(
      () =>
        (isScrollVisible.value = document.getElementById('estimate')?.clientHeight! < document.getElementById('estimate')?.scrollHeight!),
    );
    return () => {
      const productLineItem = (product: Product) => (
        <div class={`g-summary__li g-summary__product g-summary__product-${product.id}`}>
          <div class="g-summary__left">
            <div class="g-summary__item g-summary__product-name">{product.name || product.description}</div>
            <PriceComponent product={product} />
          </div>
          <div class="g-summary__right g-summary__product-amount">{product.subTotal?.value}</div>
        </div>
      );

      const ProductLineItems = () => (
        <div class="g-summary__row g-summary__ul">{props.products?.map((product) => productLineItem(product))}</div>
      );

      const SubTotal = (_props: any, { slots }: { slots: any }) => {
        return (
          <Clickable class="g-summary__row">
            <div class="g-summary__left">
              {props.labels.subTotal} ({props.products?.length} item{props.products?.length > 1 && 's'}) {slots?.default?.()}
            </div>
            <div class="g-summary__right g-summary__sub-total">{props.subTotal}</div>
          </Clickable>
        );
      };

      const LineItemView = () => {
        return (
          <>
            <ProductLineItems />
            <SubTotal />
            <hr id="subtotal-hr" />
          </>
        );
      };

      const TaxLineItems = () =>
        props.tax?.lineItems ? (
          <>
            {props.tax.lineItems.map((taxLineItem) => (
              <div class="g-summary__row g-summary__tax">
                <div class="g-summary__left g-summary__tax-name">
                  {props.tax?.priceType === PriceType.TAX_INCLUSIVE && <span>{props.labels.inclusiveTax}</span>}
                  {taxLineItem.name}
                </div>
                <div class="g-summary__right g-summary__tax-amount">{taxLineItem.amount}</div>
              </div>
            ))}
          </>
        ) : null;

      const Total = () => (
        <div class="g-summary__row">
          <h3 class="g-summary__left">
            {!props.isNextCharge
              ? props.labels.total
              : props.nextChargeDate && (
                  <>
                    <Calendar width={25} /> <span>On {props.nextChargeDate}</span>
                  </>
                )}
          </h3>
          {props.loader ? (
            <div class="g-summary__right">
              <Spinner width={30} class="g-summary__spinner" />
            </div>
          ) : (
            <h3 class="g-summary__right">{props.total}</h3>
          )}
        </div>
      );

      return (
        //add when more line items are there: g-summary__estimate-scroll
        <div class={`g-summary__estimate ${isScrollVisible.value ? 'g-summary__estimate-scroll' : ''}`} id="estimate">
          <LineItemView />
          <div class="g-summary__hold g-summary__footer">
            <GApplyCoupon
              onApply={props.actions?.onApplyCoupon}
              onRemove={props.actions?.onRemoveCoupon}
              onUpdateCouponComponent={props.actions?.onUpdateCouponComponent}
              onChange={props.actions?.onCouponChange}
              labels={props.labels}
              appliedCoupons={props.appliedCoupons}
              state={props.isNextCharge ? { componentState: CouponComponentState.Disabled } : props.state?.coupon}
            />

            {props.tax?.priceType === PriceType.TAX_EXCLUSIVE && (
              <div>
                <TaxLineItems />
                <hr id="apply-tax" />
              </div>
            )}
            <Total />
            {props.tax?.priceType === PriceType.TAX_INCLUSIVE && <TaxLineItems />}
            <hr id="apply-total" />
          </div>
        </div>
      );
    };
  },
});
