import { PaymentUiInfo } from './types';
export declare function getPaymentUi(payment: any): PaymentUiInfo;
export declare function getCardBrandIcon(brand: string): {
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
};
