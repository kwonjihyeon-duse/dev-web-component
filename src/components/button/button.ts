import { LitElement, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';
import styles from './button.scss?inline';

@customElement('dwc-button')
export class Button extends LitElement {
  @property({ type: String }) color?: 'primary' | 'secondary' | 'gray' =
    'primary';
  @property({ type: String }) backgroundColor?: string;
  @property({ type: String }) size?: 'sm' | 'md' | 'lg' | 'xl' = 'md';
  @property({ type: String }) type?: 'basic' | 'solid' | 'round' = 'basic';
  @property({ type: String }) label: string = '';
  @property({ type: Boolean }) disabled: boolean = false;
  @property({ attribute: false }) onClick?: () => void;

  render() {
    return html`
      <button
        type="button"
        class=${`button button--${this.size} button--${this.color} button-${this.type}`}
        style=${styleMap({ backgroundColor: this.backgroundColor })}
        ?disabled=${this.disabled}
        @click=${this.onClick}
      >
        <slot name="leftIcon"></slot>${this.label}<slot name="rightIcon"></slot>
      </button>
    `;
  }

  static styles = unsafeCSS(styles);
}

declare global {
  interface HTMLElementTagNameMap {
    'dwc-button': Button;
  }
}
