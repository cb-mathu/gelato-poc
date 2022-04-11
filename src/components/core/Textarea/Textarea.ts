import { defineComponent } from 'vue';
import { useId, useInput, FieldTypes } from '../../../composables';
import { render } from '../../../utils/render';
import { TEXTAREA_NAME, CORE_TEXTAREA_PROPS } from './constants';
import { MergedTextareaProps } from './types';

const Textarea = defineComponent({
  name: TEXTAREA_NAME,
  props: CORE_TEXTAREA_PROPS,
  emits: ['update:modelValue', 'blur'],
  setup(props, { attrs, slots }) {
    let { internalValue, onBlur, onChange, onInput } = useInput({
      type: FieldTypes.Textarea,
      props,
    });

    const styleList = {
      resize: props.noResize ? 'none' : null,
    };

    const propsWeControl: any = {
      id: props.id || useId(TEXTAREA_NAME),
      as: 'textarea',
      onInput,
      onChange,
      onBlur,
    };

    return () => {
      propsWeControl.value = internalValue.value;
      propsWeControl.style = styleList;

      return render({
        props: { ...props, ...propsWeControl },
        attrs,
        slots,
        name: TEXTAREA_NAME,
      });
    };
  },
});

export default Textarea as {
  new (): {
    $props: MergedTextareaProps;
  };
};
