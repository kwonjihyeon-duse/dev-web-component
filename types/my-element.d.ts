import { LitElement } from 'lit';

export declare class MyElement extends LitElement {
  static style: import('lit').CSSResult;

  name: string;

  count: number;
  render(): import('lit-html').TemplateResult<1>;
  private _onClick;
  foo(): string;
}

declare global {
  interface HTMLElementTagNameMap {
    'my-element': MyElement;
  }
}
