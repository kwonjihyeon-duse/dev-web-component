import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';
import styles from './button.scss?inline';
import TailwindElement from '@/shared/tailwind.element';

@customElement('dwc-button')
export class Button extends TailwindElement(styles) {
  @property({ type: String }) color?: 'primary' | 'secondary' | 'tertiary' = 'primary';
  @property({ type: String }) backgroundColor?: string;
  @property({ type: String }) size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md';
  @property({ type: String }) type?: 'basic' | 'round' = 'basic';
  @property({ type: String }) label: string = '';
  @property({ type: Boolean }) disabled: boolean = false;
  @property({ attribute: false }) onClick?: () => void;
  @property({ type: Boolean }) full? = false;

  render() {
    const buttonClass = `button button--${this.size} button--${this.color} button--${this.type} ${
      this.full ? 'button--full' : ''
    }`;
    return html`
      <button
        type="button"
        class=${buttonClass}
        style=${styleMap({ backgroundColor: this.backgroundColor })}
        ?disabled=${this.disabled}
        @click=${this.onClick}
      >
        <slot></slot>${this.label}<slot name="rightIcon"></slot>
      </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'dwc-button': Button;
  }
}
