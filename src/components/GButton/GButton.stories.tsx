import GButton from './GButton';
import { VARIANTS } from './constants';
import { MergedButtonProps, ButtonVariant, ButtonProps } from './types';

export default {
  title: 'Component/GButton',
  component: GButton,
  argTypes: {
    fluid: {
      description: 'Make button takes full width available',
      control: {
        type: 'boolean',
      },
    },
    loading: {
      description: 'Show progress inside button',
      control: {
        type: 'boolean',
      },
    },
    variant: {
      description: 'Button variants',
      options: VARIANTS,
      control: {
        type: 'select',
      },
    },
  },
};

const Template = (args: ButtonProps) => ({
  setup() {
    return () => <GButton {...args}>Click me!</GButton>;
  },
});

export const Story = Template.bind({});
export const DefaultButton = (props?: MergedButtonProps) => <GButton {...(props as any)}>Click me!</GButton>;
export const LoadingButton = () => (
  <GButton variant={ButtonVariant.Primary} loading>
    Click me!
  </GButton>
);
export const PrimaryButton = () => <GButton variant={ButtonVariant.Primary}>Click me!</GButton>;
export const OutlinedButton = () => <GButton variant={ButtonVariant.Outlined}>Click me!</GButton>;
export const LinkButton = (props?: MergedButtonProps) => (
  <GButton variant={ButtonVariant.Link} onClick={props?.onClick}>
    Click me!
  </GButton>
);
