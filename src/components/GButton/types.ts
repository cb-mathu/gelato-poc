import { VueComponentProps } from '../../types';
import { ButtonHTMLAttributes, ExtractPropTypes, VNodeProps } from 'vue';
import { BUTTON_PROPS } from './constants';

export type ButtonType = ButtonHTMLAttributes['type'];

export enum ButtonVariant {
  Primary = 'primary',
  Outlined = 'outlined',
  Link = 'link',
}

export type ButtonProps = ExtractPropTypes<typeof BUTTON_PROPS>;
export type NativeButtonProps = Omit<ButtonHTMLAttributes, keyof ButtonProps>;
export type MergedButtonProps = Partial<ButtonProps & VueComponentProps & NativeButtonProps>;
