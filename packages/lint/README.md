# @4mbl/lint

> Linting configuration for various environments.

* [Usage](#usage)
* [Available templates](#available-templates)
* [Versioning](#versioning)

---

## Usage

Install the [`@4mbl/lint`](https://www.npmjs.com/package/@4mbl/lint) package.

```shell
npm install -D @4mbl/lint
```

Create a `eslint.config.ts` file in the root of your project with the desired configuration. This package currently uses eslint. That might change in a future major release.

```js
import defaultConfig, { defineConfig } from '@4mbl/lint/next'; // <-- change `next` to the desired template

export default defineConfig([...defaultConfig]);
```

Set a script that uses the linting package.

```shell
npm pkg set scripts.lint="eslint src"
```

You may need to explicitly allow the underlying linting packages to be used by your scripts.

For example, when using pnpm, you need to set `publicHoistPattern` in your `pnpm-workspace.yaml` for ESLint.

```yaml
publicHoistPattern:
  - eslint
```

## Available templates

These are the currently available config templates.

- **Next** - Extending the Next.js linting config.
- **Node** - Linting configuration for Node.js.
- **React** - Extending the Vite-React linting config.

## Versioning

_Until v1.0.0 is released, breaking changes may be introduced in minor releases without prior warnings._

The package follows the following versioning scheme: `X.Y.Z`.

- `X` - Reserved for linting provider changes as those might cause wider backwards compatibility issues.
- `Y` - New linting rules. New rules are first added as warnings, and if error is preferred, the rule is promoted to produce errors in the next minor release.
- `Z` - Minor fixes that make the previous release unusable.
