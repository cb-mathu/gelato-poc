declare const _default: {
    title: string;
    component: import("vue").DefineComponent<{
        list: {
            type: BooleanConstructor;
            default: boolean;
        };
        duration: {
            type: NumberConstructor;
            default: number;
        };
    }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
        list: boolean;
        duration: number;
    } & {}>, {
        list: boolean;
        duration: number;
    }>;
};
export default _default;
export declare const Default: () => {
    components: {
        GSwapTransition: import("vue").DefineComponent<{
            list: {
                type: BooleanConstructor;
                default: boolean;
            };
            duration: {
                type: NumberConstructor;
                default: number;
            };
        }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
            list: boolean;
            duration: number;
        } & {}>, {
            list: boolean;
            duration: number;
        }>;
    };
    setup(): () => JSX.Element;
};
