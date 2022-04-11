import GSlideTransition from './GSlideTransition';
import { computed, ref } from 'vue';
import { getItemTypeLabel, GProductCard, ItemType, Product, ProductCardLabels } from '../../GProductCard';
import { GButton } from '../../GButton';

export default {
  title: 'Component/Animations/GSlideTransition',
  component: GSlideTransition,
};

const Template = () => ({
  // Components used in your story `template` are defined in the `components` object
  components: { GSlideTransition },
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

      const productCardLabels: ProductCardLabels = { quantity: 'units' };

      return (
        <div>
          <GButton onClick={() => (show.value = !show.value)}>Toggle</GButton>
          <GSlideTransition list={true}>
            {{
              default: () =>
                show.value && (
                  <>
                    <GProductCard style="margin-top:10px;" product={sampleProduct} key="2" labels={productCardLabels} />
                    <GProductCard product={sampleProduct} key="1" style="margin-top:10px;" labels={productCardLabels} />
                  </>
                ),
            }}
          </GSlideTransition>
        </div>
      );
    };
  },
});

export const Default = Template.bind({});
