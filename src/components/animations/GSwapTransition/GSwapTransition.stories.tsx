import GSwapTransition from './GSwapTransition';
import { computed, ref } from 'vue';
import { getItemTypeLabel, GProductCard, ItemType, Product, ProductCardLabels } from '../../GProductCard';
import { GButton } from '../../GButton';
export default {
  title: 'Component/Animations/GSwapTransition',
  component: GSwapTransition,
};

const Template = () => ({
  // Components used in your story `template` are defined in the `components` object
  components: { GSwapTransition },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return () => {
      let show = ref(false);

      const sampleProduct: Product = {
        id: 'cbdemo_scale',
        name: 'Scale',
        description: 'This is enterprise level plan comes with a 14-day trial period and has a setup cost.',
        quantity: computed(() => 1),
        subTotal: computed(() => '$10.00'),
        unitPrice: computed(() => '$5.00'),
        type: ItemType.Plan,
        labels: {
          units: 'units',
          itemType: getItemTypeLabel(ItemType.Plan),
        },
      };

      const productCardLabels: ProductCardLabels = {
        quantity: 'units',
      };

      const content = computed(() => (show.value ? <GProductCard product={sampleProduct} labels={productCardLabels} /> : undefined));
      return (
        <div>
          <GButton style="margin-bottom: 20px;" onClick={() => (show.value = !show.value)}>
            Toggle
          </GButton>
          <div>
            <GSwapTransition>
              {{
                default: () =>
                  show.value ? (
                    <>
                      <GProductCard key="product_card2" product={sampleProduct} labels={productCardLabels} />
                    </>
                  ) : (
                    <div class="g-card" key="loading">
                      Loading...
                    </div>
                  ),
              }}
            </GSwapTransition>
          </div>

          <h3 style="margin-top: 20px">Recommended:</h3>
          <GProductCard style="margin-top: 20px" key="product_card" product={sampleProduct} labels={productCardLabels} />
          <GProductCard style="margin-top: 20px" key="product_card" product={sampleProduct} labels={productCardLabels} />
          <GProductCard style="margin-top: 20px" key="product_card" product={sampleProduct} labels={productCardLabels} />
        </div>
      );
    };
  },
});

export const Default = Template.bind({});
