import type { Meta, StoryObj } from '@storybook/web-components';
import './typography';
import { Typography } from './typography';

const meta = {
  title: 'Tyopgraphy/Default',
  tags: ['autodocs'],
  component: 'dwc-typography',
  argTypes: {
    text: { control: '' },
    tag: { control: '' },
    preset: { control: '' },
  },
} satisfies Meta<Typography>;
export default meta;

type Story = StoryObj<Typography>;
// interface Story {
//   args: {
//     text: string;
//     tag?: string;
//     preset?: string;
//   }
// };

export const P: Story = {
  args: {
    tag: '',
    text: 'default P 태그, text-green-300 컬러입니다.',
    preset: 'text-green-600',
  },
};

export const H1: Story = {
  args: {
    tag: 'h1',
    text: 'H1 태그입니다.',
  },
};

export const Span: Story = {
  args: {
    tag: 'span',
    text: 'span 태그, text-red-400 컬러, text-2xl 입니다.',
    preset: 'text-red-400 text-2xl',
  },
};
