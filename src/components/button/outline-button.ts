import { customElement } from 'lit/decorators.js';
import { html } from 'lit';
import { Button } from './button';

@customElement('dwc-outline-button')
export class OutlineButton extends Button {
  render() {
    const buttonClass = `button button--outline button--${this.size} button--${this.type} button--outline--${this.color}`;
    return html`<button type="button" class=${buttonClass} ?disabled=${this.disabled} @click=${this.onClick}>
      <slot></slot>${this.label}<slot name="rightIcon"></slot>
    </button>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'dwc-outline-button': OutlineButton;
  }
}
