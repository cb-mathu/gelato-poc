import Layout from '../src/storybook/StoryLayout';
import CUSTOM_VIEWPORTS from './config/viewport';

const tokenContext = require.context('!!raw-loader!../.storybook', true, /.\.(css|less|scss|svg)$/);

const tokenFiles = tokenContext.keys().map(function (filename) {
  return { filename: filename, content: tokenContext(filename).default };
});

export const decorators = [
  (storyFn) => {
    return <Layout>{storyFn().render()}</Layout>;
  },
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  designToken: {
    defaultTab: 'Colors',
    files: tokenFiles,
  },
  viewport: {
    viewports: CUSTOM_VIEWPORTS,
    defaultViewport: 'md',
  },
};
