import { PropType } from 'vue';
import { Product, ProductTier } from './types';
declare const _default: import("vue").DefineComponent<{
    tier: {
        type: PropType<ProductTier>;
    };
    product: {
        type: PropType<Product>;
        required: true;
    };
    showTotal: BooleanConstructor;
}, () => JSX.Element | null, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    product: Product;
    showTotal: boolean;
} & {
    tier?: ProductTier | undefined;
}>, {
    showTotal: boolean;
}>;
export default _default;
