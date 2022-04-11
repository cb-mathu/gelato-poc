import { PropType } from 'vue';
import { LoginLabels, LoginFieldState, LoginAllowedActions } from './types';

const defaultLoginActions = [LoginAllowedActions.LoginViaOtp, LoginAllowedActions.ResendOtp];

export const LOGIN_PROPS = {
  state: {
    type: String as PropType<LoginFieldState>,
    default: LoginFieldState.Password,
  },
  labels: {
    type: Object as PropType<LoginLabels>,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  passcode: {
    type: String,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  allowedActions: {
    type: Array as PropType<Array<LoginAllowedActions>>,
    default: defaultLoginActions,
  },
  invalid: {
    type: Boolean,
  },
  errorMessage: {
    type: String,
  },
  onLoginViaOtp: Function as PropType<(event: Event) => void>,
  onLoginViaPassword: Function as PropType<(event: Event) => void>,
  onResendOtp: Function as PropType<(event: Event) => void>,
  onProceed: Function as PropType<(event: Event) => void>,
  onLogin: Function as PropType<(event: Event) => void>,
  onKeydown: Function as PropType<(event: KeyboardEvent) => void>,
  'onUpdate:email': Function as PropType<(event: Event) => void>,
  'onUpdate:passcode': Function as PropType<(event: Event) => void>,
};
