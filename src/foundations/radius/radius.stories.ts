import type { Meta } from '@storybook/web-components';
import { html } from 'lit';

const MoRadius = [4, 8, 12, 16];
const PcRadius = [2, 6, 8, 12];

const MOTemplate = html`
  <div class="my-dwc-10" style="display: flex; align-items: center;">
    ${MoRadius.map(
      (item, index) =>
        html`<div
          key=${index}
          class="body-1"
          style="width:100%; gap: 20px; display: flex; flex-direction: column; align-items: center"
        >
          <div style="gap: 4px; display: flex; flex-direction: column; align-items: center">
            <div>mo-${index + 1}</div>
            <div>${item}px</div>
            <div>${item / 16}rem</div>
          </div>
          <div
            class="bg-white"
            style="width: 80px; height: 80px; border-radius: ${item}px; box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.25);"
          />
        </div>`,
    )}
  </div>
`;

const PCTemplate = html`
  <div class="my-dwc-10" style="display: flex; align-items: center;">
    ${PcRadius.map(
      (item, index) =>
        html`<div
          key=${index}
          class="body-1"
          style="width:100%; gap: 20px; display: flex; flex-direction: column; align-items: center"
        >
          <div style="gap: 4px; display: flex; flex-direction: column; align-items: center">
            <div>pc-${index + 1}</div>
            <div>${item}px</div>
            <div>${item / 16}rem</div>
          </div>
          <div
            class="bg-white"
            style="width: 80px; height: 80px; border-radius: ${item}px; box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.25);"
          />
        </div>`,
    )}
  </div>
`;

const Radius = () => html`
  <div style='display: flex; flex-direction: column;'>
    ${MOTemplate}
    <div style='width: 100%; height:1px; background: #f4f4f5'></div>
    ${PCTemplate}
  </div
`;

const meta = {
  title: 'Foundations/Radius',
  tags: ['autodocs'],
  render: Radius,
} satisfies Meta;
export default meta;

export const Default = {};

export const PC = {
  render: () => PCTemplate,
};

export const MO = {
  render: () => MOTemplate,
};
