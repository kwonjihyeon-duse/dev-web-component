import { TemplateResult, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import styles from './checkbox.scss?inline';
import TailwindElement from '@/shared/tailwind.element';
import '@/components/icon/icon';

@customElement('dwc-checkbox')
export class Checkbox extends TailwindElement(styles) {
  @property({ type: String }) label: string = '';
  @property({ type: String }) id: string = '';
  @property({ type: String }) name: string = '';
  @property({ type: String }) size?: 'sm' | 'md' = 'sm';
  @property({ type: Boolean }) value?: boolean = false;
  @property({ type: Boolean }) disabled: boolean = false;
  @property({ type: Function }) onClick?: (checked: boolean) => void;

  connectedCallback(): void {
    super.connectedCallback();
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
  }

  firstUpdated(): void {
    if (!this.name) {
      this.name = this.id; // name 값이 없으면 id로 대체됩니다.
    }
  }

  protected render(): TemplateResult {
    return html`
      <div class="checkbox-wrap">
        <input
          type="checkbox"
          id="${this.id}"
          name="${this.name}"
          ?checked="${this.value}"
          ?disabled="${this.disabled}"
          class="checkbox"
          @change=${this.handleCheckboxChange}
          hidden
        />
        <label for="${this.id}" class="custom-checkbox ${this.disabled ? 'default' : ''} label--${this.size}"
          >${this.label}</label
        >
      </div>
    `;
  }

  private handleCheckboxChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.value = target.checked;
    if (this.onClick) {
      this.onClick(this.value);
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'dwc-checkbox': Checkbox;
  }
}
