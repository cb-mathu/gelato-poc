import GQuantity from './GQuantity';
import { ref } from 'vue';
import { GNotification } from '../GNotification';
import { MergedQuantityProps, QuantityProps } from './types';

export default {
  title: 'Component/Forms/GQuantity',
  component: GQuantity,
  argTypes: {
    min: {
      description: 'Max value',
      control: {
        type: 'number',
      },
    },
    max: {
      description: 'Min value',
      control: {
        type: 'number',
      },
    },
    step: {
      description: 'Stepper value',
      control: {
        type: 'number',
      },
    },
  },
};

const Template = (args: QuantityProps) => ({
  setup() {
    const input = ref(6);
    return () => (
      <div style="display:grid;grid-gap: 0.5rem;">
        <div>
          <GQuantity {...args} v-model={input.value} />
        </div>
        <GNotification style="margin-top: 1rem">
          Entered Value:<b>{input.value}</b>
        </GNotification>
      </div>
    );
  },
});

export const Story = Template.bind({});

export const DefaultQuantity = (props?: MergedQuantityProps) => <GQuantity {...(props as any)} />;

export const DisabledQuantity = () => <GQuantity value={5} disabled />;

export const ReadOnlyQuantity = () => <GQuantity value={5} readonly />;

export const InvalidQuantity = () => <GQuantity value={5} invalid />;
