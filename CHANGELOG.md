# @4mbl/tsconfig Changelog

## 4.1.2

* Setup npm trusted publishing. No changes to the package itself.

## 4.1.1

* Fixed missing artifacts in the previous release.

## 4.1.0

* Add vite-react template.

## 4.0.1

* Move `baseUrl` definition from the base template to child templates to improve Next.js support.

## 4.0.0

* Migrated from versioned templates to a single template per type. The package version is now used to determine the template version. This simplifies both the maintenance and usage of the package.
* Enabled the following options in the base template:
  * `declarationMap`
  * `tsBuildInfoFile` set to `node_modules/.tmp/tsbuildinfo`
  * `verbatimModuleSyntax`
  * `allowSyntheticDefaultImports`
  * `noImplicitOverride`
* In the Next.js all paths now use paths relative to the project.
* Removed `tsBuildInfoFile` from browser template in favor of the base template value.

## 3.0.0

* Enabled `erasableSyntaxOnly` option in the base template. Requires TypeScript 5.8.0+.

## 2.0.0

* Changed path options to use `${configDir}` instead of relative paths in base template. Requires TypeScript 5.5.0+.

## 1.0.0

* Initial release
