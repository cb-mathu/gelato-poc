import { VueComponentProps } from '../../types';
import { ExtractPropTypes, HTMLAttributes } from 'vue';
import { LOGIN_PROPS } from './constants';

export enum LoginFieldState {
  Email = 'Email',
  OTP = 'OTP',
  Password = 'Password',
}

export interface LoginLabels {
  title: string;
  emailLabel?: string;
  emailDescription?: string;
  emailPlaceholder?: string;
  passWordLabel?: string;
  passWordDescription?: string;
  passWordPlaceholder?: string;
  otpLabel?: string;
  otpDescription?: string;
  otpPlaceholder?: string;
  login: string;
  proceed: string;
  loginViaOtp: string;
  loginViaPassword: string;
  resentOtp: string;
  otpId?: string;
  passwordId?: string;
}

export enum LoginAllowedActions {
  LoginViaOtp = 'LoginViaOtp',
  LoginViaPassWord = 'LoginViaPassWord',
  ResendOtp = 'ResendOtp',
}

export type LoginProp = ExtractPropTypes<typeof LOGIN_PROPS>;
type NativeDivProps = Omit<HTMLAttributes, keyof LoginProp>;
export type MergedLoginProps = Partial<LoginProp & VueComponentProps & NativeDivProps>;
