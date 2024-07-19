# @4mbl/tsconfig

> Templates for `tsconfig` files for various environments.

## Usage

Install the [`@4mbl/tsconfig`](https://www.npmjs.com/package/@4mbl/tsconfig) npm package.

```shell
npm install -D @4mbl/tsconfig
```

Create a `tsconfig.json` file in the root of your project and extend the desired `tsconfig` template.

```jsonc
{
  "extends": "@4mbl/tsconfig/node/latest"
  /* your custom settings */
}
```

## Available templates

There are currently three `tsconfig` templates.

### Base <kbd>[tsconfig](./base/latest.json) | [changelog](./base/CHANGELOG.md)</kbd>

This is the base `tsconfig` file that is used by the other templates. It contains the basic configuration for TypeScript without any environment specific settings.

### Node <kbd>[tsconfig](./node/latest.json) | [changelog](./node/CHANGELOG.md)</kbd>

Extends the base template and adds settings specific to Node.js.

### Browser <kbd>[tsconfig](./browser/latest.json) | [changelog](./browser/CHANGELOG.md)</kbd>

Extends the base template and adds settings specific to browser and React applications.

## Versioning

The package and each template are versioned separately. Seperate versioning allows you to update the package without worrying about breaking changes to the templates. It also allows you to easily test newer versions of the templates by just changing the `extends` field in the `tsconfig` file of your project.

### Package versioning

The package itself follows the following versioning scheme: `major.minor.patch`

* `major` - Base template is changed and older template versions may be removed.
* `minor` - Non-base template is changed or added.
* `patch` - Non-breaking changes to the templates.

If you are extending a specific version of a template in your project, you can update the package without worrying about any breaking changes to your project.

### Template versioning

Each template is versioned separately. The versioning scheme is: `major.minor.patch`

* `major` - Major overhaul of the template. Major changes to upstream templates warrant a major version on the inheriting templates.
* `minor` - Breaking changes to the template.
* `patch` - Non-breaking changes to the template.

Each template also has a `latest` version. However, it is not recommended to extend the `latest` version in your project as it may introduce breaking changes when the package is updated.
