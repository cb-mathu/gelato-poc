export const DEFAULT_PROPS = {
  id: {
    type: String,
    required: false,
  },
  class: {
    type: String,
    required: false,
    default: '',
  },
};

export const BASE_FORM_PROPS = {
  disabled: {
    type: Boolean,
  },
  autofocus: {
    type: Boolean,
    default: false,
  },
  autocomplete: {
    type: String,
    default: 'off',
  },
  required: {
    type: Boolean,
    default: false,
  },
  readonly: {
    type: Boolean,
    default: false,
  },
  name: {
    type: String,
    default: '',
  },
  modelValue: {
    type: [String, Number, Boolean],
    default: '',
  },
  placeholder: {
    type: String,
    default: '',
  },
  modelModifiers: {
    default: () => ({}),
  },
  invalid: {
    type: Boolean,
  },
  errorMessage: {
    type: String,
  },
  ...DEFAULT_PROPS,
};
