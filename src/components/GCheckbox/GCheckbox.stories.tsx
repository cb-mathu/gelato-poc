import { ref } from 'vue';
import GCheckbox from './GCheckbox';
import { MergedCheckboxProps } from './types';

export default {
  title: 'Component/Forms/GCheckbox',
  component: GCheckbox,
  argTypes: {
    name: {
      default: 'Name of the field',
    },
    label: {
      description: 'Label for the field',
      control: {
        type: 'text',
      },
    },
    disabled: {
      description: 'Disable the field',
      control: {
        type: 'boolean',
      },
    },
    autofocus: {
      description: 'Autofocus the field',
      default: false,
      control: {
        type: 'boolean',
      },
    },
    required: {
      description: 'Field is required',
      default: false,
      control: {
        type: 'boolean',
      },
    },
    readonly: {
      description: 'Field is readonly',
      default: false,
      control: {
        type: 'boolean',
      },
    },
    modelValue: {
      description:
        "v-model value: If it's a single checkbox, modelValue will be either trueValue or falseValue. If its group/multi checkbox, modelValue will be array of checked values",
      defaultValue: 'consent1',
      control: {
        type: 'text',
      },
    },
    trueValue: {
      description: 'Value to be emitted when the field is checked. Applicable only for single checkbox. Eg: "yes"',
      defaultValue: 'consent1',
      control: {
        type: 'text',
      },
    },
    falseValue: {
      description: 'Value to be emitted when the field is unchecked. Applicable only for single checkbox. Eg: "no"',
      defaultValue: 'consent2',
      control: {
        type: 'text',
      },
    },
    value: {
      description: 'Default value',
      control: {
        type: 'text',
      },
    },
    id: {
      description: 'Id of the field',
      control: {
        type: 'text',
      },
    },
    class: {
      description: 'Class of the field',
      defaulValue: '',
      control: {
        type: 'text',
      },
    },
    invalid: {
      description: 'Field is invalid',
      defaulValue: false,
      control: {
        type: 'boolean',
      },
    },
    errorMessage: {
      description: 'Error message for invalid field (Applicable only if invalid is set)',
      defaulValue: '',
      control: {
        type: 'text',
      },
    },
  },
};

const Template = (args: any) => ({
  components: { GCheckbox },
  setup() {
    const consentG1 = 'consent1';
    const consentG2 = 'consent2';
    const input = ref([consentG1]);
    const solo = ref(args.modelValue || consentG1);

    const attributes = {
      disabled: args.disabled,
      readonly: args.readonly,
      invalid: args.invalid,
      errorMessage: args.errorMessage,
    };

    return () => {
      const slots = {
        label: () => <span>{args.label}</span>,
      };
      return (
        <div style="display: grid; grid-gap: 0.5rem;">
          <b>Selected: {solo.value}</b>
          <div>
            <GCheckbox
              {...attributes}
              id="sep-checkbox-story"
              v-model={solo.value}
              trueValue={consentG1}
              falseValue={consentG2}
              v-slots={slots}
            />
          </div>
          <hr />
          <b>Group selected: {input.value.join(', ')}</b>

          <GCheckbox {...attributes} id="checkbox-story1" v-model={input.value} value={consentG1} label={args.groupLabel1} />
          <GCheckbox {...attributes} id="checkbox-story2" v-model={input.value} value={consentG2} label={args.groupLabel2} />
        </div>
      );
    };
  },
});

const slots = {
  label: () => <span>Ship to my billing address</span>,
};

export const Story: any = Template.bind({});
Story.args = {
  label: 'I would like to receive marketing emails from Acme Inc.',
  groupLabel1: 'I would like to receive marketing emails from Acme Inc.',
  groupLabel2: 'Send me information about new products and services when available.',
};

export const DefaultCheckbox = () => <GCheckbox />;

export const CheckboxWithLabel = (props?: MergedCheckboxProps) => <GCheckbox {...(props as any)} label="Ship to my billing address" />;

export const CheckboxWithLabelAsSlot = () => <GCheckbox v-slots={slots} />;

export const DisabledCheckbox = () => <GCheckbox label="Ship to my billing address" disabled />;

export const ReadonlyCheckbox = () => <GCheckbox label="Ship to my billing address" readonly />;

export const InvalidCheckbox = () => (
  <GCheckbox label="Ship to my billing address" invalid errorMessage="This is an error message, ooh poor you!" />
);

export const CheckboxGroup = (props?: any) => {
  return {
    setup() {
      const addresses = ref(props?.addresses || []);
      return () => (
        <>
          <div>Selected : [{addresses.value?.join(', ')}]</div>
          <GCheckbox id="checkbox-test1" v-model={addresses.value} value="billing" label="Ship to my billing address" />
          <GCheckbox id="checkbox-test2" v-model={addresses.value} value="shipping" label="Ship to my shipping address" />
        </>
      );
    },
  };
};
