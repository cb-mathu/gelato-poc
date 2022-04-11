import { ModalProps } from './types';
declare const _default: {
    title: string;
    component: new () => {
        $props: ModalProps;
    };
};
export default _default;
export declare const Story: any;
export declare const DefaultModal: (props?: ModalProps | undefined) => JSX.Element;
export declare const ModalWithDescription: () => JSX.Element;
export declare const ModalWithContent: () => JSX.Element;
export declare const ModalWithFooter: () => JSX.Element;
