import { ref } from 'vue';
import GInput from './GInput';
import { InputTypes } from './types';
import { GNotification } from '../GNotification';
import { MergedInputProps } from './types';
import { Input } from '../core/Input';

export default {
  title: 'Component/Forms/GInput',
  component: GInput,
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
    type: {
      description: 'Input types',
      options: InputTypes,
      defaultValue: InputTypes.Text,
      control: {
        type: 'select',
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
    autocomplete: {
      description: 'Autcomplete for the field',
      defaultValue: 'off',
      control: {
        type: 'text',
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
    min: {
      description: 'Min value (Applicable for Number field)',
      defaulValue: -Infinity,
      control: {
        type: 'number',
      },
    },
    max: {
      description: 'Max value (Applicable for Number field)',
      defaulValue: Infinity,
      control: {
        type: 'number',
      },
    },
    maxlength: {
      description: 'Min value (Applicable for Text field)',
      control: {
        type: 'number',
      },
    },
  },
};

const Template = (args: any) => ({
  setup() {
    let input = ref(args.defaultValue || 'John doe');

    const attributes = {
      ...args,
      disabled: args.disabled,
      readonly: args.readonly,
      invalid: args.invalid,
      errorMessage: args.errorMessage,
    };

    const formatter = (val: string) => val.toUpperCase();

    return () => (
      <div>
        <div class="mb-4">
          <GInput {...attributes} v-model={input.value} id="input" label={args.label} description={args.description}>
            {{
              label: () => args.labelSlot,
              default: () => args.descriptionSlot,
              prefix: () => args.prefixSlot && <args.prefixSlot />,
              suffix: () => args.suffixSlot && <args.suffixSlot />,
            }}
          </GInput>
        </div>
        <div class="mb-4">
          <div>
            <label>GInput with lazy and formatter</label>
          </div>
          <GInput v-model={[input.value, ['lazy']]} formatter={formatter} />
        </div>
        <div class="mb-4">
          <div>
            <label>Core Input</label>
          </div>
          <Input v-model={input.value} />
        </div>
        <div class="mb-4">
          <div>
            <label>Core Input Lazy</label>
          </div>
          <Input v-model={[input.value, ['lazy']]} />
        </div>
        <div class="mb-4">
          <div>
            <label>Core Input Formatter</label>
          </div>
          <Input v-model={input.value} formatter={formatter} />
        </div>
        <GNotification>
          Entered Value:<b>{input.value}</b>
        </GNotification>
      </div>
    );
  },
});

const testLabel = 'First Name';
const testDescription =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elitroin.Lorem ipsum dolor sit amet, consectetur adipiscing elitroin';

//Story
export const Story = Template.bind({});

export const DefaultInput = (props?: MergedInputProps, slots?: any) => (
  <GInput key="default" modelValue="John" {...(props as any)} v-slots={slots} />
);

//Number
export const NumberInput = () => <GInput type={InputTypes.Number} modelValue={10} />;

// With Label
export const InputWithLabel = (props?: any) => <GInput modelValue="John" label={testLabel} {...props} />;

// With description
export const InputWithDescription = () => <GInput label={testLabel} modelValue="John" description={testDescription} />;

// with Slots
export const InputWithSlots: any = (props?: any) => (
  <GInput modelValue="John" {...props} v-slots={{ label: () => testLabel, default: () => testDescription }} />
);

export const addonImage = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20px" viewBox="0 0 20 20" fill="currentColor">
    <path
      fill-rule="evenodd"
      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
      clip-rule="evenodd"
    ></path>
  </svg>
);

// With Prefix
export const InputWithPrefix = () => <GInput label={testLabel} description={testDescription} v-slots={{ prefix: addonImage }} />;

// With Suffix
export const InputWithSuffix = () => <GInput label={testLabel} description={testDescription} v-slots={{ suffix: addonImage }} />;

// With Prefix and Suffix
export const InputWithPrefixAndSuffix = () => (
  <GInput label={testLabel} description={testDescription} v-slots={{ prefix: addonImage, suffix: addonImage }} />
);

// Disabled
export const DisabledInput: any = () => <GInput modelValue="John" label={testLabel} disabled />;

// Readonly
export const ReadonlyInput: any = () => <GInput modelValue="John" label={testLabel} readonly />;

// Invalid
export const InvalidInput: any = () => (
  <GInput modelValue="John" label={testLabel} invalid errorMessage="This is an error message, ooh poor you!" />
);

// Lazy
export const LazyInput = () => ({
  setup() {
    let input = ref('John doe');

    return () => (
      <div>
        <div style="margin-bottom: 20px;">
          <GInput label={testLabel} v-model={[input.value, ['lazy']]} />
        </div>
        <GNotification>
          Entered Value:<b>{input.value}</b>
        </GNotification>
      </div>
    );
  },
});
