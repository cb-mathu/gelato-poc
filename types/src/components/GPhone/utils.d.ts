export declare const DEFAULT_DIAL_CODE = "+1";
declare let dialCode: string;
export declare const PHONE_REGEX: RegExp;
export declare const usePhoneUtils: (props: any, name: string) => {
    dialCode: string;
    autoComplete: string;
    dialCodes: import("./constants").DialCode[];
};
export declare const formatPhoneNumber: (inputObj: {
    dialCode?: string;
    phoneNumber: string;
}, event?: any) => {
    phoneNumber: string;
    storeValue: string;
    countryCode: string | undefined;
    dialCode: string | undefined;
};
export {};
