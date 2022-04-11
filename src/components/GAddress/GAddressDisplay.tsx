import { defineComponent } from 'vue';
import { ADDRESS_PROPS } from './constants';
import { Address, Country, MergedAddressProp, State } from './types';
import { getCustomerName, removeLastComma } from './utils';
import { Clickable } from '../../utils/accessibility';
import { isEmpty } from '../../utils/common';

const GAddressDisplay = defineComponent({
  name: 'g-address-display',
  props: ADDRESS_PROPS,
  emits: ['edit'],
  setup(props, { emit }) {
    return () => {
      const address = props.address as Address;
      const getAddressLine = (...fields: string[]) => {
        const fieldValues = fields.map((field: string, index: number) => {
          let addressField: string = props.address?.[field];
          if (!(typeof props.address?.[field] === 'string')) {
            switch (field) {
              case 'country':
                addressField = (props.address?.[field] as Country)?.country_name;
                break;
              case 'state':
                addressField = (props.address?.[field] as State)?.state_name;
                break;
            }
          }
          return removeLastComma(addressField);
        });
        return fieldValues.map((fieldValue: string | undefined, index: number) => {
          return fieldValue && <span class={`g-address_${fields[index]} g-address__value`}>{`${fieldValue}`}</span>;
        });
      };
      return (
        <div class="g-address">
          <div class="g-address__title">
            <h3>{getCustomerName(address)}</h3>
            {props.showEdit && (
              <Clickable as="a" onClick={() => emit('edit')}>
                Edit
              </Clickable>
            )}
          </div>
          <h6 class="g-address__caption">{address.company}</h6>
          <p class="g-address__content">
            <p>{getAddressLine('line1', 'line2', 'line3')}</p>

            <p>{getAddressLine('city', 'zip')}</p>

            <p>{getAddressLine('state', 'country')}</p>
          </p>
        </div>
      );
    };
  },
});

export default GAddressDisplay as {
  new (): {
    $props: MergedAddressProp;
  };
};
