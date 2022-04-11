import { DefaultProps, VueComponentProps } from '../../../types';
import { ExtractPropTypes, TextareaHTMLAttributes } from 'vue';
import { CORE_TEXTAREA_PROPS } from './constants';

export type TextareaProps = ExtractPropTypes<typeof CORE_TEXTAREA_PROPS>;
export type NativeTextareaProps = Omit<TextareaHTMLAttributes, keyof TextareaProps>;
export type MergedTextareaProps = Partial<TextareaProps & VueComponentProps & NativeTextareaProps & DefaultProps>;
