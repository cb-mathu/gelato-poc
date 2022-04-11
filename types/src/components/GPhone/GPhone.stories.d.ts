declare const _default: {
    title: string;
    component: import("vue").DefineComponent<{
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
            type: import("vue").PropType<import("../GInput").InputTypes>;
            default: import("../GInput").InputTypes;
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
        type: import("../GInput").InputTypes;
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
        type: import("../GInput").InputTypes;
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
    argTypes: {
        name: {
            default: string;
        };
        label: {
            description: string;
            control: {
                type: string;
            };
        };
        description: {
            description: string;
            control: {
                type: string;
            };
        };
        disabled: {
            description: string;
            control: {
                type: string;
            };
        };
        autofocus: {
            description: string;
            default: boolean;
            control: {
                type: string;
            };
        };
        autocomplete: {
            description: string;
            defaultValue: string;
            control: {
                type: string;
            };
        };
        required: {
            description: string;
            default: boolean;
            control: {
                type: string;
            };
        };
        readonly: {
            description: string;
            default: boolean;
            control: {
                type: string;
            };
        };
        modelValue: {
            description: string;
            control: {
                type: string;
            };
        };
        id: {
            description: string;
            control: {
                type: string;
            };
        };
        placeholder: {
            description: string;
            control: {
                type: string;
            };
        };
        class: {
            description: string;
            defaulValue: string;
            control: {
                type: string;
            };
        };
        invalid: {
            description: string;
            defaulValue: boolean;
            control: {
                type: string;
            };
        };
        errorMessage: {
            description: string;
            defaulValue: string;
            control: {
                type: string;
            };
        };
        min: {
            description: string;
            defaulValue: number;
            control: {
                type: string;
            };
        };
        max: {
            description: string;
            defaulValue: number;
            control: {
                type: string;
            };
        };
        maxlength: {
            description: string;
            control: {
                type: string;
            };
        };
    };
};
export default _default;
export declare const DefaultPhone: (args: any) => {
    setup(): () => JSX.Element;
};
export declare const PhoneWithLabel: (props?: any) => JSX.Element;
export declare const PhoneWithDescription: () => JSX.Element;
export declare const PhoneWithSlots: any;
export declare const DisabledPhone: any;
export declare const ReadonlyPhone: any;
export declare const InvalidPhone: any;
export declare const LazyPhone: () => {
    setup(): () => JSX.Element;
};
