import { VueComponentProps } from '../../types';
import { HTMLAttributes, ExtractPropTypes } from 'vue';
import { TAG_PROPS } from './constants';

export enum TagVariant {
  Primary = 'primary',
  Secondary = 'secondary',
  Tertiary = 'tertiary',
}

export type TagProps = ExtractPropTypes<typeof TAG_PROPS>;
export type NativeSpanProps = Omit<HTMLAttributes, keyof TagProps>;
export type MergedTagProps = Partial<TagProps & VueComponentProps & NativeSpanProps>;
