import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import type { Tooltip } from './tooltip';

import './tooltip';

const meta = {
  title: 'Components/Tooltip',
  tags: ['autodocs'],
  component: 'dwc-tooltip',
  decorators: [(Story) => html`<div class="flex justify-center items-center min-h-28">${Story()}</div>`],
  render: (args: Tooltip) =>
    html`<dwc-tooltip
      direction=${args.direction}
      styled=${args.styled}
      range=${args.range}
      color=${args.color}
      preset=${args.preset}
      status=${args.status}
    >
      <div slot="contents">툴팁입니다.</div>
    </dwc-tooltip>`,
  argTypes: {
    direction: {
      control: { type: 'inline-radio' },
      options: ['TOP_LEFT', 'TOP_RIGHT', 'BOTTOM_LEFT', 'BOTTOM_RIGHT', 'CENTER_LEFT', 'CENTER_RIGHT'],
    },
    color: {
      control: { type: 'inline-radio' },
      options: ['dark', 'light'],
    },
    range: {
      control: { type: 'number' },
    },
    slot: {},
    styled: {},
  },
} satisfies Meta<Tooltip>;
export default meta;

type Story = StoryObj<Tooltip>;

export const TopLeft: Story = {
  args: {
    status: 0,
    preset: 'trg-14 text-white',
    color: 'dark',
    direction: 'TOP_LEFT',
  },
};

export const TopRight: Story = {
  args: {
    ...TopLeft.args,
    direction: 'TOP_RIGHT',
  },
};

export const BottomLeft20: Story = {
  args: {
    ...TopLeft.args,
    direction: 'BOTTOM_LEFT',
    range: 20,
  },
};

export const BottomRight: Story = {
  args: {
    ...TopLeft.args,
    direction: 'BOTTOM_RIGHT',
  },
};

export const WhiteCenterRight: Story = {
  args: {
    ...TopLeft.args,
    preset: 'trg-14 text-gray-700',
    direction: 'CENTER_RIGHT',
    color: 'light',
  },
};

export const WhiteCenterLeft20: Story = {
  args: {
    ...WhiteCenterRight.args,
    direction: 'CENTER_LEFT',
    range: 20,
  },
};
