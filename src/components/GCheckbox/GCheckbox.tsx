import { defineComponent, computed, ref, Ref, InputHTMLAttributes, watchEffect } from 'vue';
import { CHECKBOX_PROPS } from './constants';
import { useId, useVModel } from '../../composables';
import { MergedCheckboxProps } from './types';
import { useControlAria, useFormAria, useFormAriaIds } from '../../utils/accessibility';
import { GInputErrorMessage } from '../GInput';
import { isNotEmpty } from '../../utils/common';

const GCheckbox = defineComponent({
  name: 'GCheckbox',
  props: CHECKBOX_PROPS,

  setup(props, { slots, attrs }) {
    const checkbox: Ref<HTMLInputElement | null> = ref(null);
    const internalValue = useVModel(props, 'modelValue');
    const { labelId, errorId } = useFormAriaIds(props.id);

    return () => {
      const checked = computed(() => {
        if (props.modelValue instanceof Array) {
          return props.modelValue.includes(props.value);
        }
        return props.modelValue === props.trueValue;
      }).value;

      const indeterminate = computed(() => checkbox.value?.indeterminate).value;
      const label = props.label || slots.label?.();
      const propsWeControl = {
        id: props.id || useId('element'),
        ['true-value']: props.trueValue,
        ['false-value']: props.falseValue,
      };
      const attributes = { ...attrs, ...props, ...propsWeControl };
      const ariaAttributes = {
        ...useFormAria({
          labelledBy: labelId,
          invalid: props.invalid,
          errorMessage: errorId,
        }),
        ...useControlAria({
          checked,
          indeterminate,
        }),
      } as InputHTMLAttributes;
      const classes = {
        'g-checkbox': true,
        'g-checkbox--invalid': props.invalid,
        'g-checkbox--disabled': props.disabled,
        [`group-${props.id}`]: props.id,
      };

      return (
        <div class={classes}>
          <input
            ref={checkbox}
            checked={checked}
            type="checkbox"
            {...attributes}
            {...ariaAttributes}
            v-model={internalValue.value}
            class={`g-checkbox__element checkbox_${attributes.id}`}
          />
          {isNotEmpty(checkbox) && (
            <label class={`g-checkbox__label label_${attributes.id}`} for={attributes.id} id={labelId}>
              {label}
            </label>
          )}

          {props.invalid && props.errorMessage && (
            <GInputErrorMessage id={errorId} class="g-checkbox__error" errorMessage={props.errorMessage} />
          )}
        </div>
      );
    };
  },
});

export default GCheckbox as {
  new (): {
    $props: MergedCheckboxProps;
  };
};
