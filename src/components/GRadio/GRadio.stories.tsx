import { ref } from 'vue';
import GRadio from './GRadio';
import { MergedRadioProps } from './types';

export default {
  title: 'Component/Forms/GRadio',
  component: GRadio,
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
      description: 'v-model value',
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
  setup() {
    const consent1 = args.groupLabel1 || 'On';
    const consent2 = args.groupLabel2 || 'Off';
    let input = ref('On');

    const attributes = {
      disabled: args.disabled,
      readonly: args.readonly,
      invalid: args.invalid,
      errorMessage: args.errorMessage,
    };

    return () => (
      <div style="display:grid;grid-gap: 0.75rem;">
        <b>Selected: {input.value}</b>
        <div>
          <GRadio {...attributes} name="sep-radio-story" id={consent1} value={consent1} v-model={input.value}>
            {args.groupLabel1}
          </GRadio>
          <GRadio {...attributes} name="sep-radio-story" id={consent2} value={consent2} v-model={input.value}>
            {args.groupLabel2}
          </GRadio>
        </div>
      </div>
    );
  },
});

//Story
export const Story: any = Template.bind({});
Story.args = {
  groupLabel1: 'On',
  groupLabel2: 'Off',
};

// With Label
export const DefaultRadio = (props?: MergedRadioProps, slots?: any) => (
  <GRadio key="default" {...(props as any)}>
    {slots?.default?.() || 'On'}
  </GRadio>
);

// Disabled
export const DisabledRadio = () => (
  <GRadio key="disable" disabled>
    On
  </GRadio>
);

// Readonly
export const ReadonlyRadio = () => (
  <GRadio key="readonly" readonly>
    On
  </GRadio>
);

// Invalid
export const InvalidRadio = () => (
  <GRadio key="invalid" invalid errorMessage="This is an error message, ooh poor you!">
    On
  </GRadio>
);

// Radio group
export const RadioGroup = (props?: any) => {
  return {
    setup() {
      const consent1 = 'On';
      const consent2 = 'Off';
      let input = ref(props?.value || 'On');

      return () => (
        <div style="display:grid;grid-gap: 0.75rem;">
          <b>Selected: {input.value}</b>
          <div>
            <GRadio name="sep-radio-story" id={consent1} value={consent1} v-model={input.value}>
              {consent1}
            </GRadio>
            <GRadio name="sep-radio-story" id={consent2} value={consent2} v-model={input.value}>
              {consent2}
            </GRadio>
          </div>
        </div>
      );
    },
  };
};
