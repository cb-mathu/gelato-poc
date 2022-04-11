import { ExtractPropTypes } from 'vue';
import { VueComponentProps } from '../../types';
import { RADIO_PROPS } from './constants';

export type RadioProps = ExtractPropTypes<typeof RADIO_PROPS>;

export type MergedRadioProps = Partial<RadioProps & VueComponentProps>;
