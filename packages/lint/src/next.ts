// @ts-nocheck
import js from '@eslint/js';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import * as reactCompiler from 'eslint-plugin-react-compiler';
import { defineConfig, globalIgnores, Config } from 'eslint/config';
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
  globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts']),
  reactCompiler.configs.recommended,
  {
    rules: {
      'react-compiler/react-compiler': 'error',
    },
  },
]) satisfies Config[];
