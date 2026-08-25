import { defineConfig, type OxlintConfig } from 'oxlint';
import { baseConfig } from './base.js';
import { extendConfig } from './config.js';

type NodeOptions = {};

// const DEFAULT_OPTIONS: NodeOptions = {};

function nodeConfig(options?: Partial<NodeOptions>) {
  // const opts = { ...DEFAULT_OPTIONS, ...options };

  const base = baseConfig(options);

  return extendConfig(base, {
    env: {
      node: true,
    },

    rules: {
      'eslint/no-underscore-dangle': [
        'warn',
        { allow: ['__dirname', '__filename'] },
      ],
      'no-nodejs-modules': 'off',
    },
  });
}

export { type OxlintConfig, defineConfig, nodeConfig };

export default nodeConfig();
