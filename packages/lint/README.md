# @4mbl/lint

> Linting configuration for various environments.

- [Installation](#installation)
- [Usage](#usage)
  - [Using `lint` CLI](#using-lint-cli)
    - [Setting up the `lint` CLI](#setting-up-the-lint-cli)
    - [Choosing presets](#choosing-presets)
    - [Beyond presets](#beyond-presets)
    - [CLI default arguments](#cli-default-arguments)
  - [Using `oxlint` directly](#using-oxlint-directly)
    - [Oxlint CLI](#oxlint-cli)
    - [Configuring oxlint](#configuring-oxlint)
- [Available presets](#available-presets)
- [Versioning](#versioning)

---

> [!NOTE]
> This package currently uses [oxlint](https://www.npmjs.com/package/oxlint) as the underlying linting tool. This may change in a future major release.

## Installation

Install the [`@4mbl/lint`](https://www.npmjs.com/package/@4mbl/lint) package.

```shell
npm install -D @4mbl/lint
```

## Usage

This package supports two ways of running the linting tool.

### Using `lint` CLI

Using the provided `lint` CLI is the recommended approach, as it abstracts away the underlying linting tool and allows it to be changed in the future with minimal impact on consumers.

While we aim to keep the CLI stable across tooling changes, some breaking changes may be unavoidable if the underlying tool changes.

#### Setting up the `lint` CLI

To use the provided CLI, simply call `lint` in your scripts.

```shell
npm pkg set scripts.lint="lint"
```

#### Choosing presets

The CLI uses the environment-agnostic `base` preset by default. To use a different preset, pass the `--preset` argument with the preset name.

```shell
npm pkg set scripts.lint="lint --preset node"
```

_See the [available presets](#available-presets) section for a list of available presets._

#### Beyond presets

In some cases, the provided presets may not be sufficient for your use case. You can create an `oxlint.config.ts` file and pass it to the oxlint CLI directly.

```shell
npm pkg set scripts.lint="lint -- --config oxlint.config.ts"
```

You can use the provided presets as a base for your custom configuration, as shown in the [Configuring oxlint](#configuring-oxlint) section.

#### CLI default arguments

By default, the CLI targets the `src` directory and uses the following oxlint arguments:

- `--max-warnings=0`
- `--report-unused-disable-directives`

You can override these arguments or pass additional arguments to the underlying oxlint tool.

```shell
npm pkg set scripts.lint="lint -- --max-warnings=10 --fix"
```

### Using `oxlint` directly

For full control over the linting setup, you can use oxlint directly.

#### Oxlint CLI

Set the `lint` script in your `package.json` to use the `oxlint` binary.

```shell
npm pkg set scripts.lint="oxlint src"
```

You may need to explicitly allow the underlying linting packages to be used by your scripts.

For example, when using pnpm, set `publicHoistPattern` in your `pnpm-workspace.yaml`.

#### Configuring oxlint

Create an `oxlint.config.ts` file in your package with the desired preset.

```js
import nodeConfig from '@4mbl/lint/node';

export default nodeConfig();
```

Some presets may accept additional options. For example, the `next` preset accepts a `uiPath` option.

_See the [available presets](#available-presets) section for a list of available presets._

```yaml
publicHoistPattern:
  - oxlint
```

## Available presets

The following presets are currently available:

- **Base** – Environment-agnostic linting rules.
- **Next** – Additional linting rules for Next.js.
- **Node** – Additional linting rules for Node.js.
- **React** – Additional linting rules for React.

## Versioning

The package follows the versioning scheme `X.Y.Z`:

- `X` – Reserved for linting provider changes, as these may introduce broader compatibility issues.
- `Y` – New linting rules. Rules are initially introduced as warnings and may be promoted to errors in a subsequent minor release.
- `Z` – Fixes for issues that made the previous release unusable.
