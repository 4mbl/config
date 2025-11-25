import js from '@eslint/js';
import prettier from 'eslint-config-prettier/flat';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import { defineConfig, globalIgnores, type Config } from 'eslint/config';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export { Config, defineConfig };

export default defineConfig([
  js.configs.recommended,
  tseslint.configs.recommended,

  reactHooks.configs.flat.recommended,
  reactRefresh.configs.recommended,

  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    rules: {
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },

  prettier,
]) satisfies Config[];
