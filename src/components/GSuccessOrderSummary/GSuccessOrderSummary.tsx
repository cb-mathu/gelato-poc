import { defineComponent, PropType, computed } from 'vue';
import { GAddressDisplay } from '../GAddress';
import { Address } from '../GAddress';
import { Visa } from '../icons';
import { getItemTypeLabel, GProductCard } from '../GProductCard';
import {
  ItemType,
  Product,
  ProductCardAction,
  ProductCardActionEvent,
  ProductCardActionType,
  ProductCardLabels,
  ProductCardState,
} from '../GProductCard/types';

export default defineComponent({
  name: 'GSuccessOrderSummary',
  props: {
    address: {
      type: Object as PropType<Address>,
      required: true,
    },
  },
  emits: [],
  setup(props, { slots, attrs, emit }) {
    const actionHandler = (event: ProductCardActionEvent) => {
      alert(`${event.action} on ${event.id}`);
    };

    const sampleProduct: Product = {
      id: 'cbdemo_scale',
      name: 'Scale',
      description: 'This is enterprise level plan comes with a 14-day trial period and has a setup cost.',
      quantity: computed(() => 1),
      subTotal: computed(() => '$10.00'),
      unitPrice: computed(() => '$5.00'),
      type: ItemType.Plan,
      labels: {
        units: 'units',
        itemType: getItemTypeLabel(ItemType.Plan),
      },
    };

    const productRemoveAction: ProductCardAction = {
      name: ProductCardActionType.Remove,
      className: 'remove-btn',
      displayText: 'Remove',
      element: 'a',
    };

    const productCardLabels: ProductCardLabels = {
      quantity: 'units',
      seeDetails: 'See details',
      hideDetails: 'Hide details',
    };

    //TODO: this can be reused as Util @dinesh.
    const Card = () => (
      <div class="g-payment-method">
        <Visa width={30} />
        <span class="g-payment-method__info">Last 4 digits: 4234 (exp. 04/2024)</span>
      </div>
    );

    return () => (
      <div class="g-grid g-gap-8">
        <div class="g-success g-card g-card--gray g-gap-4 g-grid">
          <div class="g-card__content g-success__payment">
            <h4 class="">$0.00</h4>
            <Card />
          </div>
          <hr class="g-success__divider" />
          <div class="g-success__address">
            <div class="g-success__address-head">Shipping address</div>
            <GAddressDisplay address={props.address} />
          </div>
        </div>
        <GProductCard onAction={actionHandler} product={sampleProduct} actions={[productRemoveAction]} labels={productCardLabels} />
        <GProductCard onAction={actionHandler} product={sampleProduct} actions={[productRemoveAction]} labels={productCardLabels} />
      </div>
    );
  },
});
