import { defineComponent, PropType } from 'vue';
import { Card, CheckoutSummaryActions, CheckoutSummaryLabels, Money } from './types';
import { GAddressDisplay, ShippingAddress } from '../GAddress';
import { Product } from '../GProductCard';

export default defineComponent({
  name: 'GCheckoutSummary',
  props: {
    amountPaid: {
      type: Object as PropType<Money>,
      required: false,
    },
    card: {
      type: Object as PropType<Card>,
      required: false,
    },
    shippingAddress: {
      type: Object as PropType<ShippingAddress>,
      required: false,
    },
    labels: {
      type: Object as PropType<CheckoutSummaryLabels>,
      required: true,
    },
    actions: {
      type: Object as PropType<CheckoutSummaryActions>,
    },
    loader: {
      type: Boolean,
    },
  },
  setup(props) {
    const classList = { 'g-card g-summary': true };
    return () => (
      <div class="g-success g-grid g-grid-cols-12">
        <div class="g-col-span-2" />
        {(props.amountPaid || props.shippingAddress) && (
          <>
            <div class="g-card__content g-col-span-8 g-card g-card--gray g-gap-4 g-grid">
              {props.amountPaid?.display_text && <h4 class="g-success__payment g-success__price">{props.amountPaid.display_text}</h4>}
              {props.amountPaid?.display_text && props.shippingAddress && (
                <>
                  <hr class="g-success__divider" />
                </>
              )}
              {props.shippingAddress && (
                <div>
                  <div class="g-success__address g-success__addressHeader">
                    <div class="g-success__address-head">{props.labels.shippingAddr}</div>
                    <GAddressDisplay showEdit={false} address={props.shippingAddress} />
                  </div>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    );
  },
});
