import { PropType } from 'vue';
export declare const MODAL_PROPS: {
    isOpen: {
        type: BooleanConstructor;
        required: boolean;
    };
    onClose: {
        type: PropType<() => void>;
        required: boolean;
    };
    title: {
        type: StringConstructor;
        required: boolean;
    };
    description: {
        type: StringConstructor;
        required: boolean;
    };
};
