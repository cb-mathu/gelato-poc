// Copy from @vue/runtime-dom/dist/runtime-dom.d.ts
import { DEFAULT_PROPS } from '../utils/props';
import { AllowedComponentProps, Events, VNodeProps, ExtractPropTypes } from 'vue';

type StringKeyOf<T> = Extract<keyof T, string>;

type EventHandlers<E> = {
  [K in StringKeyOf<E>]?: E[K] extends Function ? E[K] : (payload: E[K]) => void;
};

export type DefaultProps = ExtractPropTypes<typeof DEFAULT_PROPS>;

export type VueComponentProps = EventHandlers<Events> & AllowedComponentProps & VNodeProps & DefaultProps;
