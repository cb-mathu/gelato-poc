import { PropType } from 'vue';
import { CORE_INPUT_PROPS } from '../core/Input';

export const INPUT_PROPS = {
  ...CORE_INPUT_PROPS,
  label: {
    type: String,
  },
  description: {
    type: String,
  },
  'onUpdate:modelValue': Function as PropType<(value: Event) => void>,
  onInput: Function as PropType<(event: Event) => void>,
  onKeydown: Function as PropType<(event: KeyboardEvent) => void>,
};
