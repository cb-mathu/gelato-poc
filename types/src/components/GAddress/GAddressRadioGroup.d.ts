import { PropType } from 'vue';
import { Address } from './types';
declare const _default: import("vue").DefineComponent<{
    addresses: {
        type: PropType<Address[]>;
        required: true;
    };
    onEdit: {
        type: PropType<({ address, idx }: {
            address: Address;
            idx: number;
        }) => void>;
        required: false;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "edit"[], "edit", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    addresses: Address[];
} & {
    onEdit?: (({ address, idx }: {
        address: Address;
        idx: number;
    }) => void) | undefined;
}>, {}>;
export default _default;
