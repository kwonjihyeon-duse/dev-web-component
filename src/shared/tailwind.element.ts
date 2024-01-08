import { LitElement, unsafeCSS } from 'lit';

import style from './tailwind.global.css?inline';
// const style = require("./tailwind.global.css?inline");
const tailwindElement = unsafeCSS(style);

function TailwindElement(style: unknown): new () => LitElement {
  return class extends LitElement {
    static styles = [tailwindElement, unsafeCSS(style)];
  };
}

export default TailwindElement;
