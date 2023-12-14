import { customElement } from 'lit/decorators.js';
import { html, unsafeCSS } from 'lit';
import { Button } from '../Button/Button';
import style from './outlineButton.css?inline';

@customElement('outline-button')
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
