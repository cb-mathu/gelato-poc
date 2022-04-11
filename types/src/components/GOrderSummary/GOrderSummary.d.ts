import { PropType } from 'vue';
import { GOrderSummaryState, OrderSummaryLabels, NextEstimate, OrderSummaryActions, ConsentField, AgreementField, AppliedCoupon, TaxProp } from './types';
import { Product } from '../GProductCard';
declare const _default: import("vue").DefineComponent<{
    state: {
        type: PropType<GOrderSummaryState>;
        required: true;
    };
    products: {
        type: PropType<Product[]>;
        required: true;
    };
    tax: {
        type: PropType<TaxProp>;
        required: false;
    };
    labels: {
        type: PropType<OrderSummaryLabels>;
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
        type: PropType<NextEstimate[]>;
        required: true;
    };
    immediateNextCharge: {
        type: PropType<NextEstimate>;
    };
    actions: {
        type: PropType<OrderSummaryActions>;
    };
    consentFields: {
        type: PropType<ConsentField[]>;
    };
    agreementFields: {
        type: PropType<AgreementField[]>;
    };
    appliedCoupons: {
        type: PropType<AppliedCoupon[]>;
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
    state: GOrderSummaryState;
    labels: OrderSummaryLabels;
    subTotal: string;
    products: Product[];
    appliedCoupons: AppliedCoupon[];
    total: string;
    nextEstimates: NextEstimate[];
    showBottomInfo: boolean;
} & {
    actions?: OrderSummaryActions | undefined;
    tax?: TaxProp | undefined;
    consentFields?: ConsentField[] | undefined;
    immediateNextCharge?: NextEstimate | undefined;
    agreementFields?: AgreementField[] | undefined;
}>, {
    loader: boolean;
    showBottomInfo: boolean;
}>;
export default _default;
