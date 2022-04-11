import { PropType } from 'vue';

export const MODAL_PROPS = {
  isOpen: {
    type: Boolean,
    required: true,
  },
  onClose: {
    type: Function as PropType<() => void>,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
};
