import { InputHTMLAttributes, ExtractPropTypes } from 'vue';
import { VueComponentProps } from '../../types';
import { CHECKBOX_PROPS } from './constants';

type Value = boolean | number | string | undefined;

export type CheckboxProps = ExtractPropTypes<typeof CHECKBOX_PROPS> & {
  ['true-value']?: Value;
  ['false-value']?: Value;
};
export type NativeButtonProps = Omit<InputHTMLAttributes, keyof CheckboxProps>;
export type MergedCheckboxProps = Partial<CheckboxProps & VueComponentProps & NativeButtonProps>;
