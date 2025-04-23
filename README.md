# @4mbl/tsconfig

> TypeScript configuration templates for various environments.

## Usage

Install the [`@4mbl/tsconfig`](https://www.npmjs.com/package/@4mbl/tsconfig) npm package.

```shell
npm install -D @4mbl/tsconfig
```

Create a `tsconfig.json` file in the root of your project and extend the desired `tsconfig` template.

```jsonc
{
  "extends": "@4mbl/tsconfig/node"
  /* your custom settings */
}
```

## Available templates

There are currently four `tsconfig` templates.

### Base <kbd>[tsconfig](https://unpkg.com/@4mbl/tsconfig@latest/base.json)</kbd>

This is the base `tsconfig` file that is used by the other templates. It contains common configuration for TypeScript with minimal environment specific settings.

### Node <kbd>[tsconfig](https://unpkg.com/@4mbl/tsconfig@latest/node.json)</kbd>

Extends the base template with settings specific to Node.js.

### Browser <kbd>[tsconfig](https://unpkg.com/@4mbl/tsconfig@latest/browser.json)</kbd>

Extends the base template with settings specific to browser and React applications.

### Next <kbd>[tsconfig](https://unpkg.com/@4mbl/tsconfig@latest/next.json)</kbd>

Extends the base template with settings from the Next.js app template.

Next.js does not yet support tsconfig template variables, so you need to set the paths settings manually.

```jsonc
{
  "extends": "@4mbl/tsconfig/next",
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

## Versioning

As of version 4.0.0, the package migrated to a single template per type. The package version is now used to determine the template version. This simplifies both the maintenance and usage of the package.

The package follows the following versioning scheme: `X.Y.Z`

* `X` - Breaking changes to the base template.
* `Y` - Breaking changes to individual, non-base templates.
* `Z` - Minor fixes to any template.
