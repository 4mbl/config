import { defineConfig, type OxlintConfig } from 'oxlint';
import { baseConfig } from './base.js';

type NodeOptions = {};

// const DEFAULT_OPTIONS: NodeOptions = {};

function nodeConfig(_options?: Partial<NodeOptions>) {
  // const opts = { ...DEFAULT_OPTIONS, ...options };

  return defineConfig({
    extends: [baseConfig()],
    env: {
      node: true,
    },
  });
}

export { type OxlintConfig, defineConfig, nodeConfig };
