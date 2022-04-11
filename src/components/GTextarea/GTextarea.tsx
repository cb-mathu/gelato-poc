import { defineComponent } from 'vue';
import { Textarea } from '../core/Textarea';
import { TEXTAREA_PROPS } from './constants';
import { useFormAria, useFormAriaIds } from '../../utils/accessibility';
import { GInputErrorMessage } from '../GInput';
import { isNotEmpty } from '../../utils/common';

export default defineComponent({
  name: 'GTextarea',
  props: TEXTAREA_PROPS,

  setup(props, { attrs, slots }) {
    const { labelId, descriptionId, errorId } = useFormAriaIds(props.id);

    return () => {
      const attributes = {
        ...attrs,
        ...props,
      };

      const classes = {
        [`g-input`]: true,
        [`g-input--invalid`]: props.invalid,
      };

      const label = props.label || slots.label?.();
      const description = props.description || slots.default?.();

      const ariaAttributes = {
        ...useFormAria({
          labelledBy: labelId,
          describedBy: descriptionId,
          invalid: props.invalid,
          errorMessage: errorId,
        }),
      };

      return (
        <div class={classes}>
          {isNotEmpty(label) && (
            <label id={labelId} for={attributes.id} class="g-input__label">
              {label}
            </label>
          )}
          {isNotEmpty(description) && (
            <div id={descriptionId} class="g-input__desc">
              {description}
            </div>
          )}
          <div class="g-input__group">
            <Textarea {...attributes} {...ariaAttributes} class="g-input__element" />
          </div>
          {props.invalid && props.errorMessage && <GInputErrorMessage id={errorId} errorMessage={props.errorMessage} />}
        </div>
      );
    };
  },
});
