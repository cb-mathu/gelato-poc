import GAddressRadioGroup from './GAddressRadioGroup';
import { Address } from './types';

export default {
  title: 'Component/GAddress/GAddressRadioGroup',
  component: GAddressRadioGroup,
};

const Template = (args: any) => ({
  setup() {
    const address: Address = {
      first_name: 'John',
      last_name: 'Doe',
      email: 'support@chargebee.com',
      phone: '987678765',
      company: 'Chargebee',
      line1: '3rd Floor',
      line2: 'Brigade Vantage 1',
      line3: 'OMR Service Rd',
      country: 'India',
      state: 'Tamil Nadu',
      city: 'Chennai',
      zip: '600028',
    };

    const shippingAddresses = [address, address];

    return () => (
      <div style="display:grid;grid-gap: 0.5rem;">
        <GAddressRadioGroup addresses={shippingAddresses} onEdit={({ idx }) => alert('edit ' + idx)} />
      </div>
    );
  },
});

export const Default = Template.bind({});
