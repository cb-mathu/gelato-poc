import { VueComponentProps } from '../../types';
import { ExtractPropTypes, HTMLAttributes } from 'vue';
import { ADDRESS_PROPS } from './constants';
export interface Address extends Record<string, any> {
    first_name?: string;
    last_name?: string;
    company?: string;
    email?: string;
    phone?: string;
    line1?: string;
    line2?: string;
    line3?: string;
    country?: string | Country;
    state?: string | State;
    city?: string;
    zip?: string;
}
export interface State {
    state_name: string;
    state_code: string;
}
export interface Country {
    country_name: string;
    vat_country_code: string;
    country_code: string;
    states: Array<State>;
}
export interface ShippingAddress extends Address {
    label?: string;
}
export interface BillingAddress extends Address {
}
export declare type AddressProp = ExtractPropTypes<typeof ADDRESS_PROPS>;
export declare type NativeDivProps = Omit<HTMLAttributes, keyof AddressProp>;
export declare type MergedAddressProp = Partial<AddressProp & VueComponentProps & NativeDivProps>;
