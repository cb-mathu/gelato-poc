import { ComputedRef } from 'vue';
import { LoaderState, Product, ProductCardAction, ProductCardActionEvent, ProductCardState } from './types';
declare const _default: {
    title: string;
    component: import("vue").DefineComponent<{
        state: {
            type: import("vue").PropType<ComputedRef<ProductCardState>>;
            default: () => {
                showTag: boolean;
            };
        };
        product: {
            type: import("vue").PropType<Product>;
            required: true;
        };
        actions: {
            type: import("vue").PropType<ProductCardAction[]>;
            required: false;
        };
        onAction: {
            type: import("vue").PropType<(event: ProductCardActionEvent) => void>;
            required: false;
        };
        loaderState: {
            type: import("vue").PropType<LoaderState>;
        };
        labels: {
            type: import("vue").PropType<import("./types").ProductCardLabels>;
            required: true;
        };
        recommended: {
            type: BooleanConstructor;
            required: false;
        };
    }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "action"[], "action", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
        state: ComputedRef<ProductCardState>;
        labels: import("./types").ProductCardLabels;
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
};
export default _default;
export declare const Story: () => {
    setup(): () => JSX.Element;
};
export declare const DefaultPlanCard: () => JSX.Element;
export declare const DefaultAddonCard: () => JSX.Element;
export declare const DefaultChargeCard: () => JSX.Element;
export declare const CardWithDescription: () => JSX.Element;
export declare const CardWithAction: () => JSX.Element;
export declare const MeteredCard: () => JSX.Element;
export declare const PerUnitCard: () => JSX.Element;
export declare const EditableUnitPricingCard: () => JSX.Element;
export declare const InvalidUnitPricingCard: () => JSX.Element;
export declare const TierPricingCard: () => JSX.Element;
export declare const EditableTierPricingCard: () => JSX.Element;
export declare const InvalidTierPricingCard: () => JSX.Element;
export declare const LoadingTierPricingCard: () => JSX.Element;
export declare const ReadonlyTierPricingCard: () => JSX.Element;
