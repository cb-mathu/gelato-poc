import GSuccessOrderSummary from './GSuccessOrderSummary';

export default {
  title: 'Component/GSuccessOrderSummary',
};

const Template = (args: any) => ({
  setup() {
    const address = {
      first_name: 'John',
      last_name: 'Doe',
      company: 'Chargebee',
      line1: '3rd Floor',
      line2: 'Brigade Vantage 1',
      line3: 'OMR Service Rd',
      country: 'India',
      state: 'Tamil Nadu',
      city: 'Chennai',
      zip: '600028',
    };
    return () => <GSuccessOrderSummary class="g-grid g-grid-cols-1 g-card g-card--stroke" address={address} />;
  },
});

export const Default = Template.bind({});
