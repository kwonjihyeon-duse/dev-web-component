import { mergeConfig } from 'vite';
import type { AddonOptionsVite } from '@storybook/addon-coverage';

const coverageConfig: AddonOptionsVite = {};

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    {
      name: '@storybook/addon-coverage',
      options: {
        istanbul: {
          include: ['**/stories/**'],
          // exclude: ['**/exampleDirectory/**'],
          excludeNodeModules: true,
        },
      },
    },
    '@storybook/addon-interactions',
  ],
  build: {
    test: {
      disabledAddons: ['@storybook/addon-essentials/docs'],
    },
  },

  framework: {
    name: '@storybook/web-components-vite',
    options: {},
  },
  async viteFinal(config) {
    // Merge custom configuration into the default config
    return mergeConfig(config, {
      // Add dependencies to pre-optimization
      optimizeDeps: {
        include: [...(config.optimizeDeps?.include ?? []), '@storybook/web-components'],
        exclude: [...(config.optimizeDeps?.exclude ?? []), 'lit', 'lit-html'],
      },
    });
  },

  docs: {
    autodocs: true,
  },
};
