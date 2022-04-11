import { defineComponent } from 'vue';
import { Applepay } from '../icons';
import { Clickable } from '../../utils/accessibility';

export default defineComponent({
  name: 'GApplepay',
  components: {
    Applepay,
  },
  props: { active: Boolean },
  setup(props) {
    return () => (
      <div class="g-payment__wrap">
        <div class="g-payment__main">
          <div class="g-payment__logo">
            <Applepay />
          </div>
          <div class="g-payment__info">john@chargebee.com</div>
        </div>
        <div class="g-payment__action">
          <Clickable as="a">Edit</Clickable>
        </div>
        {props.active && <div class="g-payment__form">Applepay</div>}
      </div>
    );
  },
});
