import { ComputedRef, PropType } from 'vue';
import { LoaderState, Product, ProductCardAction, ProductCardActionEvent, ProductCardLabels, ProductCardState } from './types';
declare const _default: import("vue").DefineComponent<{
    state: {
        type: PropType<ComputedRef<ProductCardState>>;
        default: () => {
            showTag: boolean;
        };
    };
    product: {
        type: PropType<Product>;
        required: true;
    };
    actions: {
        type: PropType<ProductCardAction[]>;
        required: false;
    };
    onAction: {
        type: PropType<(event: ProductCardActionEvent) => void>;
        required: false;
    };
    loaderState: {
        type: PropType<LoaderState>;
    };
    labels: {
        type: PropType<ProductCardLabels>;
        required: true;
    };
    recommended: {
        type: BooleanConstructor;
        required: false;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "action"[], "action", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    state: ComputedRef<ProductCardState>;
    labels: ProductCardLabels;
    product: Product;
    recommended: boolean;
} & {
    loaderState?: LoaderState | undefined;
    actions?: ProductCardAction[] | undefined;
    onAction?: ((event: ProductCardActionEvent) => void) | undefined;
}>, {
    state: ComputedRef<ProductCardState>;
    recommended: boolean;
}>;
export default _default;
