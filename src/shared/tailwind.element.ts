import { LitElement, unsafeCSS } from "lit";

import style from "./tailwind.global.css?inline";
// const style = require("./tailwind.global.css?inline");
const tailwindElement = unsafeCSS(style);

const TailwindElement = (style: unknown) => 
  class extends LitElement {
    static styles = [tailwindElement, unsafeCSS(style)];
  }; 

export default TailwindElement;