import { TemplateResult, html } from 'lit';
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

  @state() protected _isOpenOption: Boolean = false;
  @state() protected _label: string = '';
  @state() protected _selectedIndex: number = 0;
  @state() protected _options: optionProps[] = [];
  @state() protected box?: HTMLElement | null;
  @state() protected optionDom?: HTMLElement | null;
  @state() protected boxBottom?: number;
  @state() protected optionsHeight?: number;

  connectedCallback(): void {
    super.connectedCallback();
    document.addEventListener('click', this._handleOutsideClick);
    document.addEventListener('keydown', this._handleKeypress);
    document.addEventListener('scroll', this._handleMenuOffset);
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    document.removeEventListener('click', this._handleOutsideClick);
    document.removeEventListener('keydown', this._handleKeypress);
    document.removeEventListener('scroll', this._handleMenuOffset);
  }

  firstUpdated(): void {
    this.box = this.shadowRoot?.querySelector('.select') || null;
    this.optionDom = this.shadowRoot?.querySelector('ul') || null;
  }

  protected updated(changedProperties: Map<string, any>): void {
    if (changedProperties.has('options')) {
      this._options = [{ value: '', label: this.placeholder }, ...this.options];
    }
    if (changedProperties.has('value')) {
      const label = this.options.find((option) => option.value === this.value)?.label || '';
      this._label = label;
    }
    if (changedProperties.has('_isOpenOption')) {
      this._handleMenuOffset();
    }
  }

  protected getSelectTextColorClass(): string {
    const emptyColor = this.value === '' && this.isError ? 'error' : 'not-selected';
    const colorClass = this.value !== '' ? 'selected' : emptyColor || '';
    return colorClass;
  }

  protected render(): TemplateResult {
    const getClass = (isClass: Boolean, className: string) => (isClass ? className : '');
    const selectClass = `${getClass(this._isOpenOption, 'open')} ${getClass(this.disabled, 'disabled')}`;
    const iconClass = `${getClass(this.isError, 'error')} ${this.type} ${getClass(this._isOpenOption, 'reverse')}`;

    return html`
      <div
        class="select-wrap"
        tabindex="0"
        @click=${this._handleClick}
        @focus=${this._handleFocus}
        @blur=${this._handleBlur}
        @mousedown=${this._handleMousedown}
      >
        ${this._selectLabel()}
        <div class="select select--${this.type} ${this.getSelectTextColorClass()} ${selectClass}">
          <p class="selected-value">${this._label !== '' ? this._label : this.placeholder}</p>
          ${this._customOptions()}
          <dwc-icon name="ShevronDown" class="icon ${iconClass}" />
        </div>
      </div>
    `;
  }

  protected _customOptions = (): TemplateResult => {
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

  protected _selectLabel = () => {
    return this.label && html`<p class="label ${this.isError ? 'error' : ''}">${this.label}</p>`;
  };

  protected _optionClass(idx: number, label: string): string {
    const sameIdx = this._selectedIndex === idx;
    const sameValue = this._label === label;
    return sameIdx || sameValue ? 'selected' : '';
  }

  protected _handleClick(): void {
    if (this.disabled) return;
    this._isOpenOption = !this._isOpenOption;
  }

  protected _handleOutsideClick = (event: MouseEvent): void => {
    if (!this.contains(event.target as Node)) {
      this._isOpenOption = false;
    }
  };

  protected _handleKeypress = (event: KeyboardEvent): void => {
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

  protected _handleArrowDown(): void {
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

  protected _handleArrowUp(): void {
    if (this._isOpenOption && this._selectedIndex > 0) {
      this._selectedIndex -= 1;
      this._scrollIntoOption(this._selectedIndex);
    }
  }

  protected _handleSelect(selectIndex: number, isEnter: boolean = false): void {
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

  protected _scrollIntoOption(index: number): void {
    const element = this.shadowRoot?.querySelector('ul')?.children[index];
    element?.scrollIntoView({ block: 'center' });
  }

  protected _handleMouseOver(event: MouseEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this._selectedIndex = Number((event.target as HTMLSelectElement).dataset.index);
  }

  protected _handleFocus(): void {
    if (this.disabled) return;
    this._isOpenOption = true;
  }

  protected _handleBlur(): void {
    this._isOpenOption = false;
  }

  protected _handleMousedown(event: MouseEvent): void {
    event.preventDefault();
  }

  protected _handleClearError(value: string): void {
    if (value !== '') {
      this.isError = false;
    }
  }

  protected _calculateMenuOffsetTop(bottom: number, height: number): string {
    const optionBottom = window.innerHeight - (bottom + height);
    return this._isOpenOption && optionBottom < 10 ? `${-height}px` : '100%';
  }

  protected _calculateAndApplyOffset(): void {
    requestAnimationFrame(() => {
      if (!this._isOpenOption) return;
      if (!this.optionDom || !this.box) return;
      this.optionsHeight = this.optionDom.getBoundingClientRect().height;
      this.boxBottom = this.box.getBoundingClientRect().bottom;
      this.optionDom.style.top = this._calculateMenuOffsetTop(this.boxBottom, this.optionsHeight);
    });
  }

  protected _handleMenuOffset = (): void => this._calculateAndApplyOffset();
}

declare global {
  interface HTMLElementTagNameMap {
    'dwc-select': Select;
  }
}
