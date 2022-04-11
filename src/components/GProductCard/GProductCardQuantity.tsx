import { ComputedRef, defineComponent, PropType, Ref, ref } from 'vue';
import { Clickable } from '../../utils/accessibility';
import { GQuantity } from '../GQuantity';
import { Multiply } from '../icons';
import TierRow from './GProductTier';
import { LoaderState, PricingModel, Product, ProductCardActionType, ProductCardLabels, ProductCardState } from './types';

export default defineComponent({
  props: {
    product: {
      type: Object as PropType<Product>,
      required: true,
    },
    labels: {
      type: Object as PropType<ProductCardLabels>,
      required: true,
    },
    state: {
      type: Object as PropType<ProductCardState>,
      required: false,
    },
    loaderState: {
      type: String as PropType<LoaderState>,
    },
    showTiers: {
      type: Object as PropType<Ref<Boolean>>,
      required: true,
    },
    isLoading: {
      type: Object as PropType<ComputedRef<boolean>>,
      required: true,
    },
    toggleTiers: {
      type: Function as PropType<(value?: boolean) => boolean>,
      required: true,
    },
    qtyListeners: {
      type: Object as any,
    },
  },
  setup(props) {
    const { product, state, loaderState, showTiers, isLoading, toggleTiers } = props;
    const quantityConfig = state?.quantityConfig;
    let qty = ref(product?.quantity).value || 1;

    const UnitPrice = (props: { showIcon: boolean }) =>
      product.unitPrice?.value ? (
        <span class="g-product-card__unit-price">
          {product.unitPrice?.value} {props.showIcon && <Multiply />}
        </span>
      ) : null;

    const QuantityComponent = () => (
      <>
        {quantityConfig?.editable ? (
          <GQuantity
            readonly={!quantityConfig?.editable || Boolean(loaderState)}
            invalid={quantityConfig?.invalid}
            v-model={[qty, ['lazy']]}
            {...props.qtyListeners}
          />
        ) : (
          <span class="g-product-card__qty__text">{qty}</span>
        )}
        <span class="qty_label">{props.labels?.quantity}</span>
      </>
    );

    const PerUnit = () => (
      <>
        <UnitPrice showIcon={true} />
        <QuantityComponent />
      </>
    );

    const Tier = () => (
      <>
        <QuantityComponent /> &nbsp;
        {(product.tiers?.value || []).length === 1 ? (
          <TierRow tier={product.tiers?.value?.[0]} showTotal={false} product={product} />
        ) : (
          <Clickable as="a" class="g-tier-details-toggle" onClick={() => toggleTiers()} disabled={isLoading.value}>
            {!showTiers.value ? props.labels?.seeDetails : props.labels?.hideDetails}
          </Clickable>
        )}
      </>
    );

    const Stairstep = () => (
      <>
        <QuantityComponent /> &nbsp;
      </>
    );

    return () => {
      switch (product.pricingModel) {
        case PricingModel.PerUnit:
        case PricingModel.Volume:
          return <PerUnit />;
        case PricingModel.Stairstep:
          return <Stairstep />;
        case PricingModel.Tiered:
          return <Tier />;
        default:
          return null;
      }
    };
  },
});
