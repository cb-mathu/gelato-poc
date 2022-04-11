import { ExtractPropTypes } from 'vue';
import { VueComponentProps } from '../../types';
import { RADIO_PROPS } from './constants';
export declare type RadioProps = ExtractPropTypes<typeof RADIO_PROPS>;
export declare type MergedRadioProps = Partial<RadioProps & VueComponentProps>;
