import { defineComponent } from 'vue';
import { SELECT_PROPS } from './constants';
import { useFormAria, useFormAriaIds } from '../../utils/accessibility';
import { GInputErrorMessage } from '../GInput';
import { useId, useVModel } from '../../composables';
import { MergedSelectProps } from './types';
import { isNotEmpty } from '../../utils/common';

const GSelect = defineComponent({
  name: 'GSelect',
  props: SELECT_PROPS,

  setup(props, { attrs, slots }) {
    const internalValue = useVModel(props, 'modelValue');
    const { labelId, descriptionId, errorId } = useFormAriaIds(props.id);

    return () => {
      const label = props.label || slots.label?.();
      const description = props.description || slots.default?.();

      const propsWeControl = {
        id: props.id || useId('GSelect'),
      };

      const attributes = { ...attrs, ...props, ...propsWeControl };

      const ariaAttributes = {
        ...useFormAria({
          labelledBy: labelId,
          describedBy: descriptionId,
          invalid: props.invalid,
          errorMessage: errorId,
        }),
      };

      const classes = {
        [`g-input`]: true,
        [`g-input--invalid`]: attributes.invalid,
      };
      return (
        <div class={classes}>
          {isNotEmpty(label) && (
            <label class="g-input__label" id={labelId} for={attributes.id}>
              {label}
            </label>
          )}
          {isNotEmpty(description) && (
            <div class="g-input__desc" id={descriptionId}>
              {description}
            </div>
          )}
          <div class="g-input__group">
            <select {...attributes} {...ariaAttributes} v-model={internalValue.value} class="g-input__element">
              {slots?.options?.()}
            </select>
          </div>
          {props.invalid && <GInputErrorMessage id={errorId} errorMessage={props.errorMessage} />}
        </div>
      );
    };
  },
});

export default GSelect as {
  new (): {
    $props: MergedSelectProps;
  };
};
