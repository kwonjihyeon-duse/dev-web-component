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
      <div slot="contents">툴팁입니다.</div>
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
    slot: {},
    styled: {},
  },
} satisfies Meta<Tooltip>;
export default meta;

type Story = StoryObj<Tooltip>;

export const Default: Story = {
  args: {
    status: 0,
    name: 'body-4 text-white',
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

export const RightStandard30: Story = {
  args: {
    ...Default.args,
    standard: 'right',
    range: 30,
  },
};

export const WhiteBackgroundDown: Story = {
  args: {
    ...Default.args,
    name: 'body-4 text-gray-700',
    direction: 'down',
    color: 'light',
  },
};
