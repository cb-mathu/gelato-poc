import { RecommendedProduct } from '../GProductCard';
import { RecommendedAddonLabels } from './types';
declare const _default: {
    title: string;
    component: import("vue").DefineComponent<{
        products: {
            type: import("vue").PropType<RecommendedProduct[]>;
            required: true;
        };
        labels: {
            type: import("vue").PropType<RecommendedAddonLabels>;
            required: true;
        };
        onAction: {
            type: import("vue").PropType<(event: import("../GProductCard").ProductCardActionEvent) => void>;
            required: true;
        };
    }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
        labels: RecommendedAddonLabels;
        onAction: (event: import("../GProductCard").ProductCardActionEvent) => void;
        products: RecommendedProduct[];
    } & {}>, {}>;
};
export default _default;
export declare const Default: () => {
    setup(): () => JSX.Element;
};
