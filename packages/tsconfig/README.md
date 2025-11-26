# @4mbl/tsconfig

> Strict TypeScript configuration for various environments.

* [Usage](#usage)
* [Available templates](#available-templates)
  * [Base (tsconfig)](#base-tsconfig)
  * [Node (tsconfig)](#node-tsconfig)
  * [Node-TS (tsconfig)](#node-ts-tsconfig)
  * [Browser (tsconfig)](#browser-tsconfig)
  * [Next (tsconfig)](#next-tsconfig)
  * [Vite React (app | node)](#vite-react-app--node)
* [Versioning](#versioning)

---

## Usage

Install the [`@4mbl/tsconfig`](https://www.npmjs.com/package/@4mbl/tsconfig) npm package.

```shell
npm install -D @4mbl/tsconfig
```

Create a `tsconfig.json` file in the root of your project and extend the desired `tsconfig` template.

```jsonc
{
  "extends": "@4mbl/tsconfig/node"
  // your custom configuration...
}
```

## Available templates

These are the currently available `tsconfig` templates.

### Base (<kbd>[tsconfig](https://unpkg.com/@4mbl/tsconfig@latest/base.json)</kbd>)

This is the base `tsconfig` file that is used by the other templates. It contains common configuration for TypeScript with minimal environment specific configuration.

### Node (<kbd>[tsconfig](https://unpkg.com/@4mbl/tsconfig@latest/node.json)</kbd>)

Extends the base template with configuration specific to Node.js.

### Node-TS (<kbd>[tsconfig](https://unpkg.com/@4mbl/tsconfig@latest/node-ts.json)</kbd>)

Extends the node template with configuration for TypeScript-only projects.

### Browser (<kbd>[tsconfig](https://unpkg.com/@4mbl/tsconfig@latest/browser.json)</kbd>)

Extends the base template with configuration specific to browser and React applications.

### Next (<kbd>[tsconfig](https://unpkg.com/@4mbl/tsconfig@latest/next.json)</kbd>)

Extends the base template with configuration from the Next.js app template.

[Next.js does not yet support tsconfig template variables](https://github.com/vercel/next.js/issues/70912), so you need to override the paths manually on the `tsconfig.json` file of your project.

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

### Vite React (<kbd>[app](https://unpkg.com/@4mbl/tsconfig@latest/vite-react/app.json)</kbd> | <kbd>[node](https://unpkg.com/@4mbl/tsconfig@latest/vite-react/node.json)</kbd>)

Extends the base template with configuration from Vite's `react-ts` preset.

Vite uses seperate `tsconfig` files for the application and the node environment. So you need to have three files in total:

**`tsconfig.json`**

```jsonc
{
  "files": [],
  "references": [
    { "path": "./tsconfig.app.json" },
    { "path": "./tsconfig.node.json" }
  ]
}
```

**`tsconfig.app.json`**

```jsonc
{
  "extends": "@4mbl/tsconfig/vite-react/app"
}
```

**`tsconfig.node.json`**

```jsonc
{
  "extends": "@4mbl/tsconfig/vite-react/node"
}
```

## Versioning

As of version 4.0.0, the package migrated to a single template per type. The package version is now used to determine the template version. This simplifies both the maintenance and usage of the package.

The package follows the following versioning scheme: `X.Y.Z`

- `X` - Breaking changes to the base template.
- `Y` - Breaking changes to individual, non-base templates. New templates may be introduced.
- `Z` - Minor fixes to any template.
