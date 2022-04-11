import { VueComponentProps } from '../../types';
import { ExtractPropTypes, HTMLAttributes } from 'vue';
import { NOTIFICATION_PROPS } from './constants';

export enum NotificationVariant {
  Primary = 'primary',
  Warning = 'warning',
  Success = 'success',
  Alert = 'alert',
}

export enum NotificationSize {
  Small = 'small',
  Large = 'large',
}

export type NotificationProps = ExtractPropTypes<typeof NOTIFICATION_PROPS>;
export type NativeDivProps = Omit<HTMLAttributes, keyof NotificationProps>;
export type MergedNotificationProps = Partial<NotificationProps & VueComponentProps & NativeDivProps>;
