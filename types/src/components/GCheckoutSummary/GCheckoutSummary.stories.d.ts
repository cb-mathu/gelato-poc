declare const _default: {
    title: string;
    component: import("vue").DefineComponent<{
        amountPaid: {
            type: import("vue").PropType<import("./types").Money>;
            required: false;
        };
        card: {
            type: import("vue").PropType<import("./types").Card>;
            required: false;
        };
        shippingAddress: {
            type: import("vue").PropType<import("../GAddress").ShippingAddress>;
            required: false;
        };
        labels: {
            type: import("vue").PropType<import("./types").CheckoutSummaryLabels>;
            required: true;
        };
        actions: {
            type: import("vue").PropType<import("./types").CheckoutSummaryActions>;
        };
        loader: {
            type: BooleanConstructor;
        };
    }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
        loader: boolean;
        labels: import("./types").CheckoutSummaryLabels;
    } & {
        actions?: import("./types").CheckoutSummaryActions | undefined;
        amountPaid?: import("./types").Money | undefined;
        card?: import("./types").Card | undefined;
        shippingAddress?: import("../GAddress").ShippingAddress | undefined;
    }>, {
        loader: boolean;
    }>;
};
export default _default;
export declare const Default: any;
