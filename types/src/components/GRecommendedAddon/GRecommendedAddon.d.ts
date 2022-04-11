import { PropType } from 'vue';
import { ProductCardActionEvent, RecommendedProduct } from '../GProductCard';
import { RecommendedAddonLabels } from './types';
declare const _default: import("vue").DefineComponent<{
    products: {
        type: PropType<RecommendedProduct[]>;
        required: true;
    };
    labels: {
        type: PropType<RecommendedAddonLabels>;
        required: true;
    };
    onAction: {
        type: PropType<(event: ProductCardActionEvent) => void>;
        required: true;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    labels: RecommendedAddonLabels;
    onAction: (event: ProductCardActionEvent) => void;
    products: RecommendedProduct[];
} & {}>, {}>;
export default _default;
