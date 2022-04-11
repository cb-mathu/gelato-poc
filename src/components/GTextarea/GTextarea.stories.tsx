import { ref } from 'vue';
import GTextarea from './GTextarea';
import { GNotification } from '../GNotification';
import { MergedTextareaProps } from '../core/Textarea/types';

export default {
  title: 'Component/Forms/GTextarea',
  component: GTextarea,
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
    maxlength: {
      description: 'Min value (Applicable for Text field)',
      control: {
        type: 'number',
      },
    },
    noResize: {
      description: 'Do not Allow resize for the field',
      defaultVal: false,
      control: {
        type: 'boolean',
      },
    },
    cols: {
      description: 'number of cols for the field',
      control: {
        type: 'number',
      },
    },
  },
};

const Template = (args: any) => ({
  setup() {
    let input = ref('Hello from chargebee!');

    const attributes = {
      disabled: args.disabled,
      readonly: args.readonly,
      invalid: args.invalid,
      errorMessage: args.errorMessage,
    };

    return () => (
      <div>
        <div style="margin-bottom: 20px;">
          <GTextarea {...attributes} v-model={input.value} id="input" label={args.label} description={args.description}>
            {{
              label: () => args.labelSlot,
              default: () => args.descriptionSlot,
            }}
          </GTextarea>
        </div>
        <GNotification>
          Entered Value:<b>{input.value}</b>
        </GNotification>
      </div>
    );
  },
});

//Default
export const Story = Template.bind({});


const testLabel = 'First Name';
const testDescription  = 'Lorem ipsum dolor sit amet, consectetur adipiscing elitroin.Lorem ipsum dolor sit amet, consectetur adipiscing elitroin';

export const DefaultTextarea = (props?: MergedTextareaProps, slots?: any) => (
  <GTextarea key="default" modelValue='Hello from chargebee' {...(props as any)} v-slots={slots} />
);


// With Label
export const TextareaWithLabel = (props?:any) => <GTextarea modelValue='Hello from chargebee' label={testLabel} {...props}/>

// With description
export const TextareaWithDescription = () => <GTextarea label={testLabel} modelValue='Hello from chargebee' description={testDescription}/>

// with Slots
export const TextareaWithSlots: any = (props?:any) => <GTextarea modelValue='Hello from chargebee' {...props} v-slots={{label: ()=> testLabel, default: () => testDescription }} />

// Disabled
export const DisabledTextarea: any = ()=> <GTextarea modelValue='Hello from chargebee' label={testLabel} disabled/>

// Readonly
export const ReadonlyTextarea: any = () =>  <GTextarea modelValue='Hello from chargebee' label={testLabel} readonly/>

// Invalid
export const InvalidTextarea: any = () =>  <GTextarea modelValue='Hello from chargebee' label={testLabel} invalid errorMessage="This is an error message, ooh poor you!"/>

// Lazy
export const LazyTextarea = () => ({
  setup() {
    let input = ref('Hello from chargebee');

    return () => (
      <div>
        <div style="margin-bottom: 20px;">
          <GTextarea label={testLabel} v-model={[input.value, ['lazy']]} />
        </div>
        <GNotification>
          Entered Value:<b>{input.value}</b>
        </GNotification>
      </div>
    );
  },
});