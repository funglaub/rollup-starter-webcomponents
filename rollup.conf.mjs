import css from 'rollup-plugin-import-css';

// eslint-disable-next-line import/no-default-export
export default {
  input: './main.js',
  output: {
    dir: 'dist/',
    format: 'esm',
    chunkFileNames: '[name].js',
  },
  plugins: [
   css(),
  ],
};
