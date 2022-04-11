export interface CheckoutSummaryLabels {
    thankYou: string;
    yourOrder: string;
    shippingAddr: string;
}
export interface Money {
    currency_code: string;
    display_text: string;
    value: number;
}
export interface Customer {
    first_name: string;
    last_name: string;
    has_consent: Boolean;
}
export interface Invoice {
    amount_paid: Money;
    total: Money;
    credits_applied: Money;
    amount_due: Money;
    amount_to_collect: Money;
    sub_total: Money;
    status: string;
}
export interface Card {
    number: string;
    cvv: string;
    expiry_month: number;
    expiry_year: number;
    gateway_account_id: string;
    gateway: string;
    first_name: string;
    last_name: string;
    type: string;
    last4: string;
}
export interface CheckoutSummaryActions {
}
