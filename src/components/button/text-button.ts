import { customElement } from 'lit/decorators.js';
import { html } from 'lit';
import { Button } from './button';

@customElement('dwc-text-button')
export class TextButton extends Button {
  render() {
    const buttonStyle = `button button--text button--${this.size} button--${this.type} button--text--${this.color} ${
      this.full ? 'button--full' : ''
    }`;
    return html`<button type="button" class=${buttonStyle} ?disabled=${this.disabled} @click=${this.onClick}>
      <slot></slot>${this.label}<slot name="rightIcon"></slot>
    </button>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'dwc-text-button': TextButton;
  }
}
