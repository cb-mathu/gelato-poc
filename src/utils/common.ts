import { isVNode, Comment } from 'vue';

export { AUTO_COMPLETE_MAPPING } from '../components/GPhone/constants';

export function omit<T extends Record<string, unknown>>(object: T, keysToOmit: string[] = []) {
  let clone = Object.assign({}, object);
  for (let key of keysToOmit) {
    if (key in clone) {
      delete clone[key];
    }
  }
  return clone;
}

export const isEmpty = (data: any): boolean => {
  if (!data) {
    return true;
  }
  if (data.constructor === Object) {
    return Object.keys(data).length === 0;
  }
  if ([Array, String, Number].includes(data.constructor)) {
    if (data.length === 1 && isVNode(data[0])) {
      // Returns true if vnode array contains only comment node;
      return data[0].type === Comment;
    }
    return data.length === 0;
  }
  if ([Set, Map].includes(data.constructor)) {
    return data.size === 0;
  }

  return false;
};

export const isNotEmpty = (data: any): boolean => !isEmpty(data);

export const assert = (condition: boolean, message: string) => {
  if (!condition) {
    throw new Error(`[g-error] ${message}`);
  }
};
