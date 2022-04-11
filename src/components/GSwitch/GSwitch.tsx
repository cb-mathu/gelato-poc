import { defineComponent, ref, watchEffect } from 'vue';
import { SWITCH_PROPS } from './constants';
import { Switch, SwitchGroup, SwitchLabel } from '@headlessui/vue';
import { MergedSwitchProps, SwitchProps } from './types';
import { GInputErrorMessage } from '../GInput';
import { useFormAriaIds } from '../../utils/accessibility';
import { isNotEmpty } from '../../utils/common';

const GSwitch = defineComponent({
  name: 'GSwitch',
  props: SWITCH_PROPS,
  emits: ['update:modelValue'],
  setup(props: SwitchProps, { slots, attrs }) {
    let internalValue = ref(props.modelValue);
    watchEffect(() => {
      internalValue = ref(props.modelValue);
    });
    return () => {
      const label = props.label || slots.label?.();
      const { errorId } = useFormAriaIds(props.id);
      const attributes = {
        ...attrs,
        ...props,
      };

      const classes = {
        'g-switch': true,
        'g-switch--active': internalValue.value,
        'g-switch--disabled': props.disabled,
        'g-switch--invalid': props.invalid,
      };

      return (
        <SwitchGroup as="div">
          <div class={classes}>
            <Switch {...attributes} v-model={internalValue.value} as="button" class="g-switch__element">
              <span class="sr-only">Use setting</span>
              <span aria-hidden="true" class="g-switch__control" />
            </Switch>
            {isNotEmpty(label) && <SwitchLabel class="g-switch__label">{label}</SwitchLabel>}
          </div>
          {props.invalid && <GInputErrorMessage id={errorId} errorMessage={props.errorMessage} />}
        </SwitchGroup>
      );
    };
  },
});

export default GSwitch as {
  new (): {
    $props: MergedSwitchProps;
  };
};
