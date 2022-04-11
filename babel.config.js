module.exports = {
  plugins: [
    '@vue/babel-plugin-jsx',
    [
      '@babel/plugin-proposal-private-property-in-object',
      {
        loose: true,
      },
    ],
  ],
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
    '@babel/preset-typescript',
  ],
};
