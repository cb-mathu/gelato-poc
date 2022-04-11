import { computed, ComputedRef, defineComponent, PropType } from 'vue';
import { ThumbsUp } from '../icons';
import { GButton } from '../GButton';
import {
  GProductCard,
  PricingModel,
  Product,
  ProductCardAction,
  ProductCardActionEvent,
  ProductCardActionType,
  ProductCardState,
  RecommendedProduct,
} from '../GProductCard';
import { RecommendedAddonLabels } from './types';

export default defineComponent({
  name: 'GRecommendedAddon',
  props: {
    products: {
      type: Array as PropType<Array<RecommendedProduct>>,
      required: true,
    },
    labels: {
      type: Object as PropType<RecommendedAddonLabels>,
      required: true,
    },
    onAction: {
      type: Function as PropType<(event: ProductCardActionEvent) => void>,
      required: true,
    },
  },

  setup(props, context) {
    const productAddAction: ProductCardAction = {
      name: ProductCardActionType.AddToCart,
      className: 'add-to-cart-btn',
      displayText: props.labels.addButton,
      element: GButton,
    };
    let addOnPerRow: number = props.products.length > 1 ? 2 : 1;

    const getProductCardState = (product: Product) => {
      return computed(() => {
        return {
          quantityConfig: {
            editable: false,
            hasQuantity: product.pricingModel != PricingModel.FlatFee,
            hide: true,
          },
          showTag: true,
        };
      });
    };

    return () => (
      <div class="g-cards-group">
        <h1 class="g-cards-group__title">
          <ThumbsUp class="g-cards-group__icon" />
          {props.labels.title}
        </h1>
        <div class={`g-grid g-grid-cols-md-${addOnPerRow} g-grid-cols-sm-1  g-gap-4`}>
          {props.products.map((product) => (
            // @ts-ignore TODO: Fix type for product
            <GProductCard
              product={product}
              actions={[productAddAction]}
              onAction={props.onAction}
              state={getProductCardState(product)}
              recommended={true}
            />
          ))}
        </div>
      </div>
    );
  },
});
