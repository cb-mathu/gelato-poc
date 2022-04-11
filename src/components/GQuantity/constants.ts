import { PropType } from 'vue';
import { BASE_FORM_PROPS } from '../../utils/props';

export const QUANTITY_PROPS = {
  ...BASE_FORM_PROPS,
  'onUpdate:modelValue': Function as PropType<(value: number) => void>,
};
