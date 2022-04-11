import { defineComponent } from 'vue';
import { Paypal } from '../icons';

export default defineComponent({
  name: 'GPaypal',
  props: { active: Boolean },
  setup(props) {
    return () => (
      <div class="g-payment__wrap">
        <div class="g-payment__main">
          <div class="g-payment__logo">
            <Paypal />
          </div>
          <div class="g-payment__info">xxxx-4234 (04/2024)</div>
        </div>
        <div class="g-payment__action">
          <a>Edit</a>
        </div>
        {props.active && <div class="g-payment__form">Paypal</div>}
      </div>
    );
  },
});
