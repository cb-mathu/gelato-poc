import { PropType } from 'vue';
import { DEFAULT_PROPS } from '../../utils/props';
import { ButtonVariant, ButtonType } from './types';

export const VARIANTS = [ButtonVariant.Primary, ButtonVariant.Outlined, ButtonVariant.Link];

export const BUTTON_PROPS = {
  ...DEFAULT_PROPS,
  as: {
    type: String,
    default: 'button',
  },
  type: String as PropType<ButtonType>,
  variant: {
    type: String as PropType<ButtonVariant>,
    validator: (val: ButtonVariant) => VARIANTS.includes(val),
  },
  fluid: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  loaderId: {
    type: String,
    required: false,
  },
  fill: {
    type: String,
    required: false,
  },
};
