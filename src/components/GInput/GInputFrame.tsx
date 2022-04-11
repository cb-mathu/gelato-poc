import { defineComponent } from 'vue';
import { INPUT_PROPS } from './constants';
import { GNotification, NotificationVariant, NotificationSize } from '../GNotification';
import { InputErrorProps } from './types';
import { useFormAria, useFormAriaIds } from '../../utils/accessibility';
import { useId, useInput } from '../../composables';
import { isNotEmpty } from '../../utils/common';

export const GInputFrameErrorMessage = (props: InputErrorProps) => {
  return (
    <div id={props.id}>
      <GNotification size={NotificationSize.Small} variant={NotificationVariant.Alert}>
        <span>{props.errorMessage}</span>
      </GNotification>
    </div>
  );
};

export default defineComponent({
  name: 'GInputFrame',
  props: INPUT_PROPS,
  emits: ['blur'],
  inheritAttrs: false,

  setup(props, { attrs, slots }) {
    const { labelId, descriptionId, errorId } = useFormAriaIds(props.id);

    const { internalValue, ...listeners } = useInput({
      type: props.type,
      props,
    });

    const propsWeControl: any = {
      id: props.id || useId('GInputFrame'),
    };

    return () => {
      const label = props.label || slots.label?.();
      const description = props.description || slots.default?.();
      const attributes = { ...attrs, ...listeners, ...props, ...propsWeControl };
      const classes = {
        [`g-input`]: true,
        [`g-input--invalid`]: props.invalid,
        [`g-input--disabled`]: props.disabled,
      };
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
            {isNotEmpty(slots.prefix?.()) && <span class="g-input__prefix">{slots.prefix?.()}</span>}
            {isNotEmpty(slots.suffix?.()) && <span class="g-input__suffix">{slots.suffix?.()}</span>}
            <div {...attributes} {...ariaAttributes} class="g-input__element" />
          </div>
          {props.invalid && props.errorMessage && <GInputFrameErrorMessage id={errorId} errorMessage={props.errorMessage} />}
        </div>
      );
    };
  },
});
