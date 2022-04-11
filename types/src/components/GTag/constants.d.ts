import { PropType } from 'vue';
import { TagVariant } from './types';
export declare const VARIANTS: TagVariant[];
export declare const TAG_PROPS: {
    variant: {
        type: PropType<TagVariant>;
        validator: (val: TagVariant) => boolean;
    };
    id: {
        type: StringConstructor;
        required: boolean;
    };
    class: {
        type: StringConstructor;
        required: boolean;
        default: string;
    };
};
