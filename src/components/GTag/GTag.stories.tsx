import GTag from './GTag';
import { MergedTagProps, TagVariant } from './types';
import { VARIANTS } from './constants';

export default {
  title: 'Component/GTag',
  component: GTag,
  argTypes: {
    variant: {
      description: 'Tag variants',
      options: VARIANTS,
      control: 'select',
    },
  },
};

const Template = (args: any) => ({
  setup() {
    return () => <GTag {...args}>Plan</GTag>;
  },
});

export const Story = Template.bind({});
export const DefaultTag = (props?: MergedTagProps) => <GTag {...(props as any)}>Plan</GTag>;
export const PrimaryTag = () => <GTag variant={TagVariant.Primary}>Plan</GTag>;
export const SecondaryTag = () => <GTag variant={TagVariant.Secondary}>Plan</GTag>;
export const TertiaryTag = () => <GTag variant={TagVariant.Tertiary}>Plan</GTag>;
