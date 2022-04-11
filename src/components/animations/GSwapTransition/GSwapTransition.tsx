import { defineComponent, Transition, TransitionGroup } from 'vue';
import { computedBoxProperties } from '../../../utils/vdom';

export default defineComponent({
  name: 'g-swap-transition',
  props: {
    list: {
      type: Boolean,
      default: false,
    },
    duration: {
      type: Number,
      default: 500,
    },
  },

  setup(props, { slots }) {
    const enter = (el: any) => {
      if (!el.parentElement) {
        return;
      }
      const elementHeight = el.clientHeight;
      el.parentElement.style['opacity'] = '0';
      el.parentElement.style['height'] = el.clientHeight || '1px';
      el.parentElement.style['overflow'] = 'hidden';
      el.parentElement!.style['transition'] = '';
      setTimeout(() => {
        const durationTemp = elementHeight / 1000;
        const duration = props.duration / 1000 || (durationTemp < 0.5 ? 0.5 : durationTemp);
        el.parentElement.style['transition'] = `all ${duration}s ease`;
        el.parentElement.style['height'] = elementHeight + 'px';
        el.parentElement.style['opacity'] = '1';
        reset(el, duration);
      });
    };

    const leave = (el: any) => {
      const computedProperties = computedBoxProperties(el);

      el.parentElement.style.overflow = 'hidden';
      el.parentElement.style.height = computedProperties['height'];

      let timing = (props.duration || parseInt(computedProperties['height'])) / 1000;
      timing = timing >= 0.5 ? timing : 0.5;
      el.parentElement.style.transition = `height ${timing}s, padding-top ${timing}s, padding-bottom ${timing}s, borderWidth ${timing}s, opacity ${timing}s`;
      setTimeout(() => {
        props.list && (el.style.opacity = '0');
        reset(el, timing);
      });
    };

    const reset = (el: any, timing: number) => {
      const parentElement = el.parentElement;
      if (parentElement) {
        setTimeout(() => {
          parentElement.style['opacity'] = '';
          parentElement.style['transition'] = '';
          parentElement.style['height'] = '';
          parentElement.style['overflow'] = '';
        }, timing * 1000);
      }
    };

    return () =>
      props.list ? (
        <TransitionGroup onEnter={enter} onLeave={leave}>
          {slots.default?.()}
        </TransitionGroup>
      ) : (
        <Transition mode="out-in" onEnter={enter} onLeave={leave}>
          {slots.default?.()}
        </Transition>
      );
  },
});
