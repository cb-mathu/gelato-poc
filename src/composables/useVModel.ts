// Used to get the value and emit the value on set
import { computed, getCurrentInstance, WritableComputedRef } from 'vue';

export function useVModel(props: Record<string, unknown>, propName: string, lazy?: boolean): WritableComputedRef<any> {
  const vm = getCurrentInstance();

  return computed({
    get() {
      return props[propName];
    },
    set(value) {
      if (props[propName] === value) {
        return;
      }
      vm?.emit(`update:${propName}`, value);
    },
  });
}
