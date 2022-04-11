import { PropType } from 'vue';
export declare const INPUT_PROPS: {
    label: {
        type: StringConstructor;
    };
    description: {
        type: StringConstructor;
    };
    'onUpdate:modelValue': PropType<(value: Event) => void>;
    onInput: PropType<(event: Event) => void>;
    onKeydown: PropType<(event: KeyboardEvent) => void>;
    type: {
        type: PropType<import("../core/Input").InputTypes>;
        default: import("../core/Input").InputTypes;
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
};
