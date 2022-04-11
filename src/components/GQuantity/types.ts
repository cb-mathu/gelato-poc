import { VueComponentProps } from '../../types';
import { ExtractPropTypes, InputHTMLAttributes } from 'vue';
import { QUANTITY_PROPS } from './constants';

export type QuantityProps = Omit<ExtractPropTypes<typeof QUANTITY_PROPS>, 'errorMessage'>;
export type NativeInputProps = Omit<InputHTMLAttributes, keyof QuantityProps>;
export type MergedQuantityProps = Partial<QuantityProps & VueComponentProps & NativeInputProps>;
