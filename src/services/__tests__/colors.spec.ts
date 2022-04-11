import { setConfig, config, Config, ConfigProperties } from '../plugin';
import { ThemeProperties } from '../theme';

describe('Options.Theme.Colors: Config Util : ', () => {
  test('sets color tokens to the root', async () => {
    const appConfig: Config = {
      theme: {
        colors: {
          ['primary-500']: '#00f',
        },
      },
    };
    setConfig(appConfig);
    expect(config).toEqual(appConfig);
    expect(document.documentElement.style.getPropertyValue('--color-primary-500')).toBe('#00f');
  });
  test('has default configuration when colors object is empty', async () => {
    const emptyConfig: any = {
      theme: {
        colors: {},
      },
    };
    setConfig(emptyConfig);
    expect(config).toBeTruthy();
    expect(config[ConfigProperties.theme]![ThemeProperties.colors]).not.toEqual(emptyConfig.theme.colors);
  });
});
