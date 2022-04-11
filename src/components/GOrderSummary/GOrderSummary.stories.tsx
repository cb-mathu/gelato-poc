import GOrderSummary from './GOrderSummary';
import { OrderSummaryAccordionState } from './types';

export default {
  title: 'Component/GOrderSummary',
  component: GOrderSummary,
};

const Template = (args: any) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { GOrderSummary },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return () => (
      <div class="g-grid g-grid-cols-md-5">
        <div class="g-col-span-md-2">
          <GOrderSummary {...args} />
        </div>
      </div>
    );
  },
});

const props = {
  labels: {
    title: 'Order summary',
    backButton: 'Back to site', // Change text based on OrderSummaryState,
    submitButton: 'Pay $123 & Subscribe',
    total: 'Total',
    subTotal: 'Sub Total',
    backToOrderSummary: 'Back to Order Summary',
  },
  total: '$120.44',
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
  discounts: [
    {
      name: 'Summer offer',
      discount: '20%',
    },
    {
      name: 'Weekend sale',
      discount: '15%',
    },
  ],
  taxes: [
    {
      name: 'GST',
      amount: '20%',
    },
    {
      name: 'VAT',
      amount: '15%',
    },
  ],
};

export const Cart: any = Template.bind({});
Cart.args = {
  state: {
    orderSummary: OrderSummaryAccordionState.Collapsed,
  },
  nextEstimates: [
    {
      lineItems: [
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
      taxes: [
        {
          name: 'GST',
          amount: '20%',
        },
        {
          name: 'VAT',
          amount: '15%',
        },
      ],
      total: '$120.44',
      subTotal: '$120.44',
      labels: {
        title: 'Order summary',
        backButton: 'Back to site', // Change text based on OrderSummaryState,
        submitButton: 'Pay $123 & Subscribe',
        total: 'Total',
        subTotal: 'Sub Total',
        backToOrderSummary: 'Back to Order Summary',
      },
    },
    {
      lineItems: [
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
      taxes: [
        {
          name: 'GST',
          amount: '20%',
        },
        {
          name: 'VAT',
          amount: '15%',
        },
      ],
      total: '$120.44',
      subTotal: '$120.44',
      labels: {
        title: 'Order summary',
        backButton: 'Back to site', // Change text based on OrderSummaryState,
        submitButton: 'Pay $123 & Subscribe',
        total: 'Total',
        subTotal: 'Sub Total',
        backToOrderSummary: 'Back to Order Summary',
      },
    },
  ],
  ...props,
};
export const Payment: any = Template.bind({});
Payment.args = {
  state: {
    orderSummary: OrderSummaryAccordionState.Expanded,
  },
  ...props,
};
