import { Meta, StoryObj } from '@storybook/web-components';
import { AvatarProps } from './Avatar';
import './Avatar';
import { html } from 'lit';

const meta = {
  title: 'Components/Avatar',
  tags: ['autodocs'],
  render: (args: AvatarProps) =>
    html`<base-avatar link=${args.link} size=${args.size}></base-avatar>`,
  argTypes: {
    size: {
      control: {
        type: 'select',
      },
      options: ['sm', 'md', 'lg', 'xlg'],
    },
  },
} satisfies Meta<AvatarProps>;

export default meta;
type Story = StoryObj<AvatarProps>;

export const Default: Story = {
  args: {
    link: '',
    size: 'md',
  },
};

export const DefaultImage = {
  render: () => html`
    <div style="display:flex">
      <base-avatar size="sm" style="margin-right:12px;"></base-avatar>
      <base-avatar size="md" style="margin-right:12px;"></base-avatar>
      <base-avatar size="lg" style="margin-right:12px;"></base-avatar>
      <base-avatar size="xlg" style="margin-right:12px;"></base-avatar>
    </div>
  `,
};

export const HasImage = {
  render: () => html`
    <div style="display:flex">
      <base-avatar
        link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHGbemCSY3JhKeqkaa8T04WaI8QFpSII7KAw&usqp=CAU"
        size="sm"
        style="margin-right:12px;"
      ></base-avatar>
      <base-avatar
        link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHGbemCSY3JhKeqkaa8T04WaI8QFpSII7KAw&usqp=CAU"
        size="md"
        style="margin-right:12px;"
      ></base-avatar>
      <base-avatar
        link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHGbemCSY3JhKeqkaa8T04WaI8QFpSII7KAw&usqp=CAU"
        size="lg"
        style="margin-right:12px;"
      ></base-avatar>
      <base-avatar
        link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHGbemCSY3JhKeqkaa8T04WaI8QFpSII7KAw&usqp=CAU"
        size="xlg"
        style="margin-right:12px;"
      ></base-avatar>
    </div>
  `,
};
