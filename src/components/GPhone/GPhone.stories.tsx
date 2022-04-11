import { ref } from 'vue';
import GPhone from './GPhone';
import { GNotification } from '../GNotification';

export default {
  title: 'Component/Forms/GPhone',
  component: GPhone,
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
    let input = ref('7358590128');
    let countryCode = ref('IN');

    return () => {
      const attributes = {
        disabled: args.disabled,
        readonly: args.readonly,
        invalid: args.invalid,
        errorMessage: args.errorMessage,
        countryCode: countryCode?.value,
      };

      return (
        <div>
          <div style="margin-bottom: 20px;">
            <GPhone
              {...attributes}
              v-models={[
                [countryCode.value, 'countryCode'],
                [input.value, 'modelValue'],
              ]}
              id="input"
              label={args.label}
              description={args.description}
            >
              {{
                label: () => args.labelSlot,
                default: () => args.descriptionSlot,
              }}
            </GPhone>
          </div>
          <GNotification>
            Raw Value :<b>{input.value}</b>
            <br />
            Country Code : <b>{countryCode.value}</b>
          </GNotification>
        </div>
      );
    };
  },
});

const testLabel = 'Phone number';
const testDescription = 'Enter your phone number';
const testErroMessage = 'This is an error message, ooh poor you!';

//Default
export const DefaultPhone = Template.bind({});

// With Label
export const PhoneWithLabel = (props?: any) => <GPhone label={testLabel} countryCode={'IN'} modelValue="+917502954646" {...props} />;

// With description
export const PhoneWithDescription = () => <GPhone label={testLabel} description={testDescription} />;

// with Slots
export const PhoneWithSlots: any = (props?: any) => (
  <GPhone {...props} v-slots={{ label: () => testLabel, default: () => testDescription }} />
);

// Disabled
export const DisabledPhone: any = () => <GPhone label={testLabel} disabled />;

// Readonly
export const ReadonlyPhone: any = () => <GPhone label={testLabel} readonly />;

// Invalid
export const InvalidPhone: any = () => <GPhone label={testLabel} invalid errorMessage={testErroMessage} />;

// Lazy
export const LazyPhone = () => ({
  setup() {
    let input = ref('');

    return () => (
      <div>
        <div style="margin-bottom: 20px;">
          <GPhone label={testLabel} v-model={[input.value, ['lazy']]} />
        </div>
        <GNotification>
          Entered Value:<b>{input.value}</b>
        </GNotification>
      </div>
    );
  },
});
