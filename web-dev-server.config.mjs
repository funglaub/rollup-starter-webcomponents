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
