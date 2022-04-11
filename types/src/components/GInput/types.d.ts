import { ExtractPropTypes, HTMLAttributes } from 'vue';
import { MergedCoreInputProps, InputTypes } from '../core/Input/types';
import { INPUT_PROPS } from './constants';
export { InputTypes };
export declare type InputProps = ExtractPropTypes<typeof INPUT_PROPS>;
export declare type InputErrorProps = ExtractPropTypes<Pick<InputProps, 'errorMessage' | 'id'>> & HTMLAttributes;
export declare type MergedInputProps = Partial<MergedCoreInputProps & InputProps>;
