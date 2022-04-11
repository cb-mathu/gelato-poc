import { defineComponent, ref } from 'vue';
import { GRadio } from '../GRadio';
import { PAYMENT_METHODS } from './constants';
import { useDisclosureAria } from '../../utils/accessibility';

export default defineComponent({
  name: 'GPaymentMethods',
  setup() {
    const selectedPm = ref('card');

    return () => {
      return (
        <div class="g-cards-group-vertical g-payment">
          {PAYMENT_METHODS.map(({ value, component: PaymentMethodComponent }) => {
            const ariaAttributes = {
              ...useDisclosureAria({
                expanded: selectedPm.value === value,
                controlId: value,
              }),
            };
            return (
              <div class="g-cards-group-vertical__item" key={value}>
                <div class={`g-card g-card--stroke ${selectedPm.value === value && 'g-card--active'}`}>
                  <GRadio {...ariaAttributes} name="payment_method" value={value} v-model={selectedPm.value} id={value}>
                    <PaymentMethodComponent active={selectedPm.value === value} />
                  </GRadio>
                </div>
              </div>
            );
          })}
        </div>
      );
    };
  },
});
