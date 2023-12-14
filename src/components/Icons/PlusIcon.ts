import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('plus-icon')
export class PlusIcon extends LitElement {
  @property({ type: String }) color? = 'white'
  @property({ type: String }) size? = '20'
  render() {
    const iconWrapperStyle = `width:${this.size}px!important; height:${this.size}px!important;`
    return html`<div style=${iconWrapperStyle}>
      <svg
        width=${this.size}
        height=${this.size}
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.99992 16.6666C10.1992 16.6666 10.3703 16.5952 10.513 16.4524C10.6558 16.3097 10.7272 16.1413 10.7272 15.9474L10.7263 10.7195L15.9474 10.7191C16.1413 10.7191 16.3097 10.6491 16.4524 10.509C16.5952 10.3689 16.6666 10.1992 16.6666 9.99992C16.6666 9.80059 16.5952 9.62955 16.4524 9.48679C16.3097 9.34403 16.1413 9.27265 15.9474 9.27265L10.7263 9.27287L10.7272 4.05244C10.7272 3.8585 10.6558 3.69015 10.513 3.54739C10.3703 3.40463 10.1992 3.33325 9.99992 3.33325C9.80059 3.33325 9.63089 3.40463 9.49083 3.54739C9.35076 3.69015 9.28073 3.8585 9.28073 4.05244L9.28068 9.27287L4.05244 9.27265C3.8585 9.27265 3.69015 9.34403 3.54739 9.48679C3.40463 9.62955 3.33325 9.80059 3.33325 9.99992C3.33325 10.1992 3.40463 10.3689 3.54739 10.509C3.69015 10.6491 3.8585 10.7191 4.05244 10.7191L9.28068 10.7195L9.28073 15.9474C9.28073 16.1413 9.35076 16.3097 9.49083 16.4524C9.63089 16.5952 9.80059 16.6666 9.99992 16.6666Z"
          fill=${this.color}
        />
      </svg>
    </div> `
  }
}
