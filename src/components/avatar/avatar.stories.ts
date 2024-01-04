import { Meta, StoryObj } from '@storybook/web-components';
import { Avatar } from './avatar';
import './avatar';
import { html } from 'lit';

const meta = {
  title: 'Components/Avatar',
  tags: ['autodocs'],
  render: (args: Avatar) =>
    html`<dwc-avatar link=${args.link} size=${args.size}></dwc-avatar>`,
  argTypes: {
    size: {
      control: {
        type: 'select',
      },
      options: ['sm', 'md', 'lg', 'xlg'],
    },
  },
} satisfies Meta<Avatar>;

export default meta;
type Story = StoryObj<Avatar>;

export const Default: Story = {
  args: {
    link: '',
    size: 'md',
  },
};

export const DefaultImage = {
  render: () => html`
    <div style="display:flex">
      <dwc-avatar size="sm" style="margin-right:12px;"></dwc-avatar>
      <dwc-avatar size="md" style="margin-right:12px;"></dwc-avatar>
      <dwc-avatar size="lg" style="margin-right:12px;"></dwc-avatar>
      <dwc-avatar size="xlg" style="margin-right:12px;"></dwc-avatar>
    </div>
  `,
};

export const HasImage = {
  render: () => html`
    <div style="display:flex">
      <dwc-avatar
        link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHGbemCSY3JhKeqkaa8T04WaI8QFpSII7KAw&usqp=CAU"
        size="sm"
        style="margin-right:12px;"
      ></dwc-avatar>
      <dwc-avatar
        link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHGbemCSY3JhKeqkaa8T04WaI8QFpSII7KAw&usqp=CAU"
        size="md"
        style="margin-right:12px;"
      ></dwc-avatar>
      <dwc-avatar
        link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHGbemCSY3JhKeqkaa8T04WaI8QFpSII7KAw&usqp=CAU"
        size="lg"
        style="margin-right:12px;"
      ></dwc-avatar>
      <dwc-avatar
        link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHGbemCSY3JhKeqkaa8T04WaI8QFpSII7KAw&usqp=CAU"
        size="xlg"
        style="margin-right:12px;"
      ></dwc-avatar>
    </div>
  `,
};
