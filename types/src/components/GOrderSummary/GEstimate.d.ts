import { PropType } from 'vue';
import { AppliedCoupon, EstimateActions, GOrderSummaryState, OrderSummaryLabels, TaxProp } from './types';
import { Product } from '../GProductCard';
declare const _default: import("vue").DefineComponent<{
    state: {
        type: PropType<GOrderSummaryState>;
    };
    products: {
        type: PropType<Product[]>;
        required: true;
    };
    tax: {
        type: PropType<TaxProp>;
        required: false;
    };
    subTotal: {
        type: StringConstructor;
        required: true;
    };
    total: {
        type: StringConstructor;
        required: true;
    };
    labels: {
        type: PropType<OrderSummaryLabels>;
        required: true;
    };
    isNextCharge: {
        type: BooleanConstructor;
        default: boolean;
    };
    nextChargeDate: {
        type: StringConstructor;
    };
    actions: {
        type: PropType<EstimateActions>;
        required: false;
    };
    appliedCoupons: {
        type: PropType<AppliedCoupon[]>;
        required: false;
        default: never[];
    };
    loader: {
        type: BooleanConstructor;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    loader: boolean;
    labels: OrderSummaryLabels;
    subTotal: string;
    products: Product[];
    appliedCoupons: AppliedCoupon[];
    total: string;
    isNextCharge: boolean;
} & {
    state?: GOrderSummaryState | undefined;
    actions?: EstimateActions | undefined;
    tax?: TaxProp | undefined;
    nextChargeDate?: string | undefined;
}>, {
    loader: boolean;
    appliedCoupons: AppliedCoupon[];
    isNextCharge: boolean;
}>;
export default _default;
