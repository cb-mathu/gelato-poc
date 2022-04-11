// Exposes Options to configure gelato
import { assert } from '../utils/common';
import { Theme, setTheme } from './theme';

export enum ConfigProperties {
  theme = 'theme',
}
export interface Config {
  [ConfigProperties.theme]?: Theme;
}

export let config: Config = {
  theme: {
    colors: {
      ['primary-500']: '#98fb98',
    },
  },
};

const setInternalConfig = (options: Config = {}) => {
  let property: keyof Config;
  for (property in options) {
    switch (property) {
      case ConfigProperties.theme:
        setTheme(options[ConfigProperties.theme]!);
        break;
      default:
        assert(!property, `Unsupported property: ${property}`);
    }
  }
};

export const setConfig = (options: Config = {}) => {
  setInternalConfig(options);
  return config;
};
