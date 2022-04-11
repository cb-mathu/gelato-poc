import '../assets/reset.scss';
import '../assets/common.scss';
import '../../.storybook/storybook.css';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'StoryLayout',
  setup(props, { slots }) {
    return () => <div>{slots.default?.()}</div>;
  },
});
