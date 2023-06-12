import type { StorybookConfig } from '@storybook/nextjs';
const path = require('path');
const process = require('process');
const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@chakra-ui/storybook-addon',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  // config webpack
  webpackFinal: async (config: any, { configType }) => {
    (config.resolve.alias['@'] = path.resolve(__dirname)),
      config.resolve.modules.push(process.cwd() + '/node_modules'),
      config.resolve.modules.push(process.cwd() + '/src'),
      // this is needed for working w/ linked folders
      (config.resolve.symlinks = false),
      (config.resolve = {
        ...config.resolve,
        fallback: {
          ...(config.resolve || {}).fallback,
          fs: false,
          stream: false,
          os: false,
        },
      });

    // Return the altered config
    return config;
  },
};
export default config;
