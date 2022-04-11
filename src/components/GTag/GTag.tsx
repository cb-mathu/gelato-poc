import { defineComponent, SetupContext } from 'vue';
import { TAG_PROPS } from './constants';
import { MergedTagProps, TagProps, TagVariant } from './types';

const GTag = defineComponent({
  name: 'GTag',
  props: TAG_PROPS,

  setup(props: TagProps, { slots }: SetupContext) {
    return () => {
      const classList = {
        [`g-tag`]: true,
        [`g-tag--primary`]: props.variant === TagVariant.Primary,
        [`g-tag--secondary`]: props.variant === TagVariant.Secondary,
        [`g-tag--tertiary`]: props.variant === TagVariant.Tertiary,
        [`g-product-card__type`]: true,
      };

      return (
        <span {...props} class={classList}>
          {slots.default?.()}
        </span>
      );
    };
  },
});

export default GTag as {
  new (): {
    $props: MergedTagProps;
  };
};
