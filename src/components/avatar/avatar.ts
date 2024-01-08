import { html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import styles from './avatar.scss?inline';
import TailwindElement from '@/shared/tailwind.element';
import '../icon/icon';

@customElement('dwc-avatar')
export class Avatar extends TailwindElement(styles) {
  @property({ type: String }) link = '';
  @property({ type: String }) size: 'xs' | 'sm' | 'md' | 'lg' | 'xlg' | '2xlg' = 'md';
  @property({ type: Boolean }) isActive = false;
  @property({ type: Boolean }) isCamera = false;
  @property({ attribute: false }) onClickCamera?: () => void;
  constructor() {
    super();
  }

  profile = (link: string) => html`<img src=${link} />`;

  default = html` <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" class="svg-icon">
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M18.9014 14.1554C18.0282 14.7097 17.061 14.9869 16 14.9869C14.939 14.9869 13.9718 14.7097 13.0986 14.1554C12.2254 13.601 11.5282 12.855 11.007 11.9172C10.4859 10.9795 10.2254 9.93314 10.2254 8.77826C10.2254 7.66034 10.4859 6.63943 11.007 5.71553C11.5282 4.79163 12.2277 4.05251 13.1056 3.49817C13.9836 2.94383 14.9484 2.66666 16 2.66666C17.061 2.66666 18.0282 2.94152 18.9014 3.49124C19.7746 4.04097 20.4718 4.77778 20.993 5.70168C21.5141 6.62557 21.7746 7.64648 21.7746 8.7644C21.7746 9.92852 21.5141 10.9795 20.993 11.9172C20.4718 12.855 19.7746 13.601 18.9014 14.1554ZM27.2676 27.4179C26.7793 27.806 25.9061 28 24.6479 28H7.33803C6.0892 28 5.22066 27.806 4.73239 27.4179C4.24413 27.0299 4 26.4894 4 25.7965C4 24.9096 4.28169 23.9787 4.84507 23.004C5.40845 22.0293 6.21596 21.1169 7.26761 20.267C8.31925 19.417 9.58216 18.7264 11.0563 18.1951C12.5305 17.6639 14.1784 17.3982 16 17.3982C17.8216 17.3982 19.4695 17.6639 20.9437 18.1951C22.4178 18.7264 23.6808 19.417 24.7324 20.267C25.784 21.1169 26.5916 22.0293 27.1549 23.004C27.7183 23.9787 28 24.9096 28 25.7965C28 26.4894 27.7559 27.0299 27.2676 27.4179Z"
      fill="#CDD5E1"
    />
  </svg>`;

  activeIcon = html`<div class="status-icon"></div>`;

  cameraIcon = html`<div class="camera-wrap" @click=${this.onClickCamera}>
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8.00004 10.7428C9.0637 10.7428 9.92596 9.85594 9.92596 8.76189C9.92596 7.66784 9.0637 6.78094 8.00004 6.78094C6.93638 6.78094 6.07411 7.66784 6.07411 8.76189C6.07411 9.85594 6.93638 10.7428 8.00004 10.7428Z"
        fill="#0C0C0D"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9.76446 2.66666C10.045 2.66666 10.3015 2.82971 10.427 3.08783L10.7583 3.7693C10.8837 4.02742 11.1402 4.19047 11.4208 4.19047H13.1852C14.0034 4.19047 14.6667 4.8727 14.6667 5.71428V11.8095C14.6667 12.6511 14.0034 13.3333 13.1852 13.3333H2.81486C1.99666 13.3333 1.33337 12.6511 1.33337 11.8095V5.71428C1.33337 4.8727 1.99666 4.19047 2.81486 4.19047H4.57928C4.85985 4.19047 5.11634 4.02742 5.24181 3.7693L5.57308 3.08783C5.69856 2.82971 5.95505 2.66666 6.23562 2.66666H9.76446ZM8.00004 11.8095C9.63644 11.8095 10.963 10.445 10.963 8.76189C10.963 7.07874 9.63644 5.71428 8.00004 5.71428C6.36364 5.71428 5.03708 7.07874 5.03708 8.76189C5.03708 10.445 6.36364 11.8095 8.00004 11.8095ZM3.92597 6.2857C3.92597 6.60129 3.67724 6.85713 3.37041 6.85713C3.06359 6.85713 2.81486 6.60129 2.81486 6.2857C2.81486 5.97011 3.06359 5.71428 3.37041 5.71428C3.67724 5.71428 3.92597 5.97011 3.92597 6.2857Z"
        fill="#0C0C0D"
      />
    </svg>
  </div>`;

  render() {
    return html`
      <div class="avatar avatar--${this.size}">
        ${this.link !== '' ? this.profile(this.link) : this.default} ${this.isActive ? this.activeIcon : ''}
        ${this.isCamera ? this.cameraIcon : ''}
      </div>
    `;
  }

  static styles = unsafeCSS(styles);
}

declare global {
  interface HTMLElementTagNameMap {
    'dwc-avatar': Avatar;
  }
}
