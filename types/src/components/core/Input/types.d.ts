import { VueComponentProps } from '../../../types';
import { ExtractPropTypes, InputHTMLAttributes } from 'vue';
import { CORE_INPUT_PROPS } from './constants';
export declare enum InputTypes {
    Text = "text",
    Number = "number",
    Tel = "tel",
    Date = "date",
    Email = "email",
    File = "file",
    Hidden = "hidden",
    Time = "time",
    Password = "password"
}
export declare type CoreInputProps = ExtractPropTypes<typeof CORE_INPUT_PROPS>;
export declare type NativeInputProps = Omit<InputHTMLAttributes, keyof CoreInputProps>;
export declare type MergedCoreInputProps = Partial<CoreInputProps & VueComponentProps & NativeInputProps>;
