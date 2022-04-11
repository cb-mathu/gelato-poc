import GApplepay from './GApplepay';
import GPaypal from './GPaypal';
import GGiropay from './GGiropay';
import { Paypal, Visa, Mastercard, Diners } from '../icons';
import { PaymentUiInfo } from './types';

export const PAYMENT_METHODS = [
  {
    value: 'paypal',
    component: GPaypal,
  },
  {
    value: 'applepay',
    component: GApplepay,
  },
  {
    value: 'giropay',
    component: GGiropay,
  },
];

export const PAYMENT_METHOD_COMPONENTS: Array<PaymentUiInfo> = [
  {
    type: 'paypal',
    component: GPaypal,
    icon: Paypal,
  },
];

export const CARD_BRAND_ICONS = [
  {
    brand: 'visa',
    icon: Visa,
  },
  {
    brand: 'mastercard',
    icon: Mastercard,
  },
  {
    brand: 'diners',
    icon: Diners,
  },
];
