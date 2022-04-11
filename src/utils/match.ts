import { assert } from './common';

export default function <TValue extends string | number = string, TReturnValue = unknown | undefined>(
  value: TValue,
  lookup: Record<TValue, TReturnValue | ((...args: any[]) => TReturnValue)>,
  ...args: any[]
): TReturnValue {
  const handlers = Object.keys(lookup).reduce((acc, a) => (acc += `${a},`), '');
  const returnValue = lookup[value];

  assert(returnValue !== undefined, `Tried to handle "${value}" but there is no handler defined. Only defined handlers are: ${handlers}`);

  return typeof returnValue === 'function' ? returnValue(...args) : returnValue;
}
