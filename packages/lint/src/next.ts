import path from 'node:path';
import process from 'node:process';
import { defineConfig, type OxlintConfig } from 'oxlint';
import { type ReactOptions, reactConfig } from './react.js';
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

function nextConfig(options?: Partial<NextOptions>) {
  const opts = { ...DEFAULT_OPTIONS, ...options };

  return defineConfig({
    extends: [reactConfig(options)],
    plugins: ['nextjs'],
    rules: {
      'nextjs/google-font-display': 'warn',
      'nextjs/google-font-preconnect': 'warn',
      'nextjs/next-script-for-ga': 'warn',
      'nextjs/no-async-client-component': 'warn',
      'nextjs/no-before-interactive-script-outside-document': 'warn',
      'nextjs/no-css-tags': 'warn',
      'nextjs/no-head-element': 'warn',
      'nextjs/no-html-link-for-pages': 'error',
      'nextjs/no-page-custom-font': 'warn',
      'nextjs/no-styled-jsx-in-document': 'warn',
      'nextjs/no-sync-scripts': 'error',
      'nextjs/no-title-in-document-head': 'warn',
      'nextjs/no-typos': 'warn',
      'nextjs/no-unwanted-polyfillio': 'warn',
      'nextjs/inline-script-id': 'error',
      'nextjs/no-assign-module-variable': 'error',
      'nextjs/no-document-import-in-page': 'error',
      'nextjs/no-duplicate-head': 'error',
      'nextjs/no-head-import-in-document': 'error',
      'nextjs/no-script-component-in-head': 'error',

      // ignores warnings for special exports in page and layout files
      // https://github.com/ArnaudBarre/eslint-plugin-react-refresh?tab=readme-ov-file#next-config
      'react/only-export-components': [
        'warn',
        {
          allowExportNames: (reactRefresh.configs.next.rules as any)[
            'react-refresh/only-export-components'
          ][1]['allowExportNames'],
        },
      ],
    },
    ignorePatterns: ['.next/**', 'out/**', 'build/**', 'next-env.d.ts'],
    overrides: [
      opts.uiPath === null
        ? { files: [], rules: {} }
        : {
            files: [
              `${path.resolve(process.cwd(), opts.uiPath)}/**/*.{js,jsx,mjs,ts,tsx,mts,cts}`.replaceAll(
                '//',
                '/',
              ),
            ],
            rules: {
              'react/only-export-components': 'off',
            },
          },
    ],
  });
}

export { type OxlintConfig, defineConfig, nextConfig };

export default nextConfig();
