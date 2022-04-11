import { PAYMENT_METHOD_COMPONENTS, CARD_BRAND_ICONS } from './constants';
import { PaymentUiInfo } from './types';

export function getPaymentUi(payment: any): PaymentUiInfo {
  return PAYMENT_METHOD_COMPONENTS.find((item) => item.type == payment.type) || PAYMENT_METHOD_COMPONENTS[0];
}

export function getCardBrandIcon(brand: string) {
  return CARD_BRAND_ICONS.find((item) => item.brand == brand) || CARD_BRAND_ICONS[0];
}
