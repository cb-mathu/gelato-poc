import { computed, defineComponent, InputHTMLAttributes } from 'vue';
import { useVModel, useId } from '../../composables';
import { RADIO_PROPS } from './constants';
import { GInputErrorMessage } from '../GInput';
import { useControlAria, useFormAria, useFormAriaIds } from '../../utils/accessibility';

export default defineComponent({
  name: 'GRadio',
  props: RADIO_PROPS,
  emits: ['update:modelValue'],

  setup(props, { attrs, slots }) {
    const internalValue = useVModel(props, 'modelValue');
    const { labelId, errorId } = useFormAriaIds(props.id);

    const propsWeControl = {
      id: props.id || useId('GRadio'),
    };

    return () => {
      const attributes = { ...attrs, ...props, ...propsWeControl };
      const checked = computed(() => props.modelValue === props.value).value;

      const ariaAttributes = {
        ...useFormAria({
          labelledBy: labelId,
          invalid: props.invalid,
          errorMessage: errorId,
        }),
        ...useControlAria({
          checked,
        }),
      } as InputHTMLAttributes;

      return (
        <div class="g-radio">
          <div class="g-radio__group">
            <input type="radio" {...attributes} {...ariaAttributes} v-model={internalValue.value} class="g-radio__element" />
          </div>
          <label class="g-radio__label" for={attributes.id} id={labelId}>
            {slots.default?.()}
          </label>
          {props.invalid && props.errorMessage && (
            <GInputErrorMessage class="g-radio__error" id={errorId} errorMessage={props.errorMessage} />
          )}
        </div>
      );
    };
  },
});
