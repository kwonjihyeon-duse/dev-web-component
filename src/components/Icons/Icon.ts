import { nothing } from "lit";
import TailwindElement from "@/shared/tailwind.element";

import style from './icon.scss?inline';
import { customElement, property } from "lit/decorators.js";
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import { until } from 'lit-html/directives/until.js';

import IconPaths from "./IconPaths";
import IconMap from "./svgs";

export const SIZE = {
  XXS: '2xs',
  XS: 'xs',
  S: 's',
  M: 'm',
  L: 'l',
  XL: 'xl',
  XXL: '2xl',
} as const;
export type SIZE = typeof SIZE[keyof typeof SIZE];


export interface IconProps {
  numberOfSize?: number;
  size: SIZE;
  viewBox?: string;
  name: keyof typeof IconPaths;
}
@customElement('dwc-icon')
export default class Icon extends TailwindElement(style) {

  @property({ 
    type: Number,
    attribute : 'number-of-size' 
  })
  numberOfSize?:number;

  @property({ type: SIZE }) 
  size:SIZE;

  @property({ 
    type: String,
    attribute: 'view-box'
  })
  viewBox:string = '0 0 24 24';

  @property({ type: String }) 
  name:string = 'ArrowRight'; // keyof typeof IconPaths;

  protected override render() {
    console.log("render")
    // if(IconPaths.hasOwnProperty(name)) return nothing;
    console.log("IconMap", IconMap)
    console.log("IconMap", this.name)
    // @ts-ignore
    const importedIcon = IconMap[this.name]?.()
      // @ts-ignore
      .then(iconModule => {
        let parser = new DOMParser();
        const doc = parser.parseFromString(iconModule.default, "text/html");
        const paragraphs = doc.querySelector('svg');

        if(!paragraphs) return unsafeSVG(doc.body.innerHTML);
        let iconSize = 24;
        console.log("this.size", this.size);
        console.log("this.size", this.size === SIZE.XS);
        
        
        if(this.size === SIZE.XXS) iconSize = 12;
        if(this.size === SIZE.XS) iconSize = 16;
        if(this.size === SIZE.S) iconSize = 20;
        if(this.size === SIZE.L) iconSize = 28;
        if(this.size === SIZE.XL) iconSize = 32;
        if(this.size === SIZE.XXL) iconSize = 36;
        if(this.numberOfSize && this.numberOfSize > 0) iconSize =  this.numberOfSize;
        console.log("iconSize", iconSize);
        console.log("viewBox", this.viewBox);
        paragraphs.setAttribute("width", iconSize.toString());
        paragraphs.setAttribute("height", iconSize.toString());

        paragraphs.setAttribute("viewBox", this.viewBox);
        
        // parser = null;
        
        return unsafeSVG(doc.body.innerHTML);
      });
      console.log('importedIcon', importedIcon);
    return until(importedIcon, nothing);
      // <!-- <svg width="${this.width}" height="${this.height}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        
      // </svg> -->
  };  

  // updated(changedProperties: Map<string, unknown>) {
  //   console.log("changedProperties", changedProperties)
  //   console.log("changedProperties", this.shadowRoot)
  //   console.log("changedProperties", this.shadowRoot?.querySelector('svg'))
  //   console.log("changedProperties", this.shadowRoot?.querySelectorAll('path'))
  //   if (changedProperties.has('color')) {
  //     const paths = this.shadowRoot.querySelectorAll('path');
  //     let color: string;
  //     switch (this.color) {
  //       case 'primary':
  //         color = '#0066FF';
  //         break;
  //       default:
  //         color = '#555555';
  //         break;
  //     }
  //     console.log("path", paths);
  //     [].map.call(paths, function(path) {
  //       path.style.fill = color;
  //     })
  //   }
  // }

 // Private method!!!
  // Don't use. Don't override.
  // Showing here just for educational purposes only.
  // _enqueueUpdate() {
  //   console.log('_enqueueUpdate called');
  //   const result = super._enqueueUpdate();
  //   console.log('_enqueueUpdate returns ' + result);
  //   return result;
  // }

  // // Private method!!!
  // // Don't use. Don't override.
  // // Showing here just for educational purposes only.
  // _requestUpdate(propertyName, oldValue) {
  //   console.log('_requestUpdate called with args: ' + propertyName + ', ' + oldValue);
  //   const result = super._requestUpdate(propertyName, oldValue);
  //   return result;
  // }

  // performUpdate() {
  //   console.log('performUpdate starts');
  //   const result = super.performUpdate();
  //   console.log('performUpdate ends');
  //   console.log('--------------------------------------------------');
  //   return result;
  // }

  // shouldUpdate(args) {
  //   console.log('  shouldUpdate called with args: ' + JSON.stringify(args));
  //   const result = super.shouldUpdate(args);
  //   console.log('  shouldUpdate returns: ' + result);
  //   return result;
  // }

  // update(args) {
  //   console.log('  update called with args: ' + JSON.stringify(args));
  //   const result = super.update(args);
  //   console.log('  update returns: ' + result);
  //   return result;
  // }

  // firstUpdated(args) {
  //   console.log('  firstUpdated called with args: ' + JSON.stringify(args));
  //   const result = super.firstUpdated(args);
  //   console.log('  firstUpdated returns: ' + result);
  //   return result;
  // }

  // updated(args) {
  //   console.log('  updated called with args: ', + JSON.stringify(args));
  //   const result = super.updated(args);
  //   console.log('  updated returns: ' + result);
  //   return result;
  // }
}