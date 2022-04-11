// Used for toggling the states
import { isRef, Ref, ref } from 'vue';

export function useToggle(value: Ref<boolean>): (value?: boolean) => boolean;
export function useToggle(initialValue?: boolean): [Ref<boolean>, (value?: boolean) => boolean];

export function useToggle(initialValue: boolean | Ref<boolean> = false) {
  if (isRef(initialValue)) {
    return (value?: boolean) => {
      initialValue.value = typeof value === 'boolean' ? value : !initialValue.value;
    };
  }
  const boolean = ref(initialValue);
  const toggle = (value?: boolean) => {
    boolean.value = typeof value === 'boolean' ? value : !boolean.value;
  };

  return [boolean, toggle] as const;
}
