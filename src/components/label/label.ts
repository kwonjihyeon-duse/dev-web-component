import { customElement, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import style from './label.scss?inline';
import { html, nothing, unsafeCSS } from 'lit';
import { Icon } from '../icons/icon';

import '../icons/icon.ts';

/**
 * Label element.
 *
 * @text 내용 (필수값)
 * @preset 태그를 꾸며줄 css class (primary, secondary, tertiary ... 그 외)
 * @styled 태그를 꾸며줄 css style
 * @position 아이콘 위치 - default(아이콘 없는 상태), left, right
 */
@customElement('dwc-label')
export class Label extends Icon {
  @property() text: string = '';
  @property() preset?: string = 'primary';
  @property() styled?: Partial<CSSStyleDeclaration>;
  @property() position?: 'left' | 'right' | 'default' = 'default';

  render() {
    return this.text && this.name
      ? html`
          <div
            style=${ifDefined(this.styled)}
            class=${['label-wrapper', this.position, this.preset].join(' ')}
          >
            <dwc-icon
              numberOfSize=${this.numberOfSize}
              size=${this.size}
              viewBox=${this.viewBox}
              name=${this.name}
            ></dwc-icon>
            ${this.text}
          </div>
        `
      : nothing;
  }

  static styles = unsafeCSS(style);
}

declare global {
  interface HTMLElementTagNameMap {
    'dwc-label': Label;
  }
}
