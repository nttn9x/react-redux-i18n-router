## [Home](../README.md) / Absolute Imports

You can configure your application to support importing modules using absolute paths. This can be done by configuring a `jsconfig.json` or `tsconfig.json` file in the root of your project. If you're using TypeScript in your project, you will already have a `tsconfig.json` file.

Below is an example `jsconfig.json` file for a JavaScript project. You can create the file if it doesn't already exist:

```json
{
  "compilerOptions": {
    "baseUrl": "src"
  },
  "include": ["src"]
}
```

If you're using TypeScript, you can configure the `baseUrl` setting inside the `compilerOptions` of your project's `tsconfig.json` file.

Now that you've configured your project to support absolute imports, if you want to import a module located at `src/components/Button.js`, you can import the module like so:

```js
import Button from 'components/Button';
```

For more information on these configuration files, see the [jsconfig.json reference](https://code.visualstudio.com/docs/languages/jsconfig) and [tsconfig.json reference](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html) documentation.
