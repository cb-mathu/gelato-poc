const path = require('path');

module.exports = {
  stories: ['../src/components/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-essentials', 'storybook-design-token', '@storybook/addon-a11y'],
  webpackFinal: async (config, { configType }) => {
    // TSX
    config.module.rules.push({
      test: /\.tsx$/,
      use: [
        {
          loader: 'babel-loader',
        },
        {
          loader: 'ts-loader',
          options: {
            transpileOnly: true,
          },
        },
      ],
    });

    // // Remove out default scss
    config.module.rules = config.module.rules.filter((f) => {
      return f.test.toString() !== /\.s[ca]ss$/.toString();
    });

    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: [path.resolve(__dirname, '../src')],
    });

    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.join(__dirname, '..', 'src'),
    };

    return config;
  },
};
