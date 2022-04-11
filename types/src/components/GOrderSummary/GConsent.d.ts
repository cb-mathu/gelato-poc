import { PropType } from 'vue';
import { ConsentField } from './types';
declare const _default: import("vue").DefineComponent<{
    consentFields: {
        type: PropType<ConsentField[]>;
        required: true;
    };
    onConsentChange: {
        type: PropType<(consent: any) => void>;
        required: false;
    };
}, () => JSX.Element[], unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    consentFields: ConsentField[];
} & {
    onConsentChange?: ((consent: any) => void) | undefined;
}>, {}>;
export default _default;
