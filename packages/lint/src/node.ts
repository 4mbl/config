import { defineConfig, type OxlintConfig } from 'oxlint';
import { baseConfig } from './base.js';

type NodeOptions = {};

// const DEFAULT_OPTIONS: NodeOptions = {};

function nodeConfig(options?: Partial<NodeOptions>) {
  // const opts = { ...DEFAULT_OPTIONS, ...options };

  const base = baseConfig(options);

  return defineConfig({
    extends: [base],
    // when changing plugins the parent plugins need to be extended, otherwise they are overridden
    plugins: base.plugins,
    env: {
      node: true,
    },
  });
}

export { type OxlintConfig, defineConfig, nodeConfig };

export default nodeConfig();
