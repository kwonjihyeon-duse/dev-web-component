import { customElement, property, state } from 'lit/decorators.js';
import { html } from 'lit/static-html.js';
import TailwindElement from '../../shared/tailwind.element';
import style from './tooltip.scss?inline';

type IDirection = 'TOP_LEFT' | 'TOP_RIGHT' | 'BOTTOM_LEFT' | 'BOTTOM_RIGHT' | 'CENTER_LEFT' | 'CENTER_RIGHT';

/**
 * Tooltip element.
 *
 * @preset 툴팁 전체 class
 * @color 툴팁 타입 (default - dark)
 * @direction 위, 아래, 왼쪽, 오른쪽 화살표 방향을 표현 (default - TOP_LEFT)
 * @styled 툴팁 전체 style
 * @range 좌, 우로 몇 px 움직일 지 결정 : 숫자만 가능, default : 10px
 * @status 툴팁 display 여부 -1, 0(default), 1
 * @contents slot 이름
 */
@customElement('dwc-tooltip')
export class Tooltip extends TailwindElement(style) {
  @state() _standard = 'left'; // arrow position
  @state() _actionId = ''; // className

  @property() preset?: string = '';
  @property() color?: 'light' | 'dark' = 'dark';
  @property() direction: IDirection = 'TOP_LEFT';
  @property() styled?: Partial<CSSStyleDeclaration>;
  @property() range?: number;
  @property() status = 0;
  // 1. boolean props 판단 불가 github - https://github.com/lit/lit-element/issues/819
  // 2. isOpen, status / status 선택하지 않은 이유
  //    - 1번과 동일한 사유, props가 true로 판단되는 상황에서 두개의 Props 판단하려면 어짜피 attribute 넣고 빼기가 필요.
  //    - but, 이 과정이 번거롭지않다면 이 방법도 괜찮을 듯 !
  // 3. 숫자 -1, 0, 1 이상을 선택한 이유
  //    - -1 으로 설정 시 바로 없어지고 0 으로 설정 시 보여주는 css, 1이상의 값은 animation으로 주는 게 지금 플로우상 모든 케이스를 커버 가능할 것이라 예상.
  //    - 따로 attribute 넣고 빼는 작업없이 변수로 조정 가능

  private _hideAfterSeconds = (seconds: number) => {
    if (typeof seconds !== 'number') return;

    setTimeout(() => {
      this._actionId = 'hide-tooltip';
    }, seconds * 1000);
  };

  render() {
    const HIDE = -1;
    const SHOW = 0;

    switch (Number(this.status)) {
      case HIDE:
        this._actionId = 'click-tooltip';
        break;
      case SHOW:
        this._actionId = '';
        break;
      default:
        this._hideAfterSeconds(Number(this.status));
    }

    switch (this.direction) {
      case 'TOP_LEFT':
      case 'BOTTOM_LEFT':
        this._standard = 'left';
        break;
      case 'TOP_RIGHT':
      case 'BOTTOM_RIGHT':
        this._standard = 'right';
        break;
      case 'CENTER_LEFT':
        this._standard = 'top';
        break;
      case 'CENTER_RIGHT':
        this._standard = 'bottom';
        break;
    }

    const range = this.range && Number(this.range) ? `${this.range}px` : '10px';

    return html`<div
      style="${this.styled}"
      class="${[`tooltip-wrapper`, this.color].join(' ')} ${this.preset} ${this._actionId}"
    >
      <span class="${this.direction}" style="${this._standard}: ${range};"></span>
      <slot name="contents"></slot>
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'dwc-tooltip': Tooltip;
  }
}
