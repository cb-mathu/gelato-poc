import { PropType } from 'vue';
import { Card, CheckoutSummaryActions, CheckoutSummaryLabels, Money } from './types';
import { ShippingAddress } from '../GAddress';
declare const _default: import("vue").DefineComponent<{
    amountPaid: {
        type: PropType<Money>;
        required: false;
    };
    card: {
        type: PropType<Card>;
        required: false;
    };
    shippingAddress: {
        type: PropType<ShippingAddress>;
        required: false;
    };
    labels: {
        type: PropType<CheckoutSummaryLabels>;
        required: true;
    };
    actions: {
        type: PropType<CheckoutSummaryActions>;
    };
    loader: {
        type: BooleanConstructor;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    loader: boolean;
    labels: CheckoutSummaryLabels;
} & {
    actions?: CheckoutSummaryActions | undefined;
    amountPaid?: Money | undefined;
    card?: Card | undefined;
    shippingAddress?: ShippingAddress | undefined;
}>, {
    loader: boolean;
}>;
export default _default;
