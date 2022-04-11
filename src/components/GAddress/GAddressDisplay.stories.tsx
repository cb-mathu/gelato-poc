import GAddressDisplay from './GAddressDisplay';
import { Address, MergedAddressProp } from './types';

export default {
  title: 'Component/GAddress/GAddressDisplay',
  component: GAddressDisplay,
};

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

const Template = (args: any) => ({
  setup() {
    return () => <GAddressDisplay class="g-card g-card--stroke" address={address} onEdit={() => alert('edit')} />;
  },
});

export const Story = Template.bind({});

export const DefaultAddress = (props?: MergedAddressProp) => <GAddressDisplay {...(props as any)} address={address} />;
