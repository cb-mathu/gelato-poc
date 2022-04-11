import { DEFAULT_PROPS } from '../../utils/props';
import { PropType } from 'vue';
import { TagVariant } from './types';

export const VARIANTS = [TagVariant.Primary, TagVariant.Secondary, TagVariant.Tertiary];

export const TAG_PROPS = {
  ...DEFAULT_PROPS,
  variant: {
    type: String as PropType<TagVariant>,
    validator: (val: TagVariant) => VARIANTS.includes(val),
  },
};
