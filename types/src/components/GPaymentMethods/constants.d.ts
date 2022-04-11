import { PaymentUiInfo } from './types';
export declare const PAYMENT_METHODS: {
    value: string;
    component: import("vue").DefineComponent<{
        active: BooleanConstructor;
    }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
        active: boolean;
    } & {}>, {
        active: boolean;
    }>;
}[];
export declare const PAYMENT_METHOD_COMPONENTS: Array<PaymentUiInfo>;
export declare const CARD_BRAND_ICONS: ({
    brand: string;
    icon: import("vue").DefineComponent<{
        width: {
            type: (StringConstructor | NumberConstructor)[];
            default: string;
        };
    }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
        width: string | number;
    } & {}>, {
        width: string | number;
    }>;
} | {
    brand: string;
    icon: import("vue").DefineComponent<{}, () => JSX.Element, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{} & {}>, {}>;
})[];
