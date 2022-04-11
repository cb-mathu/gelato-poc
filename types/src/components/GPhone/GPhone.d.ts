import { InputTypes } from '../core/Input/types';
declare const _default: import("vue").DefineComponent<{
    label: {
        type: StringConstructor;
    };
    description: {
        type: StringConstructor;
    };
    onUpdate: import("vue").PropType<(event: Event) => void>;
    countryCode: {
        type: StringConstructor;
    };
    type: {
        type: import("vue").PropType<InputTypes>;
        default: InputTypes;
    };
    formatter: {
        type: FunctionConstructor;
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
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "update:countryCode")[], "update:modelValue" | "update:countryCode", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    class: string;
    type: InputTypes;
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
    label?: string | undefined;
    formatter?: Function | undefined;
    errorMessage?: string | undefined;
    description?: string | undefined;
    onUpdate?: ((event: Event) => void) | undefined;
    countryCode?: string | undefined;
}>, {
    class: string;
    type: InputTypes;
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
