export declare function isValidElement(input: any): boolean;
export declare function resolvePropValue<TProperty, Tvalue>(property: TProperty, value: Tvalue): any;
export declare enum Keys {
    Space = " ",
    Enter = "Enter",
    Escape = "Escape",
    Backspace = "Backspace",
    ArrowLeft = "ArrowLeft",
    ArrowUp = "ArrowUp",
    ArrowRight = "ArrowRight",
    ArrowDown = "ArrowDown",
    Home = "Home",
    End = "End",
    PageUp = "PageUp",
    PageDown = "PageDown",
    Tab = "Tab"
}
export declare const computedBoxProperties: (el: Element) => {
    [k: string]: string;
    width: string;
    height: string;
    paddingTop: string;
    paddingRight: string;
    paddingBottom: string;
    paddingLeft: string;
    borderWidth: string;
};
