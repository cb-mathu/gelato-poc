import { VueComponentProps } from '../../types';
import { ExtractPropTypes, HTMLAttributes } from 'vue';
import { NOTIFICATION_PROPS } from './constants';
export declare enum NotificationVariant {
    Primary = "primary",
    Warning = "warning",
    Success = "success",
    Alert = "alert"
}
export declare enum NotificationSize {
    Small = "small",
    Large = "large"
}
export declare type NotificationProps = ExtractPropTypes<typeof NOTIFICATION_PROPS>;
export declare type NativeDivProps = Omit<HTMLAttributes, keyof NotificationProps>;
export declare type MergedNotificationProps = Partial<NotificationProps & VueComponentProps & NativeDivProps>;
