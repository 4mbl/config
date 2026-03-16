import { defineConfig } from 'oxlint';
import react, { type ReactOptions } from './react.ts';
import reactRefresh from 'eslint-plugin-react-refresh';

type NextOptions = ReactOptions & {
  /**
   * Sets the parent directory of UI components to ignore them in react-refresh.
   * This allows multiple exports from the same file, which is common when using libraries like class-variance-authority.
   *
   * Set to `null` to disable react-refresh suppression for UI components.
   *
   * Defaults to `src/components/ui/`.
   */
  uiPath: string | null;
};

const DEFAULT_OPTIONS: NextOptions = { uiPath: 'src/components/ui/' };

export default function (options?: Partial<NextOptions>) {
  const opts = { ...DEFAULT_OPTIONS, ...options };

  return defineConfig({
    extends: [react(options)],
    plugins: ['nextjs'],
    rules: {
      '@next/next/google-font-display': 'warn',
      '@next/next/google-font-preconnect': 'warn',
      '@next/next/next-script-for-ga': 'warn',
      '@next/next/no-async-client-component': 'warn',
      '@next/next/no-before-interactive-script-outside-document': 'warn',
      '@next/next/no-css-tags': 'warn',
      '@next/next/no-head-element': 'warn',
      '@next/next/no-html-link-for-pages': 'error',
      '@next/next/no-page-custom-font': 'warn',
      '@next/next/no-styled-jsx-in-document': 'warn',
      '@next/next/no-sync-scripts': 'error',
      '@next/next/no-title-in-document-head': 'warn',
      '@next/next/no-typos': 'warn',
      '@next/next/no-unwanted-polyfillio': 'warn',
      '@next/next/inline-script-id': 'error',
      '@next/next/no-assign-module-variable': 'error',
      '@next/next/no-document-import-in-page': 'error',
      '@next/next/no-duplicate-head': 'error',
      '@next/next/no-head-import-in-document': 'error',
      '@next/next/no-script-component-in-head': 'error',
    },
    ignorePatterns: ['.next/**', 'out/**', 'build/**', 'next-env.d.ts'],
    overrides: [
      // ignores warnings for special exports in page and layout files
      // https://github.com/ArnaudBarre/eslint-plugin-react-refresh?tab=readme-ov-file#next-config
      {
        files: ['**/*.{js,jsx,mjs,ts,tsx,mts,cts}'],
        rules: {
          'react-refresh-js/only-export-components': [
            'error',
            {
              allowExportNames: (reactRefresh.configs.next.rules as any)[
                'react-refresh/only-export-components'
              ][1]['allowExportNames'],
            },
          ],
        },
      },
      opts.uiPath === null
        ? { files: [], rules: {} }
        : {
            files: [
              `${opts.uiPath}/**/*.{js,jsx,mjs,ts,tsx,mts,cts}`.replaceAll(
                '//',
                '/',
              ),
            ],
            rules: {
              'react-refresh-js/only-export-components': 'off',
            },
          },
    ],
  });
}
