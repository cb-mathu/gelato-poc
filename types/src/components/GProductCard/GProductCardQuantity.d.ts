import { ComputedRef, PropType, Ref } from 'vue';
import { LoaderState, Product, ProductCardLabels, ProductCardState } from './types';
declare const _default: import("vue").DefineComponent<{
    product: {
        type: PropType<Product>;
        required: true;
    };
    labels: {
        type: PropType<ProductCardLabels>;
        required: true;
    };
    state: {
        type: PropType<ProductCardState>;
        required: false;
    };
    loaderState: {
        type: PropType<LoaderState>;
    };
    showTiers: {
        type: PropType<Ref<Boolean>>;
        required: true;
    };
    isLoading: {
        type: PropType<ComputedRef<boolean>>;
        required: true;
    };
    toggleTiers: {
        type: PropType<(value?: boolean | undefined) => boolean>;
        required: true;
    };
    qtyListeners: {
        type: any;
    };
}, () => JSX.Element | null, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    labels: ProductCardLabels;
    product: Product;
    showTiers: Ref<Boolean>;
    isLoading: ComputedRef<boolean>;
    toggleTiers: (value?: boolean | undefined) => boolean;
    qtyListeners: any;
} & {
    state?: ProductCardState | undefined;
    loaderState?: LoaderState | undefined;
}>, {
    qtyListeners: any;
}>;
export default _default;
