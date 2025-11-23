// @ts-nocheck
import js from '@eslint/js';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import prettier from 'eslint-config-prettier/flat';
import * as reactCompiler from 'eslint-plugin-react-compiler';
import reactHooks from 'eslint-plugin-react-hooks';
import { Config, defineConfig, globalIgnores } from 'eslint/config';
import tseslint from 'typescript-eslint';

export { Config };

export default defineConfig([
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    languageOptions: {
      parserOptions: {
        tsconfigRootDir: (import.meta as any).dirname,
      },
    },
  },
  ...nextVitals,
  ...nextTs,
  reactHooks.configs.flat.recommended,
  reactCompiler.configs.recommended,
  {
    rules: {
      'react-compiler/react-compiler': 'error',
    },
  },
  prettier,
  globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts']),
]) satisfies Config[];
