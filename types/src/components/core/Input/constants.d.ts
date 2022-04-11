import { InputTypes } from './types';
import { PropType } from 'vue';
export declare const CORE_INPUT_PROPS: {
    type: {
        type: PropType<InputTypes>;
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
};
export declare const INPUT_NAME = "CoreInput";
