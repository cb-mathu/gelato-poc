import { defineComponent, Transition, TransitionGroup } from 'vue';
import { computedBoxProperties } from '../../../utils/vdom';

export default defineComponent({
  name: 'g-slide-transition',
  props: {
    list: {
      type: Boolean,
      default: false,
    },
    duration: {
      type: Number,
      default: 500,
    },
    delay: {
      type: Number,
      default: 0,
    },
  },

  setup(props, { slots }) {
    const beforeEnter = (el: any) => {
      el.style.opacity = '0';
    };

    const enter = (el: any) => {
      const computedProperties = computedBoxProperties(el);
      el.style.overflow = 'hidden';
      el.style.paddingTop = el.style.paddingBottom = el.style.height = el.style.borderWidth = '0';

      let timing = (props.duration || parseInt(computedProperties['height'])) / 1000;
      el.style.transition = `height ${timing}s, padding-top ${timing}s, padding-bottom ${timing}s, borderWidth ${timing}s, opacity ${timing}s`;

      setTimeout(() => {
        el.style.opacity = '1';
        ['height', 'paddingTop', 'paddingBottom', 'borderWidth'].forEach((prop: any) => {
          el.style[prop] = computedProperties[prop];
        });
      });
    };

    const leave = (el: any) => {
      const computedProperties = computedBoxProperties(el);

      el.style.overflow = 'hidden';
      el.style.height = computedProperties['height'];

      let timing = (props.duration || parseInt(computedProperties['height'])) / 1000;
      el.style.transition = `height ${timing}s, padding-top ${timing}s, padding-bottom ${timing}s, borderWidth ${timing}s, opacity ${timing}s`;
      setTimeout(() => {
        props.list && (el.style.opacity = '0');
        el.style.paddingTop = el.style.paddingBottom = '0';
        el.style.height = '1px';
      });
    };

    const reset = (el: any) => {
      el.style.overflow = '';
      el.style.opacity = '';
      el.style.transition = '';
      el.style.paddingTop = '';
      el.style.paddingBottom = '';
      el.style.borderWidth = '';
      el.style.transition = '';
      el.style.overflow = '';
      el.style.height = '';
    };

    return () =>
      props.list ? (
        <TransitionGroup onBeforeEnter={beforeEnter} onEnter={enter} onLeave={leave} onAfterEnter={reset} onAfterLeave={reset}>
          {slots.default?.()}
        </TransitionGroup>
      ) : (
        <Transition mode="out-in" onBeforeEnter={beforeEnter} onEnter={enter} onLeave={leave} onAfterEnter={reset} onAfterLeave={reset}>
          {slots.default?.()}
        </Transition>
      );
  },
});
