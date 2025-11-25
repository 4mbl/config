import js from '@eslint/js';
import { defineConfig, globalIgnores, type Config } from 'eslint/config';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export { Config, defineConfig };

export default defineConfig([
  globalIgnores(['dist/**']),
  { files: ['**/*.{js,mjs,cjs,ts}'] },
  { languageOptions: { globals: globals.node } },
  js.configs.recommended,
  ...tseslint.configs.recommended,
]) satisfies Config[];
