import { defineConfig, type OxlintConfig } from 'oxlint';

function extendConfig(
  parent: OxlintConfig,
  config: Omit<OxlintConfig, 'extends'>,
): OxlintConfig {
  return defineConfig({
    ...config,
    extends: [parent],
    categories: { ...parent.categories, ...config.categories },
    env: { ...parent.env, ...config.env },
    globals: { ...parent.globals, ...config.globals },
    ignorePatterns: [
      ...(parent.ignorePatterns ?? []),
      ...(config.ignorePatterns ?? []),
    ],
    jsPlugins: [
      ...(parent.jsPlugins ?? []),
      ...(config.jsPlugins ?? []),
    ],
    options: { ...parent.options, ...config.options },
    plugins: config.plugins ?? [],
    settings: { ...parent.settings, ...config.settings },
  });
}

export { extendConfig };
