## Dealing with CSS

```
npm i rollup-plugin-import-css --save-dev
```

* Default is to extract CSS into it's own asset.
* Not very helpfull for webcomponents.

```css
// my-component.css
:host {
  display: block;
  min-height: 200px;
  background-color: cornflowerblue;
}
```

```js
// my-component.js
import { LitElement, html, css, unsafeCSS } from "lit";
import styles from "./my-component.css";

export class MyComponent extends LitElement {
  static styles = css`
    ${unsafeCSS(styles)}
  `;

  render() {
    return html`Hello from Lit! Oh Hai!`;
  }
}
```


```
npx rollup main.js -p rollup-plugin-import-css
```

## Dealing with SCSS

Use rollup-plugin-scss and sass packages.

Real life example:

https://dev.azure.com/IngEurCDaaS01/IngOne/_git/P20209-ing-feat-search-results-de?path=/rollup.conf.js
