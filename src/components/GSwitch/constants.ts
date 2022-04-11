import { PropType } from 'vue';
import { BASE_FORM_PROPS } from '../../utils/props';

export const SWITCH_PROPS = {
  ...BASE_FORM_PROPS,
  label: {
    type: String,
  },
  modelValue: {
    type: Boolean,
  },
  'onUpdate:modelValue': Function as PropType<(value: boolean) => void>,
};
