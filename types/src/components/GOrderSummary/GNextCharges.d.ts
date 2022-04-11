import { PropType } from 'vue';
import { NextEstimate, OrderSummaryLabels } from './types';
declare const _default: import("vue").DefineComponent<{
    consent: {
        type: ArrayConstructor;
    };
    nextEstimates: {
        type: PropType<NextEstimate[]>;
        required: true;
    };
    onClose: PropType<() => void>;
    labels: {
        type: PropType<OrderSummaryLabels>;
        required: true;
    };
    isOpen: {
        type: BooleanConstructor;
        default: boolean;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "back"[], "back", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    labels: OrderSummaryLabels;
    isOpen: boolean;
    nextEstimates: NextEstimate[];
} & {
    onClose?: (() => void) | undefined;
    consent?: unknown[] | undefined;
}>, {
    isOpen: boolean;
}>;
export default _default;
