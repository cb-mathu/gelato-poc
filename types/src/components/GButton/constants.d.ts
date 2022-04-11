import { PropType } from 'vue';
import { ButtonVariant } from './types';
export declare const VARIANTS: ButtonVariant[];
export declare const BUTTON_PROPS: {
    as: {
        type: StringConstructor;
        default: string;
    };
    type: PropType<"submit" | "reset" | "button" | undefined>;
    variant: {
        type: PropType<ButtonVariant>;
        validator: (val: ButtonVariant) => boolean;
    };
    fluid: {
        type: BooleanConstructor;
        default: boolean;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    loaderId: {
        type: StringConstructor;
        required: boolean;
    };
    fill: {
        type: StringConstructor;
        required: boolean;
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
