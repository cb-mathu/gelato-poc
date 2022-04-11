import { VueComponentProps } from '../../types';
import { ExtractPropTypes, InputHTMLAttributes } from 'vue';
import { QUANTITY_PROPS } from './constants';
export declare type QuantityProps = Omit<ExtractPropTypes<typeof QUANTITY_PROPS>, 'errorMessage'>;
export declare type NativeInputProps = Omit<InputHTMLAttributes, keyof QuantityProps>;
export declare type MergedQuantityProps = Partial<QuantityProps & VueComponentProps & NativeInputProps>;
