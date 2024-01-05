import { customElement } from 'lit/decorators.js';
import { html, unsafeCSS } from 'lit';
import { Button } from './button';
import style from './button.scss?inline';

@customElement('dwc-text-button')
export class TextButton extends Button {
  render() {
    const buttonStyle = `button button--text button--${this.size} button--${this.type} button--text--${this.color}`;
    return html`<button
      type="button"
      class=${buttonStyle}
      ?disabled=${this.disabled}
      @click=${this.onClick}
    >
      <slot></slot>${this.label}<slot name="rightIcon"></slot>
    </button>`;
  }

  static styles = unsafeCSS(style);
}

declare global {
  interface HTMLElementTagNameMap {
    'dwc-text-button': TextButton;
  }
}
