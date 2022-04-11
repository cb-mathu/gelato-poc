import { DEFAULT_PROPS } from '../utils/props';
import { AllowedComponentProps, Events, VNodeProps, ExtractPropTypes } from 'vue';
declare type StringKeyOf<T> = Extract<keyof T, string>;
declare type EventHandlers<E> = {
    [K in StringKeyOf<E>]?: E[K] extends Function ? E[K] : (payload: E[K]) => void;
};
export declare type DefaultProps = ExtractPropTypes<typeof DEFAULT_PROPS>;
export declare type VueComponentProps = EventHandlers<Events> & AllowedComponentProps & VNodeProps & DefaultProps;
export {};
