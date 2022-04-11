import { useId } from '../composables';
import { AnchorHTMLAttributes, ButtonHTMLAttributes, h, HTMLAttributes, Component, ComputedOptions, MethodOptions } from 'vue';

export interface FormAria {
  ['aria-labelledby']?: string;
  ['aria-describedBy']?: string;
  ['aria-invalid']?: boolean;
  ['aria-errormessage']?: string;
}

interface ControlAria {
  ['aria-checked']?: boolean | 'mixed';
}

interface DisclosureAria {
  ['aria-expanded']?: boolean;
  ['aria-controls']?: string;
}

export const useFormAriaIds = (id?: string) => {
  const labelId = useId('label', id);
  const descriptionId = useId('description', id);
  const errorId = useId('error', id);
  return {
    labelId,
    descriptionId,
    errorId,
  };
};

// Form fields
export const useFormAria = ({
  labelledBy,
  describedBy,
  invalid,
  errorMessage,
}: {
  labelledBy?: string;
  describedBy?: string;
  invalid?: boolean;
  errorMessage?: string;
}): FormAria => ({
  ['aria-labelledby']: labelledBy,
  ['aria-describedBy']: describedBy,
  ['aria-invalid']: invalid,
  ['aria-errormessage']: invalid ? errorMessage : '',
});

// Control fields: Checkbox, Radio, Switch
export const useControlAria = ({ checked, indeterminate }: { checked: boolean; indeterminate?: boolean }): ControlAria => ({
  ['aria-checked']: indeterminate ? 'mixed' : checked,
});

// Expand collapse
export const useDisclosureAria = ({ expanded, controlId }: { expanded?: boolean; controlId?: string }): DisclosureAria => ({
  ['aria-expanded']: expanded,
  ['aria-controls']: controlId,
});

export const Tabbable = (props: any, { slots }: { slots: any }) => {
  const tabindex = props.disabled ? -1 : 0;
  const element = props.as || 'div';
  const attributes = {
    ...props,
    tabindex,
    ['aria-disabled']: props.disabled,
  };
  return h(element, { ...attributes }, slots);
};

type ClickableProps = HTMLAttributes &
  ButtonHTMLAttributes &
  AnchorHTMLAttributes & { as?: string | Component<any, any, any, ComputedOptions, MethodOptions> };

export const Clickable = (props: ClickableProps, { slots }: { slots: any }) => {
  const onKeydown = (event: KeyboardEvent) => {
    if (props.disabled) {
      return;
    }
    const isEnter = event.key === 'Enter';
    const isSpace = event.key === ' ';
    const element = event.currentTarget as HTMLElement;
    if (isEnter || isSpace) {
      event.preventDefault();
      element?.click?.();
    }
  };

  const onClick = (event: MouseEvent) => {
    if (props.disabled) {
      event.stopImmediatePropagation();
      return;
    }
  };

  const attributes = {
    ...props,
    onKeydown,
    onClick,
    role: props.as === 'a' ? 'button' : undefined,
  };
  return h(Tabbable, { ...attributes }, slots);
};
