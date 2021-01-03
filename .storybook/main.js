const custom = require('../webpack.config.js');

module.exports = {
  // "stories": [
  //   "../stories/**/*.stories.mdx",
  //   "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  // ],
  stories: ['../src/**/*.stories.[tj]s'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-controls',
  ],
  webpackFinal: (config) => {
    return {
      ...config,
      resolve: {alias: {...config.resolve.alias, ...custom.resolve.alias}},
      module: {...config.module, rules: custom.module.rules},
    };
  },
};
