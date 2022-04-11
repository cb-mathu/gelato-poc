import { PropType } from 'vue';
import { Address } from './types';
export declare const ADDRESS_PROPS: {
    address: {
        type: PropType<Address>;
        required: boolean;
    };
    showEdit: {
        type: PropType<boolean>;
        default: boolean;
    };
    onEdit: {
        type: PropType<() => void>;
        required: boolean;
    };
};
