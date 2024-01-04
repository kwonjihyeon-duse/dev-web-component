import { customElement } from 'lit/decorators.js';
import { html, unsafeCSS } from 'lit';
import { Button } from './button';
import style from './outline-button.scss?inline';

@customElement('dwc-outline-button')
export class OutlineButton extends Button {
  render() {
    return html`<button
      type="button"
      class=${`button--outline ${this.size} ${this.type} ${this.color} `}
      ?disabled=${this.disabled}
      @click=${this.onClick}
    >
      <slot name="leftIcon"></slot>${this.label}<slot name="rightIcon"></slot>
    </button>`;
  }

  static styles = unsafeCSS(style);
}
