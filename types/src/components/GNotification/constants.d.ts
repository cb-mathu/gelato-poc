import { PropType } from 'vue';
import { NotificationVariant, NotificationSize } from './types';
export declare const VARIANTS: NotificationVariant[];
export declare const SIZES: NotificationSize[];
export declare const NOTIFICATION_PROPS: {
    variant: {
        type: PropType<NotificationVariant>;
        validator: (val: NotificationVariant) => boolean;
    };
    size: {
        type: PropType<NotificationSize>;
        validator: (val: NotificationSize) => boolean;
        default: NotificationSize;
    };
    id: {
        type: StringConstructor;
        required: boolean;
    };
    class: {
        type: StringConstructor;
        required: boolean;
        default: string;
    };
};
