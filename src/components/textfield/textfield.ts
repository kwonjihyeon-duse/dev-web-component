import { html, nothing, unsafeCSS } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

import globalcss from '@/shared/tailwind.global.css?inline';
import style from './textfield.scss?inline';
import { ifDefined } from 'lit/directives/if-defined.js';

import { Icon } from '../icon/icon';
import '../icon/icon';

type IState = 'error' | 'success' | 'enabled' | 'complete';
type ISize = 'md' | 'lg';

const tailwindElement = unsafeCSS(globalcss);

/**
 * Textfield element.
 *
 * @preset 필드 전체 style class
 * @placeholder 필드 placeholder
 * @fieldSize 필드 size (md | lg)
 * @value 필드 value
 * @isBoxed 필드 border 여부
 * @label 필드 라벨
 * @helperText 필드 helper-text
 * @suffix 필드 suffix
 * @iconColor icon color
 * @clickFunc icon click func
 * @changeFunc input onchange func
 */
@customElement('dwc-textfield')
export class Textfield extends Icon {
  @property() preset?: IState = 'enabled';
  @property() placeholder?: string;
  @property() fieldSize?: ISize = 'lg';
  @property() value?: string = '';

  @property() isBoxed?: boolean;
  @property() label?: string;
  @property() helperText?: string = '';
  @property() suffix?: string;
  @property() iconColor?: string;
  @property() disabled?: boolean = false;

  @property() clickFunc?: (e: Event) => void = () => {
    this.value = '';
  };
  @property() changeFunc: (e: Event) => void = (e) => {
    this.value = (e.target as HTMLInputElement).value;
  };

  @state() _boxed = '';

  render() {
    const size = this.fieldSize ? `-${this.fieldSize}` : '';

    try {
      if (typeof this.isBoxed === 'string') {
        this._boxed = JSON.parse(this.isBoxed) ? '__boxed' : '';
      } else if (this.isBoxed === undefined) {
        throw Error();
      } else {
        this._boxed = this.isBoxed ? '__boxed' : '';
      }
    } catch (_) {
      this._boxed = '';
    }

    const label = this.label
      ? html`<span class="trg-14 textfield-label textfield-label__${this.preset}">${this.label}</span>`
      : nothing;

    const helper = this.helperText
      ? html`<span class="trg-12 textfield-helper textfield-helper__${this.preset}">${this.helperText}</span>`
      : nothing;

    const suffix = this.suffix ? html`<span class="suffix">${this.suffix}</span>` : nothing;

    const icons = this.name
      ? html`<button class="suffix-icon ${this.iconColor}" @click=${ifDefined(this.clickFunc)}>
          <dwc-icon size="s" name="${this.name}"></dwc-icon>
        </button>`
      : nothing;

    return html`
      <div class="textfield-wrapper${size}">
        ${label}
        <div
          class="textfield-input-box ${this.preset}${this._boxed} ${this._boxed ? 'mt-2.5 mb-dwc-2' : 'mb-dwc-1'}
          ${this._boxed && this.disabled ? 'disabled-boxed' : this.disabled ? 'disabled' : ''}"
        >
          <input
            class="textfield-input"
            placeholder="${ifDefined(this.placeholder)}"
            ?disabled="${this.disabled}"
            @change=${this.changeFunc}
            .value="${this.value}"
          />
          <div class="suffix-wrapper">${suffix}${icons}</div>
        </div>
        ${helper}
      </div>
    `;
  }

  static styles = [tailwindElement, unsafeCSS(style)];
}

declare global {
  interface HTMLElementTagNameMap {
    'dwc-textfield': Textfield;
  }
}
