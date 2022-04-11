import { BASE_FORM_PROPS } from '../../../utils/props';

export const CORE_TEXTAREA_PROPS = {
  ...BASE_FORM_PROPS,
  noResize: {
    type: Boolean,
    default: false,
  },
};

export const TEXTAREA_NAME = 'CoreTextarea';
