# @4mbl/lint

> Linting configuration for various environments.

* [Usage](#usage)
* [Available templates](#available-templates)
* [Versioning](#versioning)

---

## Usage

Install the [`@4mbl/lint`](https://www.npmjs.com/package/@4mbl/lint) npm package.

```shell
npm install -D @4mbl/lint
```

Create a `eslint.config.ts` file in the root of your project with the desired configuration. This package currently uses eslint. That might change in a future major release.

```js
import defaultConfig, { type Config } from '@4mbl/lint/next'; // <-- change `next` to the desired template

export default [...defaultConfig] satisfies Config[];
```

## Available templates

There is currently one config template.

- **Next** - Linting configuration extending the Next.js default config.

## Versioning

**Until v1.0.0 is released, breaking changes may be introduced in minor releases without prior warnings.**

The package follows the following versioning scheme: `X.Y.Z`.

- `X` - Reserved for linting provider changes as those might cause wider backwards compatibility issues.
- `Y` - New linting rules. New rules are first added as warnings, and if error is preferred, the rule is promoted to produce errors in the next minor release.
- `Z` - Minor fixes that make the previous release unusable.
