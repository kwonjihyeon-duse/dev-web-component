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
 * @placeholder 필드 placeholder
 * @fieldSize 필드 size (md | lg)
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
  @property() placeholder?: string;
  @property() fieldSize?: ISize = 'lg';

  @property() isBoxed?: boolean;
  @property() label?: string;
  @property() helperText?: string = '';
  @property() suffix?: string;
  @property() iconColor?: string;
  @property() disabled?: boolean = false;
  @property() isError?: boolean = false;

  @state() _value?: string;
  @state() _boxed = '';
  @state() _preset: IState = this.isError ? 'error' : 'enabled';

  @property() clickFunc?: (e: Event) => void = () => {};
  @property() changeFunc: (e: Event) => void = (e) => {
    this._value = (e.target as HTMLInputElement).value;
  };

  private _delete() {
    this._value = '';
    this.isError = false;
  }

  private _focus = () => {
    // this.dispatchEvent(changeFunc);
    if (this.isError) return;
    if (this._preset !== 'success') this._preset = 'success';
  };

  private _blur = () => {
    if (this.isError) return;
    if (this._preset !== 'complete') this._preset = 'complete';
  };

  // update(changed: Map<string, any>) {
  //   super.update(changed);
  //   if (changed.has('disabled')) {
  //     //   // change event
  //     //   if (this.isError) {
  //     //     this._preset = 'error';
  //     //   } else if (this._preset !== 'success') {
  //     //     this._preset = 'success';
  //     //   }
  //   }
  //   // return true;
  // }

  private _changeEvent(e: Event) {
    this.changeFunc(e);
    this._value = (e.target as HTMLInputElement).value;

    if (this.isError) {
      this._preset = 'error';
    } else if (this._preset !== 'success') {
      this._preset = 'success';
    }
  }

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
      ? html`<span class="trg-14 textfield-label textfield-label__${this._preset}">${this.label}</span>`
      : nothing;

    const helper = this.helperText
      ? html`<span class="trg-12 textfield-helper textfield-helper__${this._preset}">${this.helperText}</span>`
      : nothing;

    const suffix = this.name
      ? html`<button class="suffix-icon ${this.iconColor}" @click=${ifDefined(this.clickFunc)}>
          <dwc-icon size="s" name="${this.name}"></dwc-icon>
        </button>`
      : html`<span class="suffix">${this.suffix}</span>`;

    console.log(this.disabled, this._value);
    return html`
      <div class="textfield-wrapper${size}">
        ${label}
        <div
          class="textfield-input-box ${this._preset}${this._boxed} ${this._boxed ? 'mt-2.5 mb-dwc-2' : 'mb-dwc-1'}
          ${this._boxed && this.disabled ? 'disabled__boxed' : this.disabled ? 'disabled' : ''}"
        >
          <input
            class="textfield-input"
            placeholder="${ifDefined(this.placeholder)}"
            ?disabled=${this.disabled}
            @input=${this._changeEvent}
            @focus=${this._focus}
            @blur=${this._blur}
            .value="${ifDefined(this._value)}"
          />
          <div class="suffix-wrapper">
            ${suffix}
            ${this._value &&
            html`<button class="suffix-icon text-gray-300" @click=${this._delete}>
              <dwc-icon size="s" name="XmarkCircleFill"></dwc-icon>
            </button>`}
          </div>
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
