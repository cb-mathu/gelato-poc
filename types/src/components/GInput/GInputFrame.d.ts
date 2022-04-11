import { InputErrorProps } from './types';
export declare const GInputFrameErrorMessage: (props: InputErrorProps) => JSX.Element;
declare const _default: import("vue").DefineComponent<{
    label: {
        type: StringConstructor;
    };
    description: {
        type: StringConstructor;
    };
    'onUpdate:modelValue': import("vue").PropType<(value: Event) => void>;
    onInput: import("vue").PropType<(event: Event) => void>;
    onKeydown: import("vue").PropType<(event: KeyboardEvent) => void>;
    type: {
        type: import("vue").PropType<import("./types").InputTypes>;
        default: import("./types").InputTypes;
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
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "blur"[], "blur", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    class: string;
    type: import("./types").InputTypes;
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
    onInput?: ((event: Event) => void) | undefined;
    onKeydown?: ((event: KeyboardEvent) => void) | undefined;
    label?: string | undefined;
    formatter?: Function | undefined;
    errorMessage?: string | undefined;
    description?: string | undefined;
    "onUpdate:modelValue"?: ((value: Event) => void) | undefined;
}>, {
    class: string;
    type: import("./types").InputTypes;
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
