import { VueComponentProps } from '../../types';
import { ButtonHTMLAttributes, ExtractPropTypes } from 'vue';
import { BUTTON_PROPS } from './constants';
export declare type ButtonType = ButtonHTMLAttributes['type'];
export declare enum ButtonVariant {
    Primary = "primary",
    Outlined = "outlined",
    Link = "link"
}
export declare type ButtonProps = ExtractPropTypes<typeof BUTTON_PROPS>;
export declare type NativeButtonProps = Omit<ButtonHTMLAttributes, keyof ButtonProps>;
export declare type MergedButtonProps = Partial<ButtonProps & VueComponentProps & NativeButtonProps>;
