# @4mbl/lint

> Linting configuration for various environments.

- [Usage](#usage)
  - [Running `lint` CLI wrapper](#running-lint-cli-wrapper)
  - [Running `oxlint` directly](#running-oxlint-directly)
- [Available templates](#available-templates)
- [Versioning](#versioning)

---

> [!NOTE]
> This package currently uses [oxlint](https://www.npmjs.com/package/oxlint) as the underlying linting tool. That may change in a future major release.

## Usage

Install the [`@4mbl/lint`](https://www.npmjs.com/package/@4mbl/lint) package.

```shell
npm install -D @4mbl/lint
```

Create a `oxlint.config.ts` file for your package. If you are using a monorepo, create a `oxlint.config.ts` for each package in the monorepo.

```js
import defineConfig from '@4mbl/lint/next'; // <-- change `next` to the desired template

export default defineConfig();
```

### Running `lint` CLI wrapper

This is the recommended way as it abstracts away the underlying linting package and allows us to change it in the future. While we try to keep the CLI wrapper interface stable between possible tooling changes, it is inevitable to have breaking changes if the underlying tooling changes.

Set a script that uses the linting CLI wrapper in your `package.json`. While it may be tempting to just call `lint` directly in CI or locally, it is recommended to use a script as it allows additional arguments to be passed to the CLI wrapper.

```shell
npm pkg set scripts.lint="lint"
```

The CLI wrapper uses the following default arguments:

- `--max-warnings=0`
- `--report-unused-disable-directives`

These arguments can be overridden by passing them explicitly to the CLI wrapper.

### Running `oxlint` directly

```shell
npm pkg set scripts.lint="oxlint src"
```

You may need to explicitly allow the underlying linting packages to be used by your scripts.

For example, when using pnpm, you need to set `publicHoistPattern` in your `pnpm-workspace.yaml`.

```yaml
publicHoistPattern:
  - oxlint
```

## Available templates

These are the currently available config templates.

- **Next** - Extending the Next.js linting config.
- **Node** - Linting configuration for Node.js.
- **React** - Extending the Vite-React linting config.

## Versioning

The package follows the following versioning scheme: `X.Y.Z`.

- `X` - Reserved for linting provider changes as those might cause wider backwards compatibility issues.
- `Y` - New linting rules. New rules are first added as warnings, and if error is preferred, the rule is promoted to produce errors in the next minor release.
- `Z` - Minor fixes that make the previous release unusable.
