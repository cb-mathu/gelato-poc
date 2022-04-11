declare const _default: import("vue").DefineComponent<{
    label: {
        type: StringConstructor;
    };
    description: {
        type: StringConstructor;
    };
    onUpdate: import("vue").PropType<(event: Event) => void>;
    noResize: {
        type: BooleanConstructor;
        default: boolean;
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
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
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
    noResize: boolean;
} & {
    id?: string | undefined;
    label?: string | undefined;
    errorMessage?: string | undefined;
    description?: string | undefined;
    onUpdate?: ((event: Event) => void) | undefined;
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
    noResize: boolean;
}>;
export default _default;
