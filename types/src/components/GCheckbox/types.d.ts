import { InputHTMLAttributes, ExtractPropTypes } from 'vue';
import { VueComponentProps } from '../../types';
import { CHECKBOX_PROPS } from './constants';
declare type Value = boolean | number | string | undefined;
export declare type CheckboxProps = ExtractPropTypes<typeof CHECKBOX_PROPS> & {
    ['true-value']?: Value;
    ['false-value']?: Value;
};
export declare type NativeButtonProps = Omit<InputHTMLAttributes, keyof CheckboxProps>;
export declare type MergedCheckboxProps = Partial<CheckboxProps & VueComponentProps & NativeButtonProps>;
export {};
