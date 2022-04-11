import { BASE_FORM_PROPS } from '../../utils/props';

export const CHECKBOX_PROPS = {
  ...BASE_FORM_PROPS,
  trueValue: {
    type: [Boolean, Number, String],
    default: true,
  },
  falseValue: {
    type: [Boolean, Number, String],
    default: false,
  },
  value: {
    type: [String, Number],
  },
  label: {
    type: String,
  },
  description: {
    type: String,
  },
  modelValue: {
    type: [String, Number, Object, Array, Boolean],
  },
};
