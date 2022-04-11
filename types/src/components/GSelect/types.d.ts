import { VueComponentProps } from '../../types';
import { ExtractPropTypes, SelectHTMLAttributes } from 'vue';
import { SELECT_PROPS } from './constants';
export declare type SelectProps = ExtractPropTypes<typeof SELECT_PROPS>;
export declare type NativeSelectProps = Omit<SelectHTMLAttributes, keyof SelectProps>;
export declare type MergedSelectProps = Partial<SelectProps & VueComponentProps & NativeSelectProps>;
