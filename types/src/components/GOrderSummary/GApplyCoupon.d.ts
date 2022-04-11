import { PropType } from 'vue';
import { CouponLabels, AppliedCoupon, CouponState, CouponComponentState } from './types';
declare const _default: import("vue").DefineComponent<{
    appliedCoupons: {
        type: PropType<AppliedCoupon[]>;
        required: true;
    };
    onApply: {
        type: PropType<(couponCode: string) => void>;
        required: false;
    };
    onRemove: {
        type: PropType<(couponCode: string) => void>;
        required: false;
    };
    onUpdateCouponComponent: {
        type: PropType<(componentState: CouponComponentState) => void>;
        required: false;
    };
    onChange: {
        type: FunctionConstructor;
        required: false;
    };
    labels: {
        type: PropType<CouponLabels>;
        required: true;
    };
    state: {
        type: PropType<CouponState>;
        required: false;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("apply" | "remove" | "updateCouponComponent" | "change")[], "apply" | "remove" | "updateCouponComponent" | "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    labels: CouponLabels;
    appliedCoupons: AppliedCoupon[];
} & {
    onChange?: Function | undefined;
    state?: CouponState | undefined;
    onApply?: ((couponCode: string) => void) | undefined;
    onRemove?: ((couponCode: string) => void) | undefined;
    onUpdateCouponComponent?: ((componentState: CouponComponentState) => void) | undefined;
}>, {}>;
export default _default;
