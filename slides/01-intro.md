# Rollup

> Rollup is a module bundler for JavaScript which compiles small pieces of code > into something larger and more complex, such as a library or application.

* Perfectly suited for a modern build with ES6.
* Developed with ES modules in mind
* Standard for CAF and OneWEB features (ING).
* Plays well with Storybook, @web/dev-server and is the core of the Vite bundler
* Easy to configure and to extend

## Getting started

```
$ npm i --save rollup
```

```js
// main.js
import("./my-component.js").then(({ MyComponent }) => {
  customElements.define("my-component", MyComponent);
});
```

```js
// my-component.js
import { LitElement, html } from "lit";

export class MyComponent extends LitElement {
  render() {
    return html`Hello from Lit!`;
  }
}
```

```
$ npx rollup main.js
```

[DEMO: Check the output of the build]
