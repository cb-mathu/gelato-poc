import { assert } from './common';

export function isValidElement(input: any): boolean {
  // valid elements => 'div' / 'span' / Custom Components / Transitions
  // invalid => no children / comment / strings
  return ['string', 'object', 'function'].includes(input?.type);
}

export function resolvePropValue<TProperty, Tvalue>(property: TProperty, value: Tvalue) {
  if (property === undefined) return undefined;
  if (typeof property === 'function') return property(value);
  return property;
}

// Ref: https://www.w3.org/TR/uievents-key/#named-key-attribute-values
export enum Keys {
  Space = ' ',
  Enter = 'Enter',
  Escape = 'Escape',
  Backspace = 'Backspace',

  ArrowLeft = 'ArrowLeft',
  ArrowUp = 'ArrowUp',
  ArrowRight = 'ArrowRight',
  ArrowDown = 'ArrowDown',

  Home = 'Home',
  End = 'End',

  PageUp = 'PageUp',
  PageDown = 'PageDown',

  Tab = 'Tab',
}

export const computedBoxProperties = (
  el: Element,
): {
  [k: string]: string;
  width: string;
  height: string;
  paddingTop: string;
  paddingRight: string;
  paddingBottom: string;
  paddingLeft: string;
  borderWidth: string;
} => {
  if (!el) assert(!el, 'Element is required');
  const { width, height, paddingTop, paddingRight, paddingBottom, paddingLeft, borderWidth } = window.getComputedStyle(el, null);
  return {
    width,
    height,
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
    borderWidth,
  };
};
