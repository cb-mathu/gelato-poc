import { computed, defineComponent, PropType } from 'vue';
import GEstimate from './GEstimate';
import { NextEstimate, OrderSummaryLabels } from './types';
import { GModal } from '../GModal';

export default defineComponent({
  name: 'GNextCharge',
  props: {
    consent: {
      type: Array,
    },
    nextEstimates: {
      type: Object as PropType<Array<NextEstimate>>,
      required: true,
    },
    onClose: Function as PropType<() => void>,
    labels: {
      type: Object as PropType<OrderSummaryLabels>,
      required: true,
    },
    isOpen: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['back'],
  setup(props) {
    return () => {
      const NextCharge = (_props: { estimate: NextEstimate }) => {
        // TODO: remove hack for type compatibility (PlainProduct -> Product)
        const lineItems = _props.estimate.lineItems.map((lineItem) => {
          return {
            ...lineItem,
            quantity: computed(() => lineItem.quantity!),
            subTotal: computed(() => lineItem.subTotal!),
            tiers: computed(() => lineItem.tiers!),
            unitPrice: computed(() => lineItem.unitPrice!),
          };
        });

        return (
          <div class="g-summary__nextcharge">
            <div class="g-summary__nextcharge-head">{props.labels.next}</div>
            <GEstimate
              products={lineItems}
              tax={_props.estimate.tax}
              subTotal={_props.estimate.subTotal}
              total={_props.estimate.total}
              labels={props.labels}
              isNextCharge={true}
              appliedCoupons={_props.estimate.appliedCoupons}
              nextChargeDate={_props.estimate.formattedDate}
            />
          </div>
        );
      };

      return (
        <GModal isOpen={props.isOpen} onClose={props.onClose} title={props.labels.futureCharges}>
          {{
            content: () => props.nextEstimates.map((nextEstimate) => <NextCharge estimate={nextEstimate} />),
          }}
        </GModal>
      );
    };
  },
});
