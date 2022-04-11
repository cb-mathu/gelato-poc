import { defineComponent, PropType } from 'vue';
import { Multiply } from '../icons';
import { Product, ProductTier } from './types';

export default defineComponent({
  props: {
    tier: {
      type: Object as PropType<ProductTier>,
    },
    product: {
      type: Object as PropType<Product>,
      required: true,
    },
    showTotal: Boolean,
  },
  setup(props) {
    const { tier, product, showTotal } = props;
    return () =>
      tier ? (
        <div class="g-product-card__tier">
          <span>
            {tier.unitPrice} <Multiply width={12} /> {tier.units} {product.labels.units}
          </span>
          &nbsp;&nbsp;&nbsp; {tier.subTotal && showTotal && <span class="g-product-card__tier-total">{tier.subTotal}</span>}
        </div>
      ) : null;
  },
});
