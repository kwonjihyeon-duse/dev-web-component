import { customElement, property } from 'lit/decorators.js';
import { literal, html, unsafeStatic } from 'lit/static-html.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import TailwindElement from '../../shared/tailwind.element';

/**
 * Typography element.
 *
 * @text 내용 (필수값)
 * @tag 태그로 만들어지는 props (옵션값 - 기본값 p)
 * @preset 태그를 꾸며줄 css class
 * @styled 태그를 꾸며줄 css style
 */
@customElement('dwc-typography')
export class Typography extends TailwindElement('') {
  @property({ type: String }) text = '';
  @property({ type: String }) tag? = '';
  @property({ type: String }) preset? = '';
  @property({ type: String }) styled? = '';

  render() {
    const tag = this.tag ? unsafeStatic(this.tag) : literal`p`;
    // ifDefined - 값이 없으면 속성을 추가하지 않음 (디폴트 속성 확인 후 추가)

    return html`<${tag} class=${ifDefined(this.preset)} style=${ifDefined(
      this.styled
    )}>${this.text}</${tag}>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'dwc-typography': Typography;
  }
}
