import { Address } from './types';
declare const _default: {
    title: string;
    component: import("vue").DefineComponent<{
        addresses: {
            type: import("vue").PropType<Address[]>;
            required: true;
        };
        onEdit: {
            type: import("vue").PropType<({ address, idx }: {
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
};
export default _default;
export declare const Default: (args: any) => {
    setup(): () => JSX.Element;
};
