import { defineComponent, watchEffect } from 'vue';
import { INPUT_NAME, CORE_INPUT_PROPS } from './constants';
import { useId, useInput } from '../../../composables';
import { MergedCoreInputProps } from './types';

const Input = defineComponent({
  name: INPUT_NAME,
  props: CORE_INPUT_PROPS,
  emits: ['update:modelValue', 'blur'],

  setup(props, { attrs }) {
    const { internalValue, ...listeners } = useInput({ type: props.type, props });

    return () => {
      const propsWeControl: any = {
        id: props.id || useId(INPUT_NAME),
      };
      const attributes = { ...attrs, ...listeners, ...props, ...propsWeControl };
      return <input {...attributes} value={internalValue.value} />;
    };
  },
});

export default Input as {
  new (): {
    $props: MergedCoreInputProps;
  };
};
