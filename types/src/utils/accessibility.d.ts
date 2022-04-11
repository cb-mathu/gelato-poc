import { AnchorHTMLAttributes, ButtonHTMLAttributes, HTMLAttributes, Component, ComputedOptions, MethodOptions } from 'vue';
export interface FormAria {
    ['aria-labelledby']?: string;
    ['aria-describedBy']?: string;
    ['aria-invalid']?: boolean;
    ['aria-errormessage']?: string;
}
interface ControlAria {
    ['aria-checked']?: boolean | 'mixed';
}
interface DisclosureAria {
    ['aria-expanded']?: boolean;
    ['aria-controls']?: string;
}
export declare const useFormAriaIds: (id?: string | undefined) => {
    labelId: string;
    descriptionId: string;
    errorId: string;
};
export declare const useFormAria: ({ labelledBy, describedBy, invalid, errorMessage, }: {
    labelledBy?: string | undefined;
    describedBy?: string | undefined;
    invalid?: boolean | undefined;
    errorMessage?: string | undefined;
}) => FormAria;
export declare const useControlAria: ({ checked, indeterminate }: {
    checked: boolean;
    indeterminate?: boolean | undefined;
}) => ControlAria;
export declare const useDisclosureAria: ({ expanded, controlId }: {
    expanded?: boolean | undefined;
    controlId?: string | undefined;
}) => DisclosureAria;
export declare const Tabbable: (props: any, { slots }: {
    slots: any;
}) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>;
declare type ClickableProps = HTMLAttributes & ButtonHTMLAttributes & AnchorHTMLAttributes & {
    as?: string | Component<any, any, any, ComputedOptions, MethodOptions>;
};
export declare const Clickable: (props: ClickableProps, { slots }: {
    slots: any;
}) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>;
export {};
