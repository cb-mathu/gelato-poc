import { BASE_FORM_PROPS } from '../../../utils/props';
import { InputTypes } from './types';
import { PropType } from 'vue';

export const CORE_INPUT_PROPS = {
  ...BASE_FORM_PROPS,
  type: {
    type: String as PropType<InputTypes>,
    default: InputTypes.Text,
  },
  formatter: {
    type: Function,
  },
};

export const INPUT_NAME = 'CoreInput';
