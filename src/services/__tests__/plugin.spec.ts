import { setConfig, config, Config } from '../plugin';

describe('Options: Config Util: ', () => {
  test('Sets the Options', async () => {
    const appConfig: Config = {
      theme: {
        colors: {
          ['primary-500']: '#0f0',
        },
      },
    };
    setConfig(appConfig);
    expect(config).toEqual(appConfig);
  });
  test('should not set if invalid Options are passed and error is thrown', async () => {
    const invalidConfig: any = {
      style: {
        colors: {
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

  test('has default configuration when options are empty', async () => {
    const emptyConfig: any = {};
    setConfig(emptyConfig);
    expect(config).toBeTruthy();
    expect(config).not.toEqual(emptyConfig);
  });
});
