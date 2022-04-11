import { ExtractPropTypes, HTMLAttributes } from 'vue';
import { MergedCoreInputProps, InputTypes } from '../core/Input/types';
import { INPUT_PROPS } from './constants';

export { InputTypes };

export type InputProps = ExtractPropTypes<typeof INPUT_PROPS>;
export type InputErrorProps = ExtractPropTypes<Pick<InputProps, 'errorMessage' | 'id'>> & HTMLAttributes;
export type MergedInputProps = Partial<MergedCoreInputProps & InputProps>;
