import("./my-component.js").then(({ MyComponent }) => {
  customElements.define("my-component", MyComponent);
});
