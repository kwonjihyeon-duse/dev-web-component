import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import type { TooltipElement } from './tooltip';

import './tooltip';

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
  title: 'Tooltip/Default',
  tags: ['autodocs'],
  component: 'dwc-tooltip',
  render: (args: TooltipElement) => html`<dwc-tooltip
    direction=${args.direction}
    styled=${args.styled}
    standard=${args.standard}
    range=${args.range}
    size=${args.size}
  >
    <div slot="contents" style="color: white">툴팁입니다.</div>
  </dwc-tooltip>`,
  argTypes: {
    direction: { control: '' },
    size: {
      control: { type: 'inline-radio' },
      options: ['medium', 'large'],
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
} satisfies Meta<TooltipElement>;
export default meta;

type Story = StoryObj<TooltipElement>;

export const Default: Story = {
  args: {
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

export const LargeTooltip: Story = {
  args: {
    ...Default.args,
    size: 'large',
  },
};

export const Normal: Story = {
  args: {
    size: 'large',
  },
};
