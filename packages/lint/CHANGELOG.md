# @4mbl/lint

## 1.0.0-beta.12

### Minor Changes

- aee0259: Upgrade dependencies

## 1.0.0-beta.11

### Minor Changes

- 20b3dae: Use native rules for React when possible

## 1.0.0-beta.10

### Minor Changes

- 007a287: Configure more rules to reduce noise
- 007a287: Use native only-export-components rule instead of js plugin
- 007a287: Use correct namespace for Next.js rules

## 1.0.0-beta.9

### Minor Changes

- 491164e: Add --help flag to cli
- 491164e: Fallback to Oxlint config lookup if no preset is passed to CLI and Oxlint config exists within working directory.

## 1.0.0-beta.8

### Minor Changes

- a78f42b: Configure rules to reduce noise

## 1.0.0-beta.7

### Minor Changes

- 7c82f22: Upgrade dependencies

## 1.0.0-beta.6

### Minor Changes

- 0422e86: Upgrade dependencies

## 1.0.0-beta.5

### Minor Changes

- 125b851: Enable most rule categories
- 473bad0: Upgrade dependencies

## 1.0.0-beta.4

### Minor Changes

- 10abc93: Upgrade dependencies

## 1.0.0-beta.3

### Minor Changes

- dd91a0d: Allow direct preset usage with default exports
- dd91a0d: Add `--preset` argument to use any preset directly from the CLI

### Patch Changes

- 51c5a6a: Resolve uiPath from cwd in next preset

## 1.0.0-beta.2

### Minor Changes

- ba4500a: Use named exports for config templates
- ba4500a: Re-export oxlint defineConfig

### Patch Changes

- 2b77e08: Transpile configs to support usage from node_modules

## 1.0.0-beta.1

### Patch Changes

- 2c338b1: Re-export `OxlintConfig` to make config portable

## 1.0.0-beta.0

### Major Changes

- c65e34e: Add CLI to allow default arguments and easier tool migration in the future
- c65e34e: Migrate from eslint to oxlint

## 0.16.0

### Minor Changes

- 6878a35: Upgrade config dependencies

## 0.15.0

### Minor Changes

- 5040323: Upgrade config dependencies

## 0.14.0

### Minor Changes

- 794dbfb: Upgrade config dependencies
- e6a08fd: Upgrade to ESLint 10

## 0.13.0

### Minor Changes

- ac23f1d: Upgrade config dependencies

## 0.12.0

### Minor Changes

- dd16619: Upgrade config dependencies

## 0.11.0

### Minor Changes

- e011cd6: Upgrade config dependencies

## 0.10.0

### Minor Changes

- 774cb2a: Upgrade config dependencies

## 0.9.0

### Minor Changes

- aee78b7: Upgrade config dependencies

## 0.8.0

### Minor Changes

- 152396b: Upgrade config dependencies

## 0.7.0

### Minor Changes

- 8e46d6b: Upgrade config dependencies

### Patch Changes

- 8e46d6b: Re-export types with type-keyword to fix verbatimModuleSyntax

## 0.6.0

### Minor Changes

- 46d0443: Upgrade config dependencies

## 0.5.0

### Minor Changes

- 55c3db6: Export `defineConfig` from eslint
- f7d30bb: Upgrade config dependencies

## 0.4.0

### Minor Changes

- 00cfefd: Add node template

## 0.3.2

### Patch Changes

- df1c48b: Re-export eslint Config type from react template

## 0.3.1

### Patch Changes

- d17fc69: Fix react template export

## 0.3.0

### Minor Changes

- 6d969e6: Add react template
- 6d969e6: Upgrade eslint and config dependencies

## 0.2.1

### Patch Changes

- 3a223fe: Use flat config version of eslint-plugin-react-hooks

## 0.2.0

### Minor Changes

- c4e49f3: Add eslint-plugin-react-hooks
- c4e49f3: Add eslint-config-prettier

## 0.1.1

### Patch Changes

- 2c91355: Move dependencies not to be dev-only

## 0.1.0

### Minor Changes

- 66bbf26: Initial release
