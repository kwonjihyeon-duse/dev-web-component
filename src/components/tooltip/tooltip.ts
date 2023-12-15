import { customElement, property, state } from 'lit/decorators.js';
import { html } from 'lit/static-html.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import TailwindElement from '../../shared/tailwind.element';
import style from './tooltip.scss?inline';

/**
 * Tooltip element.
 *
 * @direction 위, 아래 화살표 방향을 표현 : up, down (없으면 화살표 나오지 않으며 default - 기본 툴팁)
 * @styled 툴팁 전체 style
 * @standard 화살표 위치를 지정 : left(defualt), right
 * @range 좌, 우로 몇 px 움직일 지 결정 : 숫자만 가능, defualt : 10px
 * @size 툴팁 크기
 * @status 툴팁 display 여부 - string (default - "true" 보임 / "false")
 * @contents slot 이름
 */
@customElement('dwc-tooltip')
export class TooltipElement extends TailwindElement(style) {
  @property({ type: String }) direction = '';
  @property({ type: String }) styled = '';
  @property({ type: String }) standard = '';
  @property({ type: Number }) range = 0;
  @property({ type: String }) size = 'medium';
  @property({ type: Number }) status = 0;
  // 1. boolean props 판단 불가 github - https://github.com/lit/lit-element/issues/819
  // 2. isOpen, status / status 선택하지 않은 이유
  //    - 1번과 동일한 사유, props가 true로 판단되는 상황에서 두개의 Props 판단하려면 어짜피 attribute 넣고 빼기가 필요.
  //    - but, 이 과정이 번거롭지않다면 이 방법도 괜찮을 듯 !
  // 3. 숫자 -1, 0, 1 이상을 선택한 이유
  //    - -1, 0 으로 클릭 시 바로 없어지는 css, 1이상의 값은 animation으로 주는 게 지금 플로우상 모든 케이스를 커버 가능할 것이라 예상.
  //    - 따로 attribute 넣고 빼는 작업없이 변수로 조정 가능

  @state() _actionId = '';
  private _hideAfterSeconds = (seconds: number) => {
    setTimeout(() => {
      this._actionId = 'hideAnimation';
    }, seconds * 1000);
  };

  render() {
    const HIDE = -1;
    const SHOW = 0;
    if (this.status === HIDE) {
      this._actionId = 'clicked';
    } else if (this.status !== SHOW) {
      this._hideAfterSeconds(this.status);
    }

    const range =
      this.range && Number.isInteger(this.range) ? `${this.range}px` : '10px';

    return html`<div
      class=${[
        `tooltip-wrapper`,
        this.size,
        this.direction ? '' : 'white',
        this._actionId,
      ].join(' ')}
      style="${this.styled}"
    >
      <span
        class="${ifDefined(this.direction)}"
        style="${this.standard ? this.standard : 'left'}:${range};"
      ></span>
      <slot name="contents"></slot>
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'dwc-tooltip': TooltipElement;
  }
}
