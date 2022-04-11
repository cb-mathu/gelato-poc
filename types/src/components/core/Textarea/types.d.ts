import { DefaultProps, VueComponentProps } from '../../../types';
import { ExtractPropTypes, TextareaHTMLAttributes } from 'vue';
import { CORE_TEXTAREA_PROPS } from './constants';
export declare type TextareaProps = ExtractPropTypes<typeof CORE_TEXTAREA_PROPS>;
export declare type NativeTextareaProps = Omit<TextareaHTMLAttributes, keyof TextareaProps>;
export declare type MergedTextareaProps = Partial<TextareaProps & VueComponentProps & NativeTextareaProps & DefaultProps>;
