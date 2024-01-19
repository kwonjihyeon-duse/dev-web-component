import type { Meta } from '@storybook/web-components';
import { html } from 'lit';

const SpacingArr = [2, 4, 6, 8, 12, 16, 20, 24, 32, 40];

const Spacing = () => html`
  <div style='display: flex; flex-direction: column;'>
    <div>
      ${SpacingArr.map(
        (item, index) =>
          html`<div
            key=${index}
            class="body-1"
            style="width: 100%; gap: 32px; display: flex; margin: 8px 0; align-items: center"
          >
            <div style="width:60px">dwc-${index + 1}</div>
            <div style="width:60px">${item}px</div>
            <div style="width:60px">${item / 16}rem</div>
            <div style="width: ${item}px; height:32px; background: #FFBBBB"></div>
          </div>`,
      )}
    </div> 
  </div
`;

const meta = {
  title: 'Foundations/Spacing',
  tags: ['autodocs'],
  render: Spacing,
} satisfies Meta;
export default meta;

export const Default = {};
