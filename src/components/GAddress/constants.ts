import { PropType } from 'vue';
import { Address } from './types';

export const ADDRESS_PROPS = {
  address: {
    type: Object as PropType<Address>,
    required: true,
  },
  showEdit: {
    type: Object as PropType<boolean>,
    default: true,
  },
  onEdit: {
    type: Function as PropType<() => void>,
    required: false,
  },
};
