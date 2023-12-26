import type { Meta, StoryObj } from '@storybook/web-components';
import type { Tags } from './tags';

import './tags';

const meta = {
  title: 'Tags/Default',
  tags: ['autodocs'],
  component: 'dwc-tags',
  argTypes: {
    position: {
        control: { type: 'inline-radio' },
        options: ['left', 'right'],
    },
    fill: {
        control: { type: 'color' },
    }
  }
} satisfies Meta<Tags>;
export default meta;

type Story = StoryObj<Tags>;

export const Default: Story = {
  args: {
    text: "태그입니다.",
    preset: "bg-gray-300",
    fill: "#000",
    position: 'left'
  },
};

export const DefaultRightIcon: Story = {
    args: {
      ...Default.args,
      position: "right"
    },
  };

export const WithoutIcon: Story = {
  args: {
    ...Default.args,
    preset: "bg-gray-300 text"
  },
};

export const Accent: Story = {
  args: {
    ...Default.args,
    preset: "bg-green-100 text-green-600",
    fill: '#1DB177',
  },
};
