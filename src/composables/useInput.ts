// Used for input fields: Text, Number and Textarea
import { getCurrentInstance } from 'vue';
import { useVModel } from './useVModel';

export enum FieldTypes {
  Text = 'text',
  Number = 'number',
  Textarea = 'textarea',
}

export function useInput({ type, props }: { type?: string; props: Record<string, unknown> }) {
  const internalValue = useVModel(props, 'modelValue');
  const updateTextValue = (event: Event, props: Record<string, unknown>) => {
    let newValue: string | undefined = (event.target as HTMLInputElement).value;
    const formattedValue = formatValue(newValue);
    internalValue.value = formattedValue;
  };

  const updateNumberValue = (event: Event, props: Record<string, unknown>) => {
    let newValue: string | number | undefined = (event.target as HTMLInputElement).value.trim();
    newValue = newValue.length === 0 ? undefined : newValue;
    // @ts-ignore
    const parsedValue = parseFloat(newValue);
    newValue = isNaN(parsedValue) ? newValue : parsedValue;
    const formattedValue = formatValue(newValue);
    if (props.min && formattedValue < (props.min as number)) {
      internalValue.value = props.min;
      return;
    }
    if (props.max && formattedValue > (props.max as number)) {
      internalValue.value = props.max;
      return;
    }
    internalValue.value = formattedValue;
  };

  const formatValue = (value: string | number | undefined) => {
    return (props.formatter as Function)?.(value) || value;
  };

  const updateValue = (event: Event, type: string = FieldTypes.Text, props: Record<string, unknown>) => {
    switch (type) {
      case FieldTypes.Number:
        updateNumberValue(event, props);
        break;
      default:
        updateTextValue(event, props);
    }
  };

  return {
    internalValue,
    onBlur(event: Event) {
      getCurrentInstance()?.emit?.('blur', event);
    },
    onChange(event: Event) {
      updateValue(event, type, props);
    },
    onInput(event: Event) {
      if (!(props.modelModifiers as any).lazy) {
        updateValue(event, type, props);
        getCurrentInstance()?.emit?.('input', event);
      }
    },
    onKeydown(event: Event) {
      getCurrentInstance()?.emit?.('onKeydown', event);
    },
  };
}
