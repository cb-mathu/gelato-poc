import { computed } from 'vue';
import { getItemTypeLabel, ItemType, RecommendedProduct } from '../GProductCard';
import GRecommendedAddon from './GRecommendedAddon';
import { RecommendedAddonLabels } from './types';

export default {
  title: 'Component/GRecommendedAddon',
  component: GRecommendedAddon,
};

const Template = () => ({
  setup() {
    const labels: RecommendedAddonLabels = {
      title: 'Recommended Addons',
      addButton: 'Add',
    };

    const actionHandler = () => {
      console.log('Recommended addon added');
    };

    const sampleProduct: RecommendedProduct = {
      id: 'cbdemo_scale',
      name: 'Scale',
      description: 'This is enterprise level plan comes with a 14-day trial period and has a setup cost.',
      subTotal: computed(() => '5'),
      unitPrice: computed(() => '$5.00'),
      type: ItemType.Addon,
      labels: {
        units: 'units',
        itemType: getItemTypeLabel(ItemType.Addon),
      },
    };

    return () => (
      <div>
        <GRecommendedAddon
          class="ma-8"
          products={[
            { ...sampleProduct, quantity: computed(() => 12) },
            { ...sampleProduct, quantity: computed(() => 32) },
          ]}
          labels={labels}
          onAction={actionHandler}
        />
      </div>
    );
  },
});

export const Default = Template.bind({});
