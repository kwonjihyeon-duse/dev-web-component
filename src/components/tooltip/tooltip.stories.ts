import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import type { Tooltip } from './tooltip';

import './tooltip';

const meta = {
  title: 'Components/Tooltip',
  tags: ['autodocs'],
  component: 'dwc-tooltip',
  render: (args: Tooltip) =>
    html`<dwc-tooltip
      direction=${args.direction}
      styled=${args.styled}
      standard=${args.standard}
      range=${args.range}
      color=${args.color}
      name=${args.name}
      status=${args.status}
    >
      <div slot="contents" style="color: ${args.color === 'light' ? '#555558' : '#fff'}">툴팁입니다.</div>
    </dwc-tooltip>`,
  argTypes: {
    direction: {
      control: { type: 'inline-radio' },
      options: ['up', 'down'],
    },
    color: {
      control: { type: 'inline-radio' },
      options: ['dark', 'light'],
    },
    standard: {
      control: { type: 'inline-radio' },
      options: ['left', 'right'],
    },
    range: {
      control: { type: 'number' },
    },
    status: {
      control: { type: 'inline-radio' },
      options: [-1, 0, 1],
    },
    // status: 스토리북 - lit 실시간 적용이 되지 않는다. (라이프사이클 차이)
    slot: {},
    styled: {},
  },
} satisfies Meta<Tooltip>;
export default meta;

type Story = StoryObj<Tooltip>;

export const Default: Story = {
  args: {
    status: 0,
    name: 'body-4',
    color: 'dark',
    direction: 'up',
    standard: 'left',
  },
};

export const ArrowDirectionDown: Story = {
  args: {
    ...Default.args,
    direction: 'down',
  },
};

export const RightStandard50: Story = {
  args: {
    ...Default.args,
    standard: 'right',
    range: 50,
  },
};

export const WhiteBackgroundDownTooltip: Story = {
  args: {
    ...Default.args,
    direction: 'down',
    range: 70,
    color: 'light',
  },
};
