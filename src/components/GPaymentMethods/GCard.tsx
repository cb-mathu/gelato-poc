import { defineComponent } from 'vue';
import { Visa, Mastercard, Diners } from '../icons';

export default defineComponent({
  name: 'GCard',
  props: {
    active: {
      type: Boolean,
      required: true,
    },
    payment: {
      type: Object,
      required: true,
    },
  },
  setup(props, { slots }) {
    if (props.payment?.object == 'payment_source') {
      const brand = props.payment?.card.brand;
      const last4 = props.payment?.card.last4;
      return () => (
        <div class="g-payment__wrap">
          <div class="g-payment__main">
            <div class="g-payment__logo g-payment__logo--card">
              {brand == 'visa' && <Visa />}
              {brand == 'mastercard' && <Mastercard />}
              {brand == 'diners' && <Diners />}
            </div>
            <div class="g-payment__info">ending {last4}</div>
          </div>
        </div>
      );
    }

    return () => (
      <div class="g-payment__wrap">
        <div class="g-payment__main">
          <div class="g-payment-card">
            <h4>
              <div>Card</div>
              <div class="g-payment-card__list">
                <Visa />
                <Mastercard />
                <Diners />
              </div>
            </h4>
          </div>
        </div>
        {props.active && (
          <div class="g-payment__form">
            {slots.default?.()}
            {/* <p>
              I authorize [name] to save this payment method and automatically charge this payment method whenever a subscription is
              associated with it.
            </p> */}
          </div>
        )}
      </div>
    );
  },
});
