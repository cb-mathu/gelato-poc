import { VueComponentProps } from '../../types';
import { HTMLAttributes, ExtractPropTypes } from 'vue';
import { TAG_PROPS } from './constants';
export declare enum TagVariant {
    Primary = "primary",
    Secondary = "secondary",
    Tertiary = "tertiary"
}
export declare type TagProps = ExtractPropTypes<typeof TAG_PROPS>;
export declare type NativeSpanProps = Omit<HTMLAttributes, keyof TagProps>;
export declare type MergedTagProps = Partial<TagProps & VueComponentProps & NativeSpanProps>;
