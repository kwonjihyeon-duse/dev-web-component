import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import type { Tooltip } from './tooltip';

import './tooltip';

const meta = {
  title: 'Tooltip/Default',
  tags: ['autodocs'],
  component: 'dwc-tooltip',
  render: (args: Tooltip) => html`<dwc-tooltip
    direction=${args.direction}
    styled=${args.styled}
    standard=${args.standard}
    range=${args.range}
    color=${args.color}
  >
    <div slot="contents" style="color: ${args.color === 'white' ? '#555558' : "#fff"}">툴팁입니다.</div>
  </dwc-tooltip>`,
  argTypes: {
    direction: {    
      control: { type: 'inline-radio' },
      options: ['up', 'down'],
    },
    color: {
      control: { type: 'inline-radio' },
      options: ['default', 'white'],
    },
    standard: {
      control: { type: 'inline-radio' },
      options: ['left', 'right'],
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

export const Default: Story = {
  args: {
    color: "default",
    direction: 'up',
    standard: 'left',
    styled: { color: 'white' },
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
    color: 'white',
  },
};
