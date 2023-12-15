import { customElement, property } from 'lit/decorators.js';
import { literal, html, unsafeStatic } from 'lit/static-html.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import TailwindElement from '../../shared/tailwind.element';

type ITypo = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';

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
  @property() text: string = '';
  @property() tag?: ITypo;
  @property() preset?: string;
  @property() styled?: Partial<CSSStyleDeclaration>;

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
