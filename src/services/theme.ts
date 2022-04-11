//Handles theme property in Configuration Object
import { assert } from '../utils/common';
import { Color, setColors } from './colors';

export enum ThemeProperties {
  colors = 'colors',
}
export interface Theme {
  [ThemeProperties.colors]: Color | undefined;
}

export const setTheme = (theme: Theme) => {
  if (!theme || !Object.keys(theme).length) {
    return;
  }

  let property: keyof Theme;
  for (property in theme) {
    switch (property) {
      case ThemeProperties.colors:
        setColors(theme[ThemeProperties.colors]!);
        break;
      default:
        assert(false, `Unsupported theme property: ${property}`);
    }
  }
};
