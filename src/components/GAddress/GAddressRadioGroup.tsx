import { computed, defineComponent, PropType, ref } from 'vue';
import GAddressDisplay from './GAddressDisplay';
import { GRadio } from '../GRadio';
import { Address } from './types';

export default defineComponent({
  name: 'g-address-radio-group',
  props: {
    addresses: {
      type: Array as PropType<Address[]>,
      required: true,
    },
    onEdit: {
      type: Function as PropType<({ address, idx }: { address: Address; idx: number }) => void>,
      required: false,
    },
  },
  emits: ['edit'],
  setup(props, { attrs, emit }) {
    const { addresses } = props;
    const selectedAddressIdx = ref(0); // TEMP: if we have ID please replace index with ID

    const selectedAddress = computed(() => addresses[selectedAddressIdx.value]);

    return () => (
      <div class="g-card g-card--stroke g-cards-group-vertical">
        {addresses.map((address, idx) => {
          return (
            <div class="g-cards-group-vertical__item">
              <div class={`g-card g-card--stroke ${selectedAddressIdx.value === idx && 'g-card--active'}`}>
                <GRadio name="payment_method" value={idx} v-model={selectedAddressIdx.value}>
                  <GAddressDisplay
                    class="g-address-group__wrap"
                    {...attrs}
                    address={address}
                    onEdit={() => emit('edit', { address, idx })}
                  />
                </GRadio>
              </div>
            </div>
          );
        })}
      </div>
    );
  },
});
