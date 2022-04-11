import { defineComponent } from 'vue';
import { useId, useInput, FieldTypes } from '../../composables';
import { QUANTITY_PROPS } from './constants';
import { Input, InputTypes } from '../core/Input';
import { Minus, Plus } from '../icons';
import { QuantityProps, NativeInputProps, MergedQuantityProps } from './types';
import { Clickable } from '../../utils/accessibility';

const GQuantity = defineComponent({
  name: 'GQuantity',
  props: QUANTITY_PROPS,
  emits: ['update:modelValue', 'blur'],

  setup(props: QuantityProps, { attrs }: { attrs: NativeInputProps }) {
    const { internalValue, ...listeners } = useInput({
      props,
    });

    return () => {
      const onIncrement = (step: number) => {
        const _value = parseInt(internalValue.value, 10);
        if (attrs.max !== undefined && _value >= attrs.max) {
          return;
        }
        internalValue.value = _value + step;
      };

      const onDecrement = (step: number) => {
        const _value = parseInt(internalValue.value, 10);
        if ((attrs.min !== undefined && _value <= attrs.min) || _value <= 0) {
          return;
        }
        internalValue.value = _value - step;
      };

      const propsWeControl: any = {
        id: props.id || useId('GQuantity'),
        type: FieldTypes.Number,
        ...listeners,
      };

      const attributes = {
        ...attrs,
        ...props,
        ...propsWeControl,
      };

      const { max = Infinity, min = -Infinity, step = 1 } = attributes;

      const classes = {
        [`g-quantity`]: true,
        [`g-quantity--invalid`]: props.invalid,
        [`g-quantity--readonly`]: props.readonly,
        [`g-quantity--disabled`]: props.disabled,
      };

      const ariaAttributes = {
        ['aria-live']: 'assertive',
        ['aria-label']: 'units',
      };

      const disableControl = (condition: boolean) => {
        const isDisabled = props.readonly || props.disabled;
        return condition || isDisabled;
      };

      const isDecDisabled = disableControl(internalValue.value <= min || internalValue.value - step < min);
      const isIncDisabled = disableControl(internalValue.value >= max || internalValue.value + step > max);

      return (
        <div class={classes}>
          <Clickable
            as="button"
            role="spinbutton"
            disabled={isDecDisabled}
            class="g-quantity__change g-quantity__decrement"
            onClick={() => !isDecDisabled && onDecrement(step)}
          >
            <Minus />
          </Clickable>
          <Input
            {...attributes}
            {...ariaAttributes}
            modelValue={internalValue.value}
            class="g-quantity__element"
            type={InputTypes.Number}
          />
          <Clickable
            as="button"
            role="spinbutton"
            disabled={isIncDisabled}
            class="g-quantity__change g-quantity__increment"
            onClick={() => !isIncDisabled && onIncrement(step)}
          >
            <Plus />
          </Clickable>
        </div>
      );
    };
  },
});

export default GQuantity as {
  new (): {
    $props: MergedQuantityProps;
  };
};
