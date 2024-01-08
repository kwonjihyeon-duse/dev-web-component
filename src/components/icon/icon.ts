import { nothing } from "lit";
import TailwindElement from "@/shared/tailwind.element";

import style from "./icon.scss?inline";
import { customElement, property } from "lit/decorators.js";
import { unsafeSVG } from "lit/directives/unsafe-svg.js";
import { until } from "lit-html/directives/until.js";

import IconMap from "./svgs";
import textColors from "@/foundations/colors";

export const SIZE = {
  XXS: "2xs",
  XS: "xs",
  S: "s",
  M: "m",
  L: "l",
  XL: "xl",
  XXL: "2xl",
} as const;
export type SIZE = (typeof SIZE)[keyof typeof SIZE];

export interface IconProps {
  numberOfSize?: number;
  size: SIZE;
  viewBox?: string;
  name: keyof typeof IconMap;
  color: keyof typeof textColors;
}
@customElement("dwc-icon")
export class Icon extends TailwindElement(style) {
  @property({
    type: Number,
    attribute: "number-of-size",
  })
  numberOfSize?: number;

  @property({ type: SIZE })
  size?: SIZE;

  @property({
    type: String,
    attribute: "view-box",
  })
  viewBox: string = "0 0 24 24";

  @property({ type: String })
  name?: keyof typeof IconMap;

  protected override render() {
    // @ts-ignore
    const importedIcon = IconMap[this.name]?.()
      // @ts-ignore
      .then((iconModule) => {
        let parser = new DOMParser();
        const doc = parser.parseFromString(iconModule.default, "text/html");
        const paragraphs = doc.querySelector("svg");

        if (!paragraphs) return unsafeSVG(doc.body.innerHTML);
        let iconSize = 24;
        if (this.size === SIZE.XXS) iconSize = 12;
        if (this.size === SIZE.XS) iconSize = 16;
        if (this.size === SIZE.S) iconSize = 20;
        if (this.size === SIZE.L) iconSize = 28;
        if (this.size === SIZE.XL) iconSize = 32;
        if (this.size === SIZE.XXL) iconSize = 36;
        if (this.numberOfSize && this.numberOfSize > 0)
          iconSize = this.numberOfSize;
        paragraphs.setAttribute("width", iconSize.toString());
        paragraphs.setAttribute("height", iconSize.toString());
        paragraphs.setAttribute("viewBox", this.viewBox);
        return unsafeSVG(doc.body.innerHTML);
      });
    return until(importedIcon, nothing);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "dwc-icon": Icon;
  }
}
