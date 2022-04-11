import { computed, ComputedRef, defineComponent } from 'vue';
import { LOGIN_PROPS } from './constants';
import { Clickable } from '../../utils/accessibility';
import { MergedLoginProps, LoginFieldState, LoginAllowedActions } from './types';
import { GInput, InputTypes } from '../GInput';
import { ButtonVariant, GButton } from '../GButton';
import { useVModel } from '../../composables';
import { GSection } from '../utitities';

const GLogin = defineComponent({
  name: 'g-login',
  props: LOGIN_PROPS,
  emits: ['loginViaOtp', 'loginViaPassword', 'resendOtp', 'login', 'proceed', 'update:email', 'update:passcode'],
  setup(props, { emit, slots }) {
    const inputFieldAttrs: ComputedRef<{ label?: string; description?: string; placeholder?: string; id?: string }> = computed(() => {
      const labels = props.labels;
      if (props.state === LoginFieldState.OTP) {
        return {
          id: labels?.otpId,
          label: labels?.otpLabel,
          description: labels?.otpDescription,
          placeholder: labels?.otpPlaceholder,
        };
      } else if (props.state === LoginFieldState.Password) {
        return {
          id: labels?.passwordId,
          label: labels?.passWordLabel,
          description: labels?.passWordDescription,
          placeholder: labels?.passWordPlaceholder,
        };
      }
      return {};
    });

    const internalEmail = useVModel(props, 'email');
    const internalPasscode = useVModel(props, 'passcode');
    return () => {
      return (
        <>
          <div class="g-login__overlay"></div>
          <GSection class="g-section g-login-section test-class">
            <div class="g-form g-card g-login">
              <h2>{props.labels?.title}</h2>
              {props.state === LoginFieldState.Email ? (
                <>
                  {slots.default?.()}
                  <GButton onClick={() => emit('proceed')} variant={ButtonVariant.Primary} disabled={props.disabled}>
                    {props.labels?.proceed}
                  </GButton>
                </>
              ) : (
                <>
                  {props.email && (
                    <GInput
                      disabled={true}
                      v-model={internalEmail.value}
                      label={props.labels?.emailLabel}
                      description={props.labels?.emailDescription}
                    />
                  )}
                  <div class="g-grid g-grid-cols-12 g-gap-y-4">
                    <div class="g-col-span-8">
                      <GInput
                        id={inputFieldAttrs.value.id}
                        type={InputTypes.Password}
                        v-model={internalPasscode.value}
                        label={inputFieldAttrs.value.label}
                        disabled={props.disabled}
                        description={inputFieldAttrs.value.description}
                        placeholder={inputFieldAttrs.value.placeholder}
                        onKeydown={props.onKeydown}
                        invalid={props.invalid}
                        errorMessage={props.errorMessage}
                      />
                    </div>
                    <div class="g-col-span-8">
                      <GButton onClick={() => emit('login')} variant={ButtonVariant.Primary} disabled={props.disabled} fluid={true}>
                        {props.labels?.login}
                      </GButton>
                    </div>
                  </div>
                  {props.state === LoginFieldState.Password && props.allowedActions?.includes(LoginAllowedActions.LoginViaOtp) ? (
                    <Clickable as="a" onClick={() => emit('loginViaOtp')}>
                      {props.labels?.loginViaOtp}
                    </Clickable>
                  ) : (
                    <div class="g-login__actions">
                      {props.allowedActions?.includes(LoginAllowedActions.ResendOtp) && (
                        <Clickable as="a" onClick={() => emit('resendOtp')}>
                          {props.labels?.resentOtp}
                        </Clickable>
                      )}
                      {props.allowedActions?.includes(LoginAllowedActions.LoginViaPassWord) && (
                        <Clickable as="a" onClick={() => emit('loginViaPassword')}>
                          {props.labels?.loginViaPassword}
                        </Clickable>
                      )}
                    </div>
                  )}
                </>
              )}
            </div>
          </GSection>
        </>
      );
    };
  },
});

export default GLogin as {
  new (): {
    $props: MergedLoginProps;
  };
};
