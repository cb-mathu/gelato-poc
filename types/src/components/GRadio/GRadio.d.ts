declare const _default: import("vue").DefineComponent<{
    value: {
        type: (StringConstructor | NumberConstructor)[];
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
    disabled: {
        type: BooleanConstructor;
    };
    autofocus: {
        type: BooleanConstructor;
        default: boolean;
    };
    autocomplete: {
        type: StringConstructor;
        default: string;
    };
    required: {
        type: BooleanConstructor;
        default: boolean;
    };
    readonly: {
        type: BooleanConstructor;
        default: boolean;
    };
    name: {
        type: StringConstructor;
        default: string;
    };
    modelValue: {
        type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
        default: string;
    };
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    modelModifiers: {
        default: () => {};
    };
    invalid: {
        type: BooleanConstructor;
    };
    errorMessage: {
        type: StringConstructor;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    class: string;
    autofocus: boolean;
    disabled: boolean;
    name: string;
    placeholder: string;
    modelValue: string | number | boolean;
    autocomplete: string;
    required: boolean;
    readonly: boolean;
    modelModifiers: {};
    invalid: boolean;
} & {
    id?: string | undefined;
    value?: string | number | undefined;
    errorMessage?: string | undefined;
}>, {
    class: string;
    autofocus: boolean;
    disabled: boolean;
    name: string;
    placeholder: string;
    modelValue: string | number | boolean;
    autocomplete: string;
    required: boolean;
    readonly: boolean;
    modelModifiers: {};
    invalid: boolean;
}>;
export default _default;
