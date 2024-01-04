import { LitElement, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import styles from './avatar.scss?inline';

@customElement('dwc-avatar')
export class Avatar extends LitElement {
  @property({ type: String }) link = '';
  @property({ type: String }) size: 'sm' | 'md' | 'lg' | 'xlg' = 'md';

  constructor() {
    super();
  }

  profile = (link: string) => html`<img src=${link} />`;
  default = html` <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    fill="none"
    class="svg-icon"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M18.9014 14.1554C18.0282 14.7097 17.061 14.9869 16 14.9869C14.939 14.9869 13.9718 14.7097 13.0986 14.1554C12.2254 13.601 11.5282 12.855 11.007 11.9172C10.4859 10.9795 10.2254 9.93314 10.2254 8.77826C10.2254 7.66034 10.4859 6.63943 11.007 5.71553C11.5282 4.79163 12.2277 4.05251 13.1056 3.49817C13.9836 2.94383 14.9484 2.66666 16 2.66666C17.061 2.66666 18.0282 2.94152 18.9014 3.49124C19.7746 4.04097 20.4718 4.77778 20.993 5.70168C21.5141 6.62557 21.7746 7.64648 21.7746 8.7644C21.7746 9.92852 21.5141 10.9795 20.993 11.9172C20.4718 12.855 19.7746 13.601 18.9014 14.1554ZM27.2676 27.4179C26.7793 27.806 25.9061 28 24.6479 28H7.33803C6.0892 28 5.22066 27.806 4.73239 27.4179C4.24413 27.0299 4 26.4894 4 25.7965C4 24.9096 4.28169 23.9787 4.84507 23.004C5.40845 22.0293 6.21596 21.1169 7.26761 20.267C8.31925 19.417 9.58216 18.7264 11.0563 18.1951C12.5305 17.6639 14.1784 17.3982 16 17.3982C17.8216 17.3982 19.4695 17.6639 20.9437 18.1951C22.4178 18.7264 23.6808 19.417 24.7324 20.267C25.784 21.1169 26.5916 22.0293 27.1549 23.004C27.7183 23.9787 28 24.9096 28 25.7965C28 26.4894 27.7559 27.0299 27.2676 27.4179Z"
      fill="#CDD5E1"
    />
  </svg>`;

  render() {
    return html`
      <div class="storybook-avatar ${this.size}">
        ${this.link !== '' ? this.profile(this.link) : this.default}
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
