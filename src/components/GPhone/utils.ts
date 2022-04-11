import { DIAL_CODES, AUTO_COMPLETE_MAPPING } from './constants';
export const DEFAULT_DIAL_CODE = '+1';
const DEFAULT_FORMAT = '+. ... ... ....';
let dialCode = '';

export const PHONE_REGEX = new RegExp('[^A-Za-z0-9]', 'g');

export const usePhoneUtils = (props: any, name: string) => {
  dialCode = DIAL_CODES.find((country) => country.code === (props.countryCode || '').replace(/\s/g, ''))?.dialCode || DEFAULT_DIAL_CODE;
  let autoCompleteMapping = AUTO_COMPLETE_MAPPING[name];
  let autoComplete = autoCompleteMapping || 'off';
  return {
    dialCode,
    autoComplete,
    dialCodes: DIAL_CODES,
  };
};

// Returns the country object which matches the selected dialCode
const getCountry = (dialCode: string) => {
  dialCode = dialCode || DEFAULT_DIAL_CODE;
  let matchedCountry = DIAL_CODES.find((country) => {
    return dialCode.startsWith(country.dialCode);
  });
  DIAL_CODES.forEach((country) => {
    if (dialCode.includes(country.dialCode)) {
      matchedCountry = country.dialCode.length > matchedCountry?.dialCode?.length! ? country : matchedCountry;
    }
  });
  return matchedCountry;
};

// Remove all characters except alphanumericals
const getAlphaNumericValue = (phoneNumber: string) => {
  return phoneNumber.replace(PHONE_REGEX, '');
};

// Formate the phone number bases on the selected format
const formatByCountry = (format: string, strippedInternalValue: string) => {
  format = format || DEFAULT_FORMAT;
  let phoneFormat = format.split(' ').shift() || [];
  let formattedValue = '';
  format = format.substring(phoneFormat.length + 1, format.length);
  for (var i = 0, j = 0; i < format.length && j < strippedInternalValue.length; i++) {
    formattedValue += format[i] == '.' ? strippedInternalValue[j++] : format[i];
  }
  return formattedValue;
};

// Splits dial code from the phone number, sanitizes with alpha numeric values and formats the phone number
const splitPhoneNumber = ({ dialCode, phoneNumber }: { dialCode?: string; phoneNumber: string }) => {
  if (!phoneNumber) {
    return { dialCode, phoneNumber };
  }
  let country;
  if (phoneNumber.startsWith('+')) {
    country = getCountry(phoneNumber);
    country && (phoneNumber = phoneNumber.substring(country.dialCode.length));
  }
  if (!country) {
    if (dialCode) {
      country = getCountry(dialCode);
    }
  }
  phoneNumber = (formatByCountry(country?.format || '', getAlphaNumericValue(phoneNumber)) || phoneNumber).substring(0, 14);
  dialCode = country?.dialCode;
  return { dialCode, phoneNumber, countryCode: country?.code };
};

export const formatPhoneNumber = (inputObj: { dialCode?: string; phoneNumber: string }, event?: any) => {
  let storeValue = '',
    formatted;
  let internalDialCode = (inputObj.dialCode || dialCode).replace(/\s/g, '');
  formatted = splitPhoneNumber({ dialCode: internalDialCode, phoneNumber: inputObj.phoneNumber.replace(/\s/g, '') });
  let phoneNumber = formatted.phoneNumber;
  let formattedDialCode = formatted.dialCode;
  let { countryCode } = formatted;
  storeValue = getAlphaNumericValue(phoneNumber) ? formattedDialCode + getAlphaNumericValue(phoneNumber) : '';
  return {
    phoneNumber,
    storeValue,
    countryCode,
    dialCode: formattedDialCode,
  };
};
