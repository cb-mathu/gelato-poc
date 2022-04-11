import { defineComponent, PropType } from 'vue';
import { PricingModel, Product } from '../GProductCard';
import { Multiply } from '../icons';

export default defineComponent({
  props: {
    product: {
      type: Object as PropType<Product>,
      required: true,
    },
  },
  setup(props) {
    const { product } = props;
    const Tier = () => (
      <>
        {product.tiers?.value.map((tier) => (
          <div class="g-summary__unitprice">
            {tier.unitPrice} <Multiply width={12} /> {tier.units} &nbsp; {tier.subTotal}
          </div>
        ))}
      </>
    );

    const StairStep = () =>
      product.quantity ? (
        <div class="g-summary__unitprice">
          {product.subTotal && <span>{product.subTotal.value} for</span>}
          {product.quantity.value} {product.labels.units}
        </div>
      ) : null;

    const PerUnit = () =>
      product.quantity ? (
        <div class="g-summary__unitprice">
          {product.unitPrice?.value && (
            <span>
              {product.unitPrice?.value} <Multiply width={12} />
            </span>
          )}
          {product.quantity.value}
        </div>
      ) : null;

    return () => {
      switch (product.pricingModel) {
        case PricingModel.Tiered:
          return <Tier />;
        case PricingModel.Stairstep:
          return <StairStep />;
        case PricingModel.Volume:
        case PricingModel.PerUnit:
          return <PerUnit />;
        default:
          return null;
      }
    };
  },
});
