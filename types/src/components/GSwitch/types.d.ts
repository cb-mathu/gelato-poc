import { VueComponentProps } from '../../types';
import { ButtonHTMLAttributes, ExtractPropTypes } from 'vue';
import { SWITCH_PROPS } from './constants';
export declare type SwitchProps = ExtractPropTypes<typeof SWITCH_PROPS>;
export declare type NativeButtonProps = Omit<ButtonHTMLAttributes, keyof SwitchProps>;
export declare type MergedSwitchProps = Partial<SwitchProps & VueComponentProps & NativeButtonProps>;
