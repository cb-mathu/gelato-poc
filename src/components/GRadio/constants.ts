import { BASE_FORM_PROPS } from '../../utils/props';

export const RADIO_PROPS = {
  ...BASE_FORM_PROPS,
  value: {
    type: [Number, String],
  },
};
