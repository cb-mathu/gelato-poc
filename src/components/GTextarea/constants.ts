import { PropType } from 'vue';
import { CORE_TEXTAREA_PROPS } from '../core/Textarea';

export const TEXTAREA_PROPS = {
  ...CORE_TEXTAREA_PROPS,
  label: {
    type: String,
  },
  description: {
    type: String,
  },
  onUpdate: Function as PropType<(event: Event) => void>,
};
