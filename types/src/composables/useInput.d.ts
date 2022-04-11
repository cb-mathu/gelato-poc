export declare enum FieldTypes {
    Text = "text",
    Number = "number",
    Textarea = "textarea"
}
export declare function useInput({ type, props }: {
    type?: string;
    props: Record<string, unknown>;
}): {
    internalValue: import("vue").WritableComputedRef<any>;
    onBlur(event: Event): void;
    onChange(event: Event): void;
    onInput(event: Event): void;
    onKeydown(event: Event): void;
};
