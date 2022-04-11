import { PropType } from 'vue';
export declare const PHONE_INPUT_PROPS: {
    label: {
        type: StringConstructor;
    };
    description: {
        type: StringConstructor;
    };
    onUpdate: PropType<(event: Event) => void>;
    countryCode: {
        type: StringConstructor;
    };
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
export interface DialCode {
    name: string;
    dialCode: string;
    code: string;
    format?: string;
}
interface AutoCompleteMapping {
    [key: string]: string | null;
}
export declare const AUTO_COMPLETE_MAPPING: AutoCompleteMapping;
export declare const DIAL_CODES: DialCode[];
export {};
