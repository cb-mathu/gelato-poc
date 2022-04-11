import GLogin from './GLogin';
import { LoginLabels, LoginFieldState } from './types';

export default {
  title: 'Component/GLogin',
  component: GLogin,
  argTypes: {
    email: {
      control: 'text',
      description: "Customer's email-id",
      defaultValue: 'hello@chargebee.com',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable password or otp',
      defaultValue: false,
    },
    state: {
      control: 'select',
      options: LoginFieldState,
      defaultValue: LoginFieldState.Password,
    },
  },
};

const Template = (args: any) => ({
  setup() {
    const labels: LoginLabels = {
      title: 'Account information',
      emailLabel: 'Email Address',
      passWordLabel: 'Password',
      otpLabel: 'OTP',
      login: 'Login',
      proceed: 'Proceed',
      loginViaOtp: 'Login via OTP',
      loginViaPassword: 'Login via password',
      resentOtp: 'Resend OTP',
    };
    return () => <GLogin labels={labels} {...args} />;
  },
});

export const Story = Template.bind({});
