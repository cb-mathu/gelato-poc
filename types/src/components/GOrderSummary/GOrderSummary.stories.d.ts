declare const _default: {
    title: string;
    component: import("vue").DefineComponent<{
        state: {
            type: import("vue").PropType<import("./types").GOrderSummaryState>;
            required: true;
        };
        products: {
            type: import("vue").PropType<import("../GProductCard").Product[]>;
            required: true;
        };
        tax: {
            type: import("vue").PropType<import("./types").TaxProp>;
            required: false;
        };
        labels: {
            type: import("vue").PropType<import("./types").OrderSummaryLabels>;
            required: true;
        };
        subTotal: {
            type: StringConstructor;
            required: true;
        };
        total: {
            type: StringConstructor;
            required: true;
        };
        nextEstimates: {
            type: import("vue").PropType<import("./types").NextEstimate[]>;
            required: true;
        };
        immediateNextCharge: {
            type: import("vue").PropType<import("./types").NextEstimate>;
        };
        actions: {
            type: import("vue").PropType<import("./types").OrderSummaryActions>;
        };
        consentFields: {
            type: import("vue").PropType<import("./types").ConsentField[]>;
        };
        agreementFields: {
            type: import("vue").PropType<import("./types").AgreementField[]>;
        };
        appliedCoupons: {
            type: import("vue").PropType<import("./types").AppliedCoupon[]>;
            required: true;
        };
        loader: {
            type: BooleanConstructor;
        };
        showBottomInfo: {
            type: BooleanConstructor;
        };
    }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
        loader: boolean;
        state: import("./types").GOrderSummaryState;
        labels: import("./types").OrderSummaryLabels;
        subTotal: string;
        products: import("../GProductCard").Product[];
        appliedCoupons: import("./types").AppliedCoupon[];
        total: string;
        nextEstimates: import("./types").NextEstimate[];
        showBottomInfo: boolean;
    } & {
        actions?: import("./types").OrderSummaryActions | undefined;
        tax?: import("./types").TaxProp | undefined;
        consentFields?: import("./types").ConsentField[] | undefined;
        immediateNextCharge?: import("./types").NextEstimate | undefined;
        agreementFields?: import("./types").AgreementField[] | undefined;
    }>, {
        loader: boolean;
        showBottomInfo: boolean;
    }>;
};
export default _default;
export declare const Cart: any;
export declare const Payment: any;
