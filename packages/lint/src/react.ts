import { defineConfig } from 'oxlint';
import base from './base.ts';

export type ReactOptions = {};

// const DEFAULT_OPTIONS: ReactOptions = {};

export default function (_options?: Partial<ReactOptions>) {
  // const opts = { ...DEFAULT_OPTIONS, ...options };

  return defineConfig({
    extends: [base()],
    plugins: ['react'],
    jsPlugins: [
      { name: 'react-hooks-js', specifier: 'eslint-plugin-react-hooks' },
      { name: 'react-refresh-js', specifier: 'eslint-plugin-react-refresh' },
      { name: 'react-compiler-js', specifier: 'eslint-plugin-react-compiler' },
    ],
    rules: {
      'react-hooks-js/rules-of-hooks': 'error',
      'react-hooks-js/exhaustive-deps': 'warn',
      'react-hooks-js/set-state-in-effect': 'warn',
      'react-refresh-js/only-export-components': 'error',
      'react-compiler-js/react-compiler': 'error',
    },
    overrides: [
      {
        files: ['**/*.{js,jsx,mjs,ts,tsx,mts,cts}'],
        rules: {
          'react/display-name': 'error',
          'react/jsx-key': 'error',
          'react/jsx-no-comment-textnodes': 'error',
          'react/jsx-no-duplicate-props': 'error',
          'react/jsx-no-target-blank': 'off',
          'react/jsx-no-undef': 'error',
          'react/no-children-prop': 'error',
          'react/no-danger-with-children': 'error',
          // "react/no-deprecated": "error", // not implemented yet in oxlint
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
          'import/no-anonymous-default-export': 'warn',
          'jsx-a11y/alt-text': ['warn', { elements: ['img'], img: ['Image'] }],
          'jsx-a11y/aria-props': 'warn',
          'jsx-a11y/aria-proptypes': 'warn',
          'jsx-a11y/aria-unsupported-elements': 'warn',
          'jsx-a11y/role-has-required-aria-props': 'warn',
          'jsx-a11y/role-supports-aria-props': 'warn',
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
        plugins: ['import', 'jsx-a11y'],
        env: {
          browser: true,
          node: true,
        },
      },
    ],
  });
}
