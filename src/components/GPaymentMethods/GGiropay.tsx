import { defineComponent } from 'vue';
import { Giropay } from '../icons';

export default defineComponent({
  name: 'GGiropay',
  props: { active: Boolean },
  setup(props) {
    return () => (
      <div class="g-payment__wrap">
        <div class="g-payment__main">
          <div class="g-payment__logo">
            <Giropay />
          </div>
        </div>
        {props.active && (
          <div class="g-payment__hint-text">
            <ol>
              <li>You will be directed to the bank page to authenticate the payment via giropay.</li>
              <li>Your recurring payments will be made via SEPA Direct Debit</li>
            </ol>
          </div>
        )}
      </div>
    );
  },
});
