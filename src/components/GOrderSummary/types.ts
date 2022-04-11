import { PlainProduct } from '../GProductCard';

export interface GOrderSummaryState {
  orderSummary: OrderSummaryAccordionState;
  coupon?: CouponState;
  nextCharge?: NextChargeState;
  showBackButton?: boolean;
  showConsent?: boolean;
  submitButtonEnabled?: boolean; // true - enabled / false - disabled
  submitLoadingState?: boolean;
  agreementConsent?: boolean;
}

export enum OrderSummaryAccordionState {
  Collapsed = 'Collapsed',
  Expanded = 'Expanded',
}

export enum PriceType {
  TAX_INCLUSIVE = 'TAX_INCLUSIVE',
  TAX_EXCLUSIVE = 'TAX_EXCLUSIVE',
}

export interface TaxProp {
  priceType: PriceType;
  lineItems: TaxLineItem[];
}

export interface TaxLineItem {
  name: string;
  priceType: PriceType;
  amount: string;
}

export interface PriceLabels {
  total: string;
  subTotal: string;
}

export interface OrderSummaryLabels extends PriceLabels, EstimateLabels, NextChargeLabels {
  title: string;
  trialNote?: string;
  backButton: string;
  submitButton: string;
  backToOrderSummary: string;
  futureCharges: string;
  redirect3dVerify?: string;
  next: string;
  consentError?: string;
}
export interface NextEstimateLabels {
  nextEstimate: string;
}

export interface NextChargeLabels extends PriceLabels {
  backToOrderSummary: string;
}

export interface NextEstimate {
  timestamp: number;
  formattedDate?: string;
  lineItems: Array<PlainProduct>;
  subTotal: string;
  tax?: TaxProp;
  total: string;
  labels: NextEstimateLabels;
  appliedCoupons: AppliedCoupon[];
}

export interface OrderSummaryActions extends EstimateActions {
  onBack: () => void;
  onEditOrder: () => void;
  onSubmit: () => void;
  onAgreementChange: (args: any) => void;
  onConsentChange: (args: any) => void;
}

export interface ConsentField {
  id?: string;
  description?: string;
  value?: boolean;
  required?: boolean;
}

export interface AgreementField {
  id?: string;
  urlFields?: Array<URLField>;
  description?: string;
  checkboxRequired?: boolean;
  value?: boolean;
}
export interface URLField {
  placeholderKey: string;
  placeholderValue: string;
  url: string;
}

export interface EstimateLabels extends CouponLabels {
  total: string;
  subTotal: string;
  inclusiveTax: string;
}

export interface EstimateActions extends CouponActions {}

export interface CouponActions {
  onApplyCoupon?: (couponCode: string) => void;
  onRemoveCoupon?: (couponCode: string) => void;
  onUpdateCouponComponent?: (componentState: CouponComponentState) => void;
  onCouponChange?: () => void;
}

export interface CouponLabels {
  applyCoupon: string;
  applyButton: string;
  applyCouponInputPlaceholder: string;
  removeCoupon: string;
}

export enum DiscountType {
  Coupon = 'coupon',
  Discount = 'discount',
}

export interface AppliedCoupon {
  type: DiscountType;
  code: string;
  description?: string;
  amount?: string;
  removable?: boolean;
}

export enum CouponComponentState {
  Collapsed = 'Collapsed',
  Expanded = 'Expanded',
  Disabled = 'Disabled',
}

export interface CouponState {
  componentState: CouponComponentState;
  loading?: boolean;
  error?: {
    message?: string;
  };
}

export enum NextChargeState {
  Show = 'Show',
  Hide = 'Hide',
}
