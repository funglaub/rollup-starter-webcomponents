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
