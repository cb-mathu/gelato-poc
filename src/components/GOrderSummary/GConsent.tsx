import { ref, defineComponent, PropType } from 'vue';
import GCheckbox from '../GCheckbox/GCheckbox';
import { ConsentField } from './types';

export default defineComponent({
  name: 'GConsent',
  props: {
    consentFields: {
      type: Array as PropType<Array<ConsentField>>,
      required: true,
    },
    onConsentChange: {
      type: Function as PropType<(consent: any) => void>,
      required: false,
    },
  },

  setup(props) {
    const input = props.consentFields && props.consentFields.length > 0 ? ref([props.consentFields[0]]) : ref([]);
    const consentListener: any = {
      'onUpdate:modelValue': props.onConsentChange,
    };
    const consentField = (field: ConsentField) => {
      return <GCheckbox id={field.id} v-model={input.value} value={field.id} label={field.description} {...consentListener}></GCheckbox>;
    };
    return () => props.consentFields.map((field: ConsentField) => consentField(field));
  },
});
