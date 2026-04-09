# @4mbl/tsconfig Changelog

## 5.0.0-beta.0

### Major Changes

- e651e24: Enable `noUncheckedSideEffectImports` on all templates. This is the default in TypeScript 6/7, we set it explicitly to ensure consistent behavior for templates that already enabled it.
- e651e24: Disable automatic type discovery to align with TypeScript 6/7 behavior. Node.js types are now explicitly enabled for Node.js related templates.
- e651e24: All templates now have `rootDir` option set to './src' to align with TypeScript 6/7 behavior.
- e651e24: Drop explicit "dom.iterable" from `lib` as it is included in "dom" by default in TypeScript 6/7.
- e651e24: Remove explicit `target` from all templates to use the latest ECMAScript version in TypeScript 6/7. The ES version on `lib` is now "ESNext" all templates.

## 4.4.0

### Minor Changes

- 05ab9ba: [browser,node,node-ts] Replace `baseUrl` with `paths` catch-all to improve TypeScript 7 support.

## 4.3.0

### Minor Changes

- ce274df: node-ts: add rewriteRelativeImportExtensions

## 4.2.0

### Minor Changes

- 090f642: Add node-ts template.

## 4.1.3

### Patch Changes

- 0957212: Migrate to monorepo setup internally. No changes to the package itself.

## 4.1.2

- Setup npm trusted publishing. No changes to the package itself.

## 4.1.1

- Fixed missing artifacts in the previous release.

## 4.1.0

- Add vite-react template.

## 4.0.1

- Move `baseUrl` definition from the base template to child templates to improve Next.js support.

## 4.0.0

- Migrated from versioned templates to a single template per type. The package version is now used to determine the template version. This simplifies both the maintenance and usage of the package.
- Enabled the following options in the base template:
  - `declarationMap`
  - `tsBuildInfoFile` set to `node_modules/.tmp/tsbuildinfo`
  - `verbatimModuleSyntax`
  - `allowSyntheticDefaultImports`
  - `noImplicitOverride`
- In the Next.js all paths now use paths relative to the project.
- Removed `tsBuildInfoFile` from browser template in favor of the base template value.

## 3.0.0

- Enabled `erasableSyntaxOnly` option in the base template. Requires TypeScript 5.8.0+.

## 2.0.0

- Changed path options to use `${configDir}` instead of relative paths in base template. Requires TypeScript 5.5.0+.

## 1.0.0

- Initial release
