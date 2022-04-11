import GPaymentMethods from './GPaymentMethods';

export default {
  title: 'Component/GPaymentMethods',
  component: GPaymentMethods,
};

const Template = () => ({
  // Components used in your story `template` are defined in the `components` object
  components: { GPaymentMethods },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return () => (
      <div>
        <GPaymentMethods class="mb-5" />
      </div>
    );
  },
});

export const Default = Template.bind({});
