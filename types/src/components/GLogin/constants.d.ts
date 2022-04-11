import { PropType } from 'vue';
import { LoginLabels, LoginFieldState, LoginAllowedActions } from './types';
export declare const LOGIN_PROPS: {
    state: {
        type: PropType<LoginFieldState>;
        default: LoginFieldState;
    };
    labels: {
        type: PropType<LoginLabels>;
        required: boolean;
    };
    email: {
        type: StringConstructor;
        required: boolean;
    };
    passcode: {
        type: StringConstructor;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    allowedActions: {
        type: PropType<LoginAllowedActions[]>;
        default: LoginAllowedActions[];
    };
    invalid: {
        type: BooleanConstructor;
    };
    errorMessage: {
        type: StringConstructor;
    };
    onLoginViaOtp: PropType<(event: Event) => void>;
    onLoginViaPassword: PropType<(event: Event) => void>;
    onResendOtp: PropType<(event: Event) => void>;
    onProceed: PropType<(event: Event) => void>;
    onLogin: PropType<(event: Event) => void>;
    onKeydown: PropType<(event: KeyboardEvent) => void>;
    'onUpdate:email': PropType<(event: Event) => void>;
    'onUpdate:passcode': PropType<(event: Event) => void>;
};
