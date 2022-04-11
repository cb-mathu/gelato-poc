import { ref } from 'vue';
import GSwitch from './GSwitch';
import { GNotification } from '../GNotification';
import { MergedSwitchProps } from './types';

export default {
  title: 'Component/Forms/GSwitch',
  component: GSwitch,
  argTypes: {
    disabled: {
      description: 'Disable the field',
      control: {
        type: 'boolean',
      },
    },
  },
};

const Template = (args: any) => ({
  setup() {
    const toggleEnabled = ref(false);
    return () => (
      <div style="display:grid;grid-gap: 0.75rem;">
        <GSwitch {...args} v-model={toggleEnabled.value} id="input" />
        <GNotification style="margin-top: 1rem">
          Toggled :<b>{toggleEnabled.value ? 'On' : 'Off'}</b>
        </GNotification>
      </div>
    );
  },
});

const slots = { label: () => <span>Enable</span> };

export const Story = Template.bind({});
export const DefaultSwitch = (props?: MergedSwitchProps) => <GSwitch {...(props as any)} />;
export const DisabledOnSwitch = () => <GSwitch modelValue={true} disabled />;
export const DisabledOffSwitch = () => <GSwitch modelValue={false} disabled />;
export const SwitchWithLabel = (props?: MergedSwitchProps) => <GSwitch {...(props as any)} label="Enable" />;
export const SwitchWithLabelSlot = () => <GSwitch v-slots={slots} />;
export const InvalidSwitch = () => <GSwitch v-slots={slots} invalid errorMessage="This is an error message, ooh poor you!" />;
