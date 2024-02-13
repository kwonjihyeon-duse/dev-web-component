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

  @state() private isOpenOption: Boolean = false;
  @state() private valueText: string = '';
  @state() private selectedIndex: number = 0;

  connectedCallback(): void {
    super.connectedCallback();
    document.addEventListener('click', this.handleOutsideClick);
    document.addEventListener('keydown', this.handleKeypress);
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    document.removeEventListener('click', this.handleOutsideClick);
    document.removeEventListener('keydown', this.handleKeypress);
  }

  render() {
    const customOptions = [{ label: this.placeholder, value: '' }, ...this.options];
    const emptyColor = this.value === '' && this.isError ? 'error' : 'not-selected';
    const colorClass = this.value !== '' ? 'selected' : emptyColor;
    const selectClass = `select select--${this.type} ${colorClass} ${this.isOpenOption && 'open'} ${
      this.disabled && 'disabled'
    }`;
    const selectValue = this.valueText !== '' ? this.valueText : this.placeholder;

    return html`
      <div class="select-wrap" tabindex="0" @click=${this.handleClick}>
        <p class="label ${this.isError && 'error'}">${this.label}</p>
        <div class="${selectClass}">
          <span class="custom-select-trigger">${selectValue}</span>
          <ul class="custom-options" style="display:${this.isOpenOption ? 'block' : 'none'}">
            ${customOptions?.map(
              ({ value, label }, idx) =>
                html`<li
                  data-value=${value}
                  data-index=${idx}
                  @click=${this.handleOptionClick}
                  class="custom-option ${this.selectedIndex === idx && 'selected'}"
                  @mouseover=${this.activeOption}
                >
                  ${label}
                </li> `,
            )}
          </ul>
          <dwc-icon
            name="ShevronDown"
            class="icon ${this.isError && 'error'} ${this.type} ${this.isOpenOption && 'reverse'}"
          />
        </div>
      </div>
    `;
  }

  private handleClick() {
    if (this.disabled) return;
    this.isOpenOption = !this.isOpenOption;
  }

  private handleOptionClick(event: Event) {
    const { textContent, dataset } = event.target as HTMLElement;
    this.value = dataset.value ? dataset.value : '';
    this.valueText = dataset.value ? textContent || '' : '';
    this.selectedIndex = Number(dataset.index);
    this.isError = false;

    if (this.onChange) {
      this.onChange(this.value);
    }
  }

  private handleOutsideClick = (event: MouseEvent) => {
    if (this !== event.target) {
      this.isOpenOption = false;
    }
  };

  private handleKeypress = (event: KeyboardEvent) => {
    event.preventDefault();
    event.stopPropagation;
    const isEnter = event.key === 'Enter';
    const isUp = event.key === 'ArrowUp';
    const isDown = event.key === 'ArrowDown';
    if (!this.isOpenOption || (!isEnter && !isUp && !isDown)) {
      return;
    }

    if (isUp && this.selectedIndex > 0) {
      this.selectedIndex -= 1;
    }

    if (isDown && this.selectedIndex <= this.options.length - 1) {
      this.selectedIndex += 1;
    }

    if (isEnter) {
      const { value, label } = this.options[this.selectedIndex - 1];
      this.value = value ? value : '';
      this.valueText = value ? label : '';
      this.isOpenOption = false;
    }
  };

  private activeOption(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.selectedIndex = Number((event.target as HTMLSelectElement).dataset.index);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'dwc-select': Select;
  }
}
