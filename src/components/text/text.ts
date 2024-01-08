import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import TailwindElement from '../../shared/tailwind.element';

import style from './text.scss';

@customElement('text')
export class TextComponent extends TailwindElement(style) {
  @property()
  name?: string = 'World';

  render() {
    return html`
      <p>
        Hello,
        <b>${this.name}</b>
        !
      </p>
      <button class="bg-red-200 text-yellow-200 p-2 rounded-full text-2xl">Hello world!</button>
    `;
  }
}
