import { VueComponentProps } from '../../../types';
import { ExtractPropTypes, InputHTMLAttributes } from 'vue';
import { CORE_INPUT_PROPS } from './constants';

export enum InputTypes {
  Text = 'text',
  Number = 'number',
  Tel = 'tel',
  Date = 'date',
  Email = 'email',
  File = 'file',
  Hidden = 'hidden',
  Time = 'time',
  Password = 'password',
}

export type CoreInputProps = ExtractPropTypes<typeof CORE_INPUT_PROPS>;
export type NativeInputProps = Omit<InputHTMLAttributes, keyof CoreInputProps>;
export type MergedCoreInputProps = Partial<CoreInputProps & VueComponentProps & NativeInputProps>;
