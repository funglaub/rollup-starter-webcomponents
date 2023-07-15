## Using import maps

Let's skip `--node-resolve` so `lit` will not be in our bundle and use an import map to resolve this dependency:

```html
<!-- demo/index.html -->

<html>
  <script type="importmap">
    {
      "imports": {
        "lit": "https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js"
      }
    }
  </script>
  <script type="module" src="../main.js"></script>
  <body>
    <my-component></my-component>
  </body>
</html>
```

`npm i --save-dev @web/dev-server-import-maps`

Update config:

```js
import { fromRollup } from '@web/dev-server-rollup';
import rollupCss from "rollup-plugin-import-css";
import { importMapsPlugin } from '@web/dev-server-import-maps';

const css = fromRollup(rollupCss);

export default {
  open: true,
  nodeResolve: false,
  appIndex: 'demo/index.html',
  plugins: [css(), importMapsPlugin()],
  mimeTypes: {
    // serve .css files as js
    '**/*.css': 'js',
  },
};
```
