
## Dev server

Let's create a demo page:

```html
<!-- demo/index.html -->
<html>
  <script type="module" src="../main.js"></script>
  <body>
    <my-component></my-component>
  </body>
</html>

```

```
npm i --save-dev @web/dev-server
npx web-dev-server --node-resolve --open demo/ --watch
```

Use rollup plugins:

`npm i --save-dev @web/dev-server-rollup`

Create a minimal config `web-dev-server.config.mjs`:


```js
// web-dev-server.config.mjs

import { fromRollup } from '@web/dev-server-rollup';
import rollupCss from "rollup-plugin-import-css";

const css = fromRollup(rollupCss);

export default {
  open: true,
  nodeResolve: true,
  appIndex: 'demo/index.html',
  plugins: [css()],
  mimeTypes: {
    // serve .css files as js
    '**/*.css': 'js',
  },
};
```

`npx web-dev-server --node-resolve --open demo/`
