import { Color } from './colors';
export declare enum ThemeProperties {
    colors = "colors"
}
export interface Theme {
    [ThemeProperties.colors]: Color | undefined;
}
export declare const setTheme: (theme: Theme) => void;
