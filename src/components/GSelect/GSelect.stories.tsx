import { ref } from 'vue';
import GSelect from './GSelect';
import { GNotification } from '../GNotification';

export default {
  title: 'Component/Forms/GSelect',
  component: GSelect,
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
    description: {
      description: 'Description for the field',
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
      description: 'v-model value',
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
    placeholder: {
      description: 'placeholder of the field',
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

const options = () => (
  <>
    <option value="">Select country</option>
    <option value="Germany">Germany</option>
    <option value="India">India</option>
  </>
);

const Template = (args: any) => ({
  setup() {
    let input = ref(args.defaultValue || 'India');

    const attributes = {
      disabled: args.disabled,
      readonly: args.readonly,
      invalid: args.invalid,
      errorMessage: args.errorMessage,
    };

    return () => (
      <div>
        <div style="margin-bottom: 20px;">
          <GSelect {...attributes} v-model={input.value} id="input" label={args.label} description={args.description}>
            {{
              label: () => args.labelSlot,
              default: () => args.descriptionSlot,
              options: options(),
            }}
          </GSelect>
        </div>
        <GNotification>
          Selected Value:<b>{input.value}</b>
        </GNotification>
      </div>
    );
  },
});

//Story
export const Story = Template.bind({});

export const DefaultSelect = (props?: any) => (
  <GSelect {...props}>
    {{
      options,
    }}
  </GSelect>
);

export const SelectWithLabel = (props?: any) => (
  <GSelect {...props} label="Select Country">
    {{
      options,
    }}
  </GSelect>
);

export const SelectWithLabelAsSlot = () => (
  <GSelect>
    {{
      label: () => <span>Select Country</span>,
      options,
    }}
  </GSelect>
);

export const SelectWithDescription = () => (
  <GSelect description="Will be used in tax calculation">
    {{
      label: () => <span>Select Country</span>,
      default: () => <span>Select Country</span>,
      options,
    }}
  </GSelect>
);

export const SelectWithDescriptionAsSlot = () => (
  <GSelect>
    {{
      label: () => <span>Select Country</span>,
      default: () => <span>Will be used in tax calculation</span>,
      options,
    }}
  </GSelect>
);

export const DisabledSelect = () => (
  <GSelect disabled>
    {{
      label: () => <span>Select Country</span>,
      default: () => <span>Will be used in tax calculation</span>,
      options,
    }}
  </GSelect>
);

export const ReadonlySelect = () => (
  <GSelect readonly>
    {{
      label: () => <span>Select Country</span>,
      default: () => <span>Will be used in tax calculation</span>,
      options,
    }}
  </GSelect>
);

export const InvalidSelect = () => (
  <GSelect invalid errorMessage="This is an error message, ooh poor you!">
    {{
      label: () => <span>Select Country</span>,
      default: () => <span>Will be used in tax calculation</span>,
      options,
    }}
  </GSelect>
);
