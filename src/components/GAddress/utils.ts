import { Address } from './types';

export const getCustomerName = (address: Address): string => {
  return [address.first_name, address.last_name].join(' ').trim();
};

export const getAddressLine = (...fields: any[]): string => {
  return fields.join(', ');
};
export const removeLastComma = (stringData: string): string => {
  return stringData?.replace(/,(\s+)?$/, '');
};
