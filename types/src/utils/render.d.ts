import { Slots, SetupContext } from 'vue';
export declare enum Features {
    /** No features at all */
    None = 0,
    /**
     * When used, this will allow us to use one of the render strategies.
     *
     * **The render strategies are:**
     *    - **Unmount**   _(Will unmount the component.)_
     *    - **Hidden**    _(Will hide the component using the [hidden] attribute.)_
     */
    RenderStrategy = 1,
    /**
     * When used, this will allow the user of our component to be in control. This can be used when
     * you want to transition based on some state.
     */
    Static = 2
}
export declare enum RenderStrategy {
    Unmount = 0,
    Hidden = 1
}
export declare function render({ visible, features, ...main }: {
    props: Record<string, unknown>;
    slot?: Record<string, unknown>;
    attrs: Record<string, unknown>;
    slots: Slots;
    name: string;
} & {
    features?: Features;
    visible?: boolean;
}): import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}> | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>[] | null | undefined;
export declare const simpleComponentFactory: (el: string, className: string) => (props: Record<string, unknown>, context: SetupContext) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>;
