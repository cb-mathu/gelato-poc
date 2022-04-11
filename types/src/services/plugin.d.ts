import { Theme } from './theme';
export declare enum ConfigProperties {
    theme = "theme"
}
export interface Config {
    [ConfigProperties.theme]?: Theme;
}
export declare let config: Config;
export declare const setConfig: (options?: Config) => Config;
