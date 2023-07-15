## Treating external dependencies

Rollup does not bundle external dependencies.

Use case: share dependencies by CDN and [import maps](https://github.com/WICG/import-maps)


### Bundling dependencies from `node_modules`

```
npm i @rollup/plugin-node-resolve --save-dev
npx rollup main.js -p node-resolve
```
