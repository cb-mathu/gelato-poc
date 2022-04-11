import { VueComponentProps } from '../../types';
import { ExtractPropTypes, SelectHTMLAttributes } from 'vue';
import { SELECT_PROPS } from './constants';

export type SelectProps = ExtractPropTypes<typeof SELECT_PROPS>;
export type NativeSelectProps = Omit<SelectHTMLAttributes, keyof SelectProps>;
export type MergedSelectProps = Partial<SelectProps & VueComponentProps & NativeSelectProps>;
