import { VueComponentProps } from '../../types';
import { ButtonHTMLAttributes, ExtractPropTypes } from 'vue';
import { SWITCH_PROPS } from './constants';

export type SwitchProps = ExtractPropTypes<typeof SWITCH_PROPS>;
export type NativeButtonProps = Omit<ButtonHTMLAttributes, keyof SwitchProps>;
export type MergedSwitchProps = Partial<SwitchProps & VueComponentProps & NativeButtonProps>;
