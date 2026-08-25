import { defineConfig, type OxlintConfig } from 'oxlint';
import { baseConfig } from './base.js';
import { extendConfig } from './config.js';

export type ReactOptions = {};

// const DEFAULT_OPTIONS: ReactOptions = {};

function reactConfig(options?: Partial<ReactOptions>) {
  // const opts = { ...DEFAULT_OPTIONS, ...options };

  const base = baseConfig(options);

  return extendConfig(base, {
    plugins: ['react', 'jsx-a11y'],
    jsPlugins: [],
    env: {
      browser: true,
      node: true,
    },
    globals: {
      AudioWorkletGlobalScope: 'readonly',
      AudioWorkletProcessor: 'readonly',
      currentFrame: 'readonly',
      currentTime: 'readonly',
      registerProcessor: 'readonly',
      sampleRate: 'readonly',
      WorkletGlobalScope: 'readonly',
    },
    rules: {
      'react/rules-of-hooks': 'error',
      'react/exhaustive-deps': 'warn',

      // react compiler rules
      'react/error-boundaries': 'error',
      'react/globals': 'error',
      'react/immutability': 'error',
      'react/incompatible-library': 'error',
      'react/preserve-manual-memoization': 'error',
      'react/purity': 'error',
      'react/refs': 'error',
      'react/set-state-in-effect': 'error',
      'react/set-state-in-render': 'error',
      'react/static-components': 'error',
      'react/use-memo': 'error',
      'react/void-use-memo': 'error',
      'react/capitalized-calls': 'error',
      'react/exhaustive-effect-dependencies': 'error',
      'react/hooks': 'error',
      'react/memo-dependencies': 'error',
      'react/no-deriving-state-in-effects': 'error',
      'react/invariant': 'error',
      'react/rule-suppression': 'error',
      'react/syntax': 'error',
      'react/todo': 'error',
      'react/unsupported-syntax': 'error',

      'react/only-export-components': 'error',
      'import/no-anonymous-default-export': 'warn',
      'react/jsx-filename-extension': 'off',
      'react/jsx-max-depth': 'off',
      'react/no-multi-comp': 'off',
      'react/jsx-props-no-spreading': 'off',
      'react/jsx-no-literals': 'off',

      // conflicts with tailwind
      'react/forbid-component-props': 'off',
      'react/forbid-dom-props': 'off',
    },
    overrides: [
      {
        files: ['**/*.{jsx,tsx}'],
        rules: {
          'react/display-name': 'error',
          'react/jsx-key': 'error',
          'react/jsx-no-comment-textnodes': 'error',
          'react/jsx-no-duplicate-props': 'error',
          'react/jsx-no-target-blank': 'off',
          'react/jsx-no-undef': 'error',
          'react/no-children-prop': 'error',
          'react/no-danger-with-children': 'error',
          'react/no-direct-mutation-state': 'error',
          'react/no-find-dom-node': 'error',
          'react/no-is-mounted': 'error',
          'react/no-render-return-value': 'error',
          'react/no-string-refs': 'error',
          'react/no-unescaped-entities': 'error',
          'react/no-unknown-property': 'off',
          'react/no-unsafe': 'off',
          'react/react-in-jsx-scope': 'off',
          'react/require-render-return': 'error',
          'jsx-a11y/alt-text': ['warn', { elements: ['img'], img: ['Image'] }],
          'jsx-a11y/aria-props': 'warn',
          'jsx-a11y/aria-proptypes': 'warn',
          'jsx-a11y/aria-unsupported-elements': 'warn',
          'jsx-a11y/role-has-required-aria-props': 'warn',
          'jsx-a11y/role-supports-aria-props': 'warn',
        },
      },
    ],
  });
}

export { type OxlintConfig, defineConfig, reactConfig };

export default reactConfig();
