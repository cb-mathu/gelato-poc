import { PropType } from 'vue';
import { DEFAULT_PROPS } from '../../utils/props';
import { NotificationVariant, NotificationSize } from './types';

export const VARIANTS = [NotificationVariant.Primary, NotificationVariant.Alert, NotificationVariant.Warning, NotificationVariant.Success];
export const SIZES = [NotificationSize.Small, NotificationSize.Large];

export const NOTIFICATION_PROPS = {
  ...DEFAULT_PROPS,
  variant: {
    type: String as PropType<NotificationVariant>,
    validator: (val: NotificationVariant) => VARIANTS.includes(val),
  },
  size: {
    type: String as PropType<NotificationSize>,
    validator: (val: NotificationSize) => SIZES.includes(val),
    default: NotificationSize.Large,
  },
};
