import GCheckoutSummary from './GCheckoutSummary';

export default {
  title: 'Component/GCheckoutSummary',
  component: GCheckoutSummary,
};

const Template = (args: any) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { GCheckoutSummary },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return () => (
      <div class="g-grid g-grid-cols-md-5">
        <div class="g-col-span-md-2">
          <GCheckoutSummary {...args} />
        </div>
      </div>
    );
  },
});
const props = {
  card: {},
  invoice: {
    sub_total: { display_text: '$120.44' },
  },
  shippingAddress: {
    first_name: 'Tony',
    last_name: 'Stark',
    company: 'Stark Industries',
    email: 'tony@stark.com',
    phone: '147355',
    line1: '24, Rue Haxo',
    line2: 'The Malibu',
    line3: 'CX',
    country: 'The United States of America',
    state: 'New York',
    city: 'New York',
    zip: '670706',
  },
  actions: {},
  loader: false,
  labels: {
    thankYou: 'Thank you!',
    yourOrder: 'Your order to site',
  },
  products: [
    {
      name: 'T-Shirt',
      quantity: {
        value: 3,
      },
      subTotal: {
        value: '$30.00',
      },
      unitPrice: '$10.00',
    },
    {
      name: 'Jean',
      quantity: {
        value: 2,
      },
      subTotal: {
        value: '$200.00',
      },
      unitPrice: '$100.00',
    },
  ],
};

export const Default: any = Template.bind({});
Default.args = {
  ...props,
};
