import type { Meta, StoryObj } from '@storybook/web-components';
import type { Label } from './label';

import './label';

const meta = {
  title: 'Label/Default',
  tags: ['autodocs'],
  component: 'dwc-label',
  argTypes: {
    position: {
      control: { type: 'inline-radio' },
      options: ['default', 'left', 'right'],
    },
    width: {
      control: { type: 'number'},
      defaultValue: 24
    },
    height: {
      control: { type: 'number'},
      defaultValue: 24
    }
  }
} satisfies Meta<Label>;
export default meta;

type Story = StoryObj<Label>;

export const Primary: Story = {
  args: {
    text: "태그입니다.",
    preset: "primary",
  },
};

export const SecondaryRightIcon: Story = {
    args: {
      ...Primary.args,
      preset: "secondary",
      position: "right"
    },
  };

export const TertiaryLeftIcon: Story = {
  args: {
    ...Primary.args,
    preset: "tertiary",
    position: 'left'
  },
};

export const Preset: Story = {
  args: {
    text: "태그입니다.",
    preset: "bg-green-100 text-green-600",
    position: 'left'
  },
};
