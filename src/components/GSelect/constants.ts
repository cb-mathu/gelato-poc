import { PropType } from 'vue';
import { BASE_FORM_PROPS } from '../../utils/props';

export const SELECT_PROPS = {
  ...BASE_FORM_PROPS,
  label: {
    type: String,
  },
  description: {
    type: String,
  },
  onUpdate: Function as PropType<(event: Event) => void>,
};
