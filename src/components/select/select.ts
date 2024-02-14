import { html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import styles from './select.scss?inline';
import TailwindElement from '@/shared/tailwind.element';
import '@/components/icon/icon';

type optionProps = {
  value: string;
  label: string;
};

@customElement('dwc-select')
export class Select extends TailwindElement(styles) {
  @property({ type: String }) type?: 'basic' | 'underline' = 'basic';
  @property({ type: String }) label: string = '';
  @property({ type: String }) placeholder: string = '';
  @property({ type: String }) value: string = '';
  @property({ type: Boolean }) disabled: boolean = false;
  @property({ type: Function }) onChange?: (value: string) => void;
  @property({ type: Array }) options: optionProps[] = [];
  @property({ type: Boolean }) isError: boolean = false;

  @state() private _isOpenOption: Boolean = false;
  @state() private _label: string = '';
  @state() private _selectedIndex: number = 0;
  @state() private _options: optionProps[] = [];

  connectedCallback(): void {
    super.connectedCallback();
    document.addEventListener('click', this._handleOutsideClick);
    document.addEventListener('keydown', this._handleKeypress);
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    document.removeEventListener('click', this._handleOutsideClick);
    document.removeEventListener('keydown', this._handleKeypress);
  }

  protected updated(changedProperties: Map<string, any>) {
    if (changedProperties.has('options')) {
      this._options = [{ value: '', label: this.placeholder }, ...this.options];
    }
    if (changedProperties.has('value')) {
      const label = this.options.find((option) => option.value === this.value)?.label || '';
      this._label = label;
    }
  }

  protected render() {
    const emptyColor = this.value === '' && this.isError ? 'error' : 'not-selected';
    const colorClass = this.value !== '' ? 'selected' : emptyColor || '';
    const selectClass = `select select--${this.type} ${colorClass} ${this._isOpenOption && 'open'} ${
      this.disabled && 'disabled'
    }`;
    const selectValue = this._label !== '' ? this._label : this.placeholder;

    return html`
      <div
        class="select-wrap"
        tabindex="0"
        @click=${this._handleClick}
        @focus=${this._handleFocus}
        @blur=${this._handleBlur}
        @mousedown=${this._handleMousedown}
      >
        ${this.label && html`<p class="label ${this.isError && 'error'}">${this.label}</p>`}
        <div class="${selectClass}">
          <p class="selected-value">${selectValue}</p>
          ${this.customOptions()}
          <dwc-icon
            name="ShevronDown"
            class="icon ${this.isError && 'error'} ${this.type} ${this._isOpenOption && 'reverse'}"
          />
        </div>
      </div>
    `;
  }

  private customOptions = () => {
    const isShow = this._isOpenOption ? 'show' : '';
    return html` <ul class="custom-options ${isShow}" role="listbox">
      ${this._options?.map(
        ({ value, label }, idx) =>
          html`<li
            data-value=${value}
            data-label=${label}
            data-index=${idx}
            @click=${() => this._handleSelect(idx)}
            class="custom-option ${this._optionClass(idx, label)}"
            @mouseover=${this._handleMouseOver}
            role="option"
          >
            <p>${label}</p>
          </li>`,
      )}
    </ul>`;
  };

  private _optionClass(idx: number, label: string) {
    const sameIdx = this._selectedIndex === idx;
    const sameValue = this._label === label;
    return sameIdx || sameValue ? 'selected' : '';
  }

  private _handleClick() {
    if (this.disabled) return;
    this._isOpenOption = !this._isOpenOption;
  }

  private _handleOutsideClick = (event: MouseEvent) => {
    if (this !== event.target) {
      this._isOpenOption = false;
    }
  };

  private _handleKeypress = (event: KeyboardEvent) => {
    switch (event.key) {
      case 'ArrowDown':
        this._handleArrowDown();
        break;
      case 'ArrowUp':
        this._handleArrowUp();
        break;
      case 'Enter':
        this._handleSelect(this._selectedIndex, true);
        break;
      default:
        return;
    }
    event.preventDefault();
    event.stopPropagation();
  };

  private _handleArrowDown() {
    if (this.disabled) return;
    const focused = document.activeElement === this;
    if (focused && !this._isOpenOption) {
      this._isOpenOption = true;
      return;
    }
    if (this._isOpenOption && this._selectedIndex < this._options.length - 1) {
      this._selectedIndex += 1;
      this._scrollIntoOption(this._selectedIndex);
    }
  }

  private _handleArrowUp() {
    if (this._isOpenOption && this._selectedIndex > 0) {
      this._selectedIndex -= 1;
      this._scrollIntoOption(this._selectedIndex);
    }
  }

  private _handleSelect(selectIndex: number, isEnter: boolean = false) {
    const { value, label } = this._options[selectIndex];
    this.value = value ? value : '';
    this._label = value ? label : '';
    if (isEnter) {
      this._isOpenOption = false;
    }

    if (this.onChange) {
      this.onChange(this.value);
    }
    this._handleClearError(value);
  }

  private _scrollIntoOption(index: number) {
    const element = this.shadowRoot?.querySelector('ul')?.children[index];
    element?.scrollIntoView({ block: 'center' });
  }

  private _handleMouseOver(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();
    this._selectedIndex = Number((event.target as HTMLSelectElement).dataset.index);
  }

  private _handleFocus() {
    if (this.disabled) return;
    this._isOpenOption = true;
  }

  private _handleBlur() {
    this._isOpenOption = false;
  }

  private _handleMousedown(event: MouseEvent) {
    event.preventDefault();
  }

  private _handleClearError(value: string) {
    if (value !== '') {
      this.isError = false;
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'dwc-select': Select;
  }
}
