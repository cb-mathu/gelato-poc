//Handles colors property in Configuration Object
//Receives the color code and sets the css variable
import { config, ConfigProperties } from './plugin';
import { ThemeProperties } from './theme';

export interface Color {
  [key: string]: string;
}

export const setColors = (colorObject: Color) => {
  const root = document.documentElement;
  let token: keyof Color;
  for (token in colorObject) {
    const property = `--color-${token}`;
    const colorCode = colorObject[token];
    root.style.setProperty(property, colorCode);
    config[ConfigProperties.theme]![ThemeProperties.colors]![token] = colorObject[token];
  }
};
