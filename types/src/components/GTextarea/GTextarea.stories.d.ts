declare const _default: {
    title: string;
    component: import("vue").DefineComponent<{
        label: {
            type: StringConstructor;
        };
        description: {
            type: StringConstructor;
        };
        onUpdate: import("vue").PropType<(event: Event) => void>;
        noResize: {
            type: BooleanConstructor;
            default: boolean;
        };
        id: {
            type: StringConstructor;
            required: boolean;
        };
        class: {
            type: StringConstructor;
            required: boolean;
            default: string;
        };
        disabled: {
            type: BooleanConstructor;
        };
        autofocus: {
            type: BooleanConstructor;
            default: boolean;
        };
        autocomplete: {
            type: StringConstructor;
            default: string;
        };
        required: {
            type: BooleanConstructor;
            default: boolean;
        };
        readonly: {
            type: BooleanConstructor;
            default: boolean;
        };
        name: {
            type: StringConstructor;
            default: string;
        };
        modelValue: {
            type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
            default: string;
        };
        placeholder: {
            type: StringConstructor;
            default: string;
        };
        modelModifiers: {
            default: () => {};
        };
        invalid: {
            type: BooleanConstructor;
        };
        errorMessage: {
            type: StringConstructor;
        };
    }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
        class: string;
        autofocus: boolean;
        disabled: boolean;
        name: string;
        placeholder: string;
        modelValue: string | number | boolean;
        autocomplete: string;
        required: boolean;
        readonly: boolean;
        modelModifiers: {};
        invalid: boolean;
        noResize: boolean;
    } & {
        id?: string | undefined;
        label?: string | undefined;
        errorMessage?: string | undefined;
        description?: string | undefined;
        onUpdate?: ((event: Event) => void) | undefined;
    }>, {
        class: string;
        autofocus: boolean;
        disabled: boolean;
        name: string;
        placeholder: string;
        modelValue: string | number | boolean;
        autocomplete: string;
        required: boolean;
        readonly: boolean;
        modelModifiers: {};
        invalid: boolean;
        noResize: boolean;
    }>;
    argTypes: {
        name: {
            default: string;
        };
        label: {
            description: string;
            control: {
                type: string;
            };
        };
        description: {
            description: string;
            control: {
                type: string;
            };
        };
        disabled: {
            description: string;
            control: {
                type: string;
            };
        };
        autofocus: {
            description: string;
            default: boolean;
            control: {
                type: string;
            };
        };
        autocomplete: {
            description: string;
            defaultValue: string;
            control: {
                type: string;
            };
        };
        required: {
            description: string;
            default: boolean;
            control: {
                type: string;
            };
        };
        readonly: {
            description: string;
            default: boolean;
            control: {
                type: string;
            };
        };
        modelValue: {
            description: string;
            control: {
                type: string;
            };
        };
        id: {
            description: string;
            control: {
                type: string;
            };
        };
        placeholder: {
            description: string;
            control: {
                type: string;
            };
        };
        class: {
            description: string;
            defaulValue: string;
            control: {
                type: string;
            };
        };
        invalid: {
            description: string;
            defaulValue: boolean;
            control: {
                type: string;
            };
        };
        errorMessage: {
            description: string;
            defaulValue: string;
            control: {
                type: string;
            };
        };
        maxlength: {
            description: string;
            control: {
                type: string;
            };
        };
        noResize: {
            description: string;
            defaultVal: boolean;
            control: {
                type: string;
            };
        };
        cols: {
            description: string;
            control: {
                type: string;
            };
        };
    };
};
export default _default;
export declare const Story: (args: any) => {
    setup(): () => JSX.Element;
};
export declare const DefaultTextarea: (props?: Partial<{
    class: string;
    autofocus: boolean;
    disabled: boolean;
    name: string;
    placeholder: string;
    modelValue: string | number | boolean;
    autocomplete: string;
    required: boolean;
    readonly: boolean;
    modelModifiers: {};
    invalid: boolean;
    noResize: boolean;
} & {
    id?: string | undefined;
    errorMessage?: string | undefined;
} & {
    onCopy?: ((payload: ClipboardEvent) => void) | undefined;
    onCut?: ((payload: ClipboardEvent) => void) | undefined;
    onPaste?: ((payload: ClipboardEvent) => void) | undefined;
    onCompositionend?: ((payload: CompositionEvent) => void) | undefined;
    onCompositionstart?: ((payload: CompositionEvent) => void) | undefined;
    onCompositionupdate?: ((payload: CompositionEvent) => void) | undefined;
    onDrag?: ((payload: DragEvent) => void) | undefined;
    onDragend?: ((payload: DragEvent) => void) | undefined;
    onDragenter?: ((payload: DragEvent) => void) | undefined;
    onDragexit?: ((payload: DragEvent) => void) | undefined;
    onDragleave?: ((payload: DragEvent) => void) | undefined;
    onDragover?: ((payload: DragEvent) => void) | undefined;
    onDragstart?: ((payload: DragEvent) => void) | undefined;
    onDrop?: ((payload: DragEvent) => void) | undefined;
    onFocus?: ((payload: FocusEvent) => void) | undefined;
    onFocusin?: ((payload: FocusEvent) => void) | undefined;
    onFocusout?: ((payload: FocusEvent) => void) | undefined;
    onBlur?: ((payload: FocusEvent) => void) | undefined;
    onChange?: ((payload: Event) => void) | undefined;
    onBeforeinput?: ((payload: Event) => void) | undefined;
    onInput?: ((payload: Event) => void) | undefined;
    onReset?: ((payload: Event) => void) | undefined;
    onSubmit?: ((payload: Event) => void) | undefined;
    onInvalid?: ((payload: Event) => void) | undefined;
    onLoad?: ((payload: Event) => void) | undefined;
    onError?: ((payload: Event) => void) | undefined;
    onKeydown?: ((payload: KeyboardEvent) => void) | undefined;
    onKeypress?: ((payload: KeyboardEvent) => void) | undefined;
    onKeyup?: ((payload: KeyboardEvent) => void) | undefined;
    onAuxclick?: ((payload: MouseEvent) => void) | undefined;
    onClick?: ((payload: MouseEvent) => void) | undefined;
    onContextmenu?: ((payload: MouseEvent) => void) | undefined;
    onDblclick?: ((payload: MouseEvent) => void) | undefined;
    onMousedown?: ((payload: MouseEvent) => void) | undefined;
    onMouseenter?: ((payload: MouseEvent) => void) | undefined;
    onMouseleave?: ((payload: MouseEvent) => void) | undefined;
    onMousemove?: ((payload: MouseEvent) => void) | undefined;
    onMouseout?: ((payload: MouseEvent) => void) | undefined;
    onMouseover?: ((payload: MouseEvent) => void) | undefined;
    onMouseup?: ((payload: MouseEvent) => void) | undefined;
    onAbort?: ((payload: Event) => void) | undefined;
    onCanplay?: ((payload: Event) => void) | undefined;
    onCanplaythrough?: ((payload: Event) => void) | undefined;
    onDurationchange?: ((payload: Event) => void) | undefined;
    onEmptied?: ((payload: Event) => void) | undefined;
    onEncrypted?: ((payload: Event) => void) | undefined;
    onEnded?: ((payload: Event) => void) | undefined;
    onLoadeddata?: ((payload: Event) => void) | undefined;
    onLoadedmetadata?: ((payload: Event) => void) | undefined;
    onLoadstart?: ((payload: Event) => void) | undefined;
    onPause?: ((payload: Event) => void) | undefined;
    onPlay?: ((payload: Event) => void) | undefined;
    onPlaying?: ((payload: Event) => void) | undefined;
    onProgress?: ((payload: Event) => void) | undefined;
    onRatechange?: ((payload: Event) => void) | undefined;
    onSeeked?: ((payload: Event) => void) | undefined;
    onSeeking?: ((payload: Event) => void) | undefined;
    onStalled?: ((payload: Event) => void) | undefined;
    onSuspend?: ((payload: Event) => void) | undefined;
    onTimeupdate?: ((payload: Event) => void) | undefined;
    onVolumechange?: ((payload: Event) => void) | undefined;
    onWaiting?: ((payload: Event) => void) | undefined;
    onSelect?: ((payload: Event) => void) | undefined;
    onScroll?: ((payload: UIEvent) => void) | undefined;
    onTouchcancel?: ((payload: TouchEvent) => void) | undefined;
    onTouchend?: ((payload: TouchEvent) => void) | undefined;
    onTouchmove?: ((payload: TouchEvent) => void) | undefined;
    onTouchstart?: ((payload: TouchEvent) => void) | undefined;
    onPointerdown?: ((payload: PointerEvent) => void) | undefined;
    onPointermove?: ((payload: PointerEvent) => void) | undefined;
    onPointerup?: ((payload: PointerEvent) => void) | undefined;
    onPointercancel?: ((payload: PointerEvent) => void) | undefined;
    onPointerenter?: ((payload: PointerEvent) => void) | undefined;
    onPointerleave?: ((payload: PointerEvent) => void) | undefined;
    onPointerover?: ((payload: PointerEvent) => void) | undefined;
    onPointerout?: ((payload: PointerEvent) => void) | undefined;
    onWheel?: ((payload: WheelEvent) => void) | undefined;
    onAnimationstart?: ((payload: AnimationEvent) => void) | undefined;
    onAnimationend?: ((payload: AnimationEvent) => void) | undefined;
    onAnimationiteration?: ((payload: AnimationEvent) => void) | undefined;
    onTransitionend?: ((payload: TransitionEvent) => void) | undefined;
    onTransitionstart?: ((payload: TransitionEvent) => void) | undefined;
} & import("vue").AllowedComponentProps & import("vue").VNodeProps & {
    class: string;
} & {
    id?: string | undefined;
} & import("../core/Textarea/types").NativeTextareaProps> | undefined, slots?: any) => JSX.Element;
export declare const TextareaWithLabel: (props?: any) => JSX.Element;
export declare const TextareaWithDescription: () => JSX.Element;
export declare const TextareaWithSlots: any;
export declare const DisabledTextarea: any;
export declare const ReadonlyTextarea: any;
export declare const InvalidTextarea: any;
export declare const LazyTextarea: () => {
    setup(): () => JSX.Element;
};
