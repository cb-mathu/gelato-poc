import { defineComponent, SetupContext } from 'vue';
import { BUTTON_PROPS } from './constants';
import { ButtonVariant, MergedButtonProps, ButtonProps } from './types';
import { Spinner } from '../icons';

const GButton = defineComponent({
  name: 'GButton',
  props: BUTTON_PROPS,

  setup(props: ButtonProps, { slots, attrs }: SetupContext) {
    return () => {
      const classList = {
        [`g-button`]: true,
        [`g-button--primary`]: props.variant === ButtonVariant.Primary,
        [`g-button--link`]: props.variant === ButtonVariant.Link,
        [`g-button--fluid`]: props.fluid,
        [`g-button--loading`]: props.loading,
      };

      const attributes = {
        ...attrs,
        ...props,
      };

      return (
        <button {...attributes} class={classList}>
          {attributes.loading && <Spinner class="g-button__spinner" id={props?.loaderId} fill={props?.fill} />}
          <span class="g-button__label">{slots.default?.()}</span>
        </button>
      );
    };
  },
});

export default GButton as {
  new (): {
    $props: MergedButtonProps;
  };
};
