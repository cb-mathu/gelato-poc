import { setConfig, config, Config, ConfigProperties } from '../plugin';

describe('Options.Theme: Config Util: ', () => {
  test('Sets the Theme', async () => {
    const appConfig: Config = {
      theme: {
        colors: {
          ['primary-500']: '#0f0',
        },
      },
    };
    setConfig(appConfig);
    expect(appConfig[ConfigProperties.theme]).toEqual(appConfig.theme);
  });
  test('should not set if invalid theme is passed and error is thrown', async () => {
    const invalidConfig: any = {
      theme: {
        styles: {
          ['primary-500']: '#000',
        },
      },
    };
    try {
      setConfig(invalidConfig);
    } catch (err) {
      expect(err).toBeTruthy();
      expect(config).not.toEqual(invalidConfig);
    }
  });

  test('has default configuration when theme object is empty', async () => {
    const emptyConfig: any = {
      theme: {},
    };
    setConfig(emptyConfig);
    expect(config).toBeTruthy();
    expect(config[ConfigProperties.theme]).not.toEqual(emptyConfig.theme);
  });
});
