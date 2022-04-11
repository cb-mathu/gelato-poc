import { defineComponent, ref, watch, watchEffect } from 'vue';
import { GInput } from '../GInput';
import { DIAL_CODES, PHONE_INPUT_PROPS } from './constants';
import { InputTypes } from '../core/Input/types';
import { GSelect } from '../GSelect';
import { usePhoneUtils, formatPhoneNumber, DEFAULT_DIAL_CODE } from './utils';
import { DialCode } from './constants';
import { useId, useVModel } from '../../composables';

export default defineComponent({
  name: 'GPhone',
  props: PHONE_INPUT_PROPS,
  emits: ['update:modelValue', 'update:countryCode'],
  inheritAttrs: false,

  setup(props, { attrs, slots, emit }) {
    let { autoComplete, dialCodes } = usePhoneUtils(props, props.name);

    let phoneNumber = ref('');
    let dialCode = ref('');

    const emitValue = (phone: string, countryCode?: string) => {
      emit('update:modelValue', phone);
      emit('update:countryCode', countryCode);
    };

    const setInitialValues = () => {
      let initialValue = props.modelValue?.toString() || '';
      dialCode.value = DIAL_CODES.find((country) => country.code === props.countryCode)?.dialCode || DEFAULT_DIAL_CODE;
      let formattedObj = formatPhoneNumber({
        phoneNumber: initialValue,
        dialCode: dialCode.value,
      });
      phoneNumber.value = formattedObj.phoneNumber;
      dialCode.value = formattedObj.dialCode || '';
      emitValue(formattedObj.storeValue, formattedObj.countryCode);
    };

    setInitialValues();

    const onKeydown = (event: KeyboardEvent) => {
      event.key && /[^A-Za-z0-9]/.test(event.key) && event.preventDefault();
    };

    const updateValue = (phone: string, dialCode: string, event?: Event) => {
      const formattedObj = formatPhoneNumber(
        {
          dialCode,
          phoneNumber: phone,
        },
        event,
      );
      phoneNumber.value = formattedObj.phoneNumber;
      emitValue(formattedObj.storeValue, formattedObj.countryCode);
    };

    const onInput = (event: Event) => {
      updateValue((event.target as HTMLInputElement)?.value || '', dialCode.value);
    };

    const propsWeControl: any = {
      id: props.id || useId('GPhone'),
      autocomplete: autoComplete,
    };

    const listeners = {
      onKeydown,
      onInput,
    };

    const onDialCodeChange = (value: string) => {
      if (value === dialCode.value) {
        return;
      }
      dialCode.value = value;
      updateValue(phoneNumber.value, dialCode.value);
    };

    return () => {
      const attributes = { ...attrs, ...listeners, ...props, ...propsWeControl };

      const countrySelectAttributes = {
        disabled: props.disabled,
        readonly: props.readonly,
        modelValue: dialCode.value,
        'onUpdate:modelValue': onDialCodeChange,
      };

      return (
        <GInput {...attributes} modelValue={phoneNumber.value} type={InputTypes.Tel}>
          {{
            ...slots,
            prefix: () => (
              <GSelect {...countrySelectAttributes}>
                {{
                  options: () => (
                    <>
                      {dialCodes.map((country: DialCode) => (
                        <option value={country.dialCode}>{country.code}</option>
                      ))}
                    </>
                  ),
                }}
              </GSelect>
            ),
          }}
        </GInput>
      );
    };
  },
});
