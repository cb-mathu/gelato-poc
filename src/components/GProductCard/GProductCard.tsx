import { computed, ComputedRef, defineComponent, PropType } from 'vue';
import GTag from '../GTag/GTag';
import GProductCardQuantity from './GProductCardQuantity';
import TierRow from './GProductTier';
import {
  ItemType,
  LoaderState,
  Product,
  ProductCardAction,
  ProductCardActionEvent,
  ProductCardActionType,
  ProductCardLabels,
  ProductCardState,
} from './types';
import { TagVariant } from '../GTag';
import { isNotEmpty } from '../../utils/common';
import { GInputErrorMessage } from '../GInput';
import { Clickable } from '../../utils/accessibility';
import { useToggle } from '../../composables';
import { GSlideTransition } from '../animations/GSlideTransition';

export default defineComponent({
  name: 'ProductCard',
  props: {
    state: {
      type: Object as PropType<ComputedRef<ProductCardState>>,
      default: () => ({
        showTag: true,
      }),
    },
    product: {
      type: Object as PropType<Product>,
      required: true,
    },
    actions: {
      type: Array as PropType<Array<ProductCardAction>>,
      required: false,
    },
    onAction: {
      type: Function as PropType<(event: ProductCardActionEvent) => void>,
      required: false,
    },
    loaderState: {
      type: String as PropType<LoaderState>,
    },
    labels: {
      type: Object as PropType<ProductCardLabels>,
      required: true,
    },
    recommended: {
      type: Boolean,
      required: false,
    },
  },
  emits: ['action'],
  setup(props, { emit }) {
    return () => {
      const { product, state, actions, labels } = props;

      const quantityConfig = state?.value?.quantityConfig;

      const loaderState = props?.loaderState;

      const isLoading = computed(() => props.loaderState === LoaderState.loading);

      const [showTiers, toggleTiers] = useToggle(false);

      const isPlan = computed(() => product.type === ItemType.Plan).value;

      const Tag = () =>
        product.labels.itemType ? (
          <GTag variant={isPlan ? TagVariant.Primary : TagVariant.Secondary}>{product.labels.itemType}</GTag>
        ) : null;

      const Heading = () => <h4 class="g-product-card__heading">{product.name}</h4>;

      const Description = () => <p class="g-product-card__desc">{product.description}</p>;

      const Actions = () => (
        <div class="g-actions">
          {actions?.map(({ element, displayText, id, name: action, className }) => {
            return (
              <Clickable
                as={element}
                id={id}
                class={className}
                onClick={() => emit('action', { action, id: product.id })}
                disabled={Boolean(loaderState)}
              >
                {displayText}
              </Clickable>
            );
          })}
        </div>
      );

      const Quantity = () => {
        const quantityUpdateHandler = (value: number) => {
          emit('action', { action: ProductCardActionType.UpdateQuantity, id: product.id, value });
        };

        const qtyListeners: any = {
          'onUpdate:modelValue': quantityUpdateHandler,
        };
        return (
          <>
            <div class="g-product-card__qty">
              {!props.state.value?.quantityConfig?.hide && (
                <GProductCardQuantity
                  product={product}
                  labels={labels}
                  state={state.value}
                  loaderState={loaderState}
                  showTiers={showTiers}
                  isLoading={isLoading}
                  toggleTiers={toggleTiers}
                  qtyListeners={qtyListeners}
                />
              )}
              {product.metered && <span>⚡️ &nbsp; Charged based on the usage</span>}

              {props.state.value?.quantityConfig?.hide && props.state.value?.quantityConfig?.hasQuantity && (
                <span class="g-product-card__qty__text">
                  for {product.quantity} {product.labels.units}
                </span>
              )}
            </div>
          </>
        );
      };
      const Price = () => {
        return (
          <>
            <span class={props.state.value?.quantityConfig?.hide ? 'g-product-card__amount__left' : 'g-product-card__amount'}>
              {product?.subTotal?.value}
            </span>
          </>
        );
      };

      const TierBreakdown = () => {
        return (
          <div>
            <GSlideTransition duration={250}>
              {(product.tiers?.value || []).length > 1 && showTiers.value && (
                <div>
                  <div class="g-product-card__tiers" key="shown">
                    {product.tiers?.value.map((tier) => (
                      <TierRow tier={tier} showTotal={true} product={product} />
                    ))}
                  </div>
                </div>
              )}
            </GSlideTransition>
          </div>
        );
      };
      const classList = {
        [`g-card g-product-card`]: true,
        [`g-card-recommended`]: props.recommended,
        [`g-product-card--loading`]: isLoading.value,
      };
      const qtyPriceClassList = {
        [`g-card__qty-margin`]: !props.state.value?.quantityConfig?.hide || undefined,
        [`g-card__right`]: true,
      };
      return (
        <section class={classList} id={`g-product-card__${product.id}`}>
          <div class="g-card__content">
            {state?.value?.showTag && <Tag />}
            <div class="g-card__content_row">
              <div class="g-card__left">
                <Heading />
                {isNotEmpty(product.description) && <Description />}
                <Quantity />
              </div>
              <div class={qtyPriceClassList}>
                <Price />
              </div>
            </div>

            {quantityConfig?.invalid && quantityConfig.errorMessage && <GInputErrorMessage errorMessage={quantityConfig.errorMessage} />}
            {isNotEmpty(product.tiers) && <TierBreakdown />}
            {isNotEmpty(actions) && <Actions />}
          </div>
        </section>
      );
    };
  },
});
