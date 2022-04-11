declare const _default: import("vue").DefineComponent<{
    width: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
        required: false;
    };
    class: {
        type: StringConstructor;
        required: false;
    };
    fill: {
        type: StringConstructor;
        required: false;
    };
    id: {
        type: StringConstructor;
        default: string;
        required: false;
    };
}, unknown, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    id: string;
    width: string | number;
} & {
    class?: string | undefined;
    fill?: string | undefined;
}>, {
    id: string;
    width: string | number;
}>;
export default _default;
