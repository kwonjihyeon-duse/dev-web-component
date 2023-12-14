import type { Meta, StoryObj } from '@storybook/web-components';
import type { ButtonProps } from '../Button/Button';
import './OutlineButton';
import { html } from 'lit';
import '../Icons/PlusIcon';

const Template = (args: ButtonProps) => html`
  <outline-button
    style="margin: 0 0.5rem"
    color=${args.color || 'primary'}
    backgroundColor=${args.backgroundColor || ''}
    size=${args.size || 'md'}
    label=${args.label}
    type=${args.type || 'basic'}
    ?disabled=${args.disabled}
    @click=${args.onClick}
  ></outline-button>
`;

const meta = {
  title: 'Components/OutlineButton',
  tags: ['autodocs'],
  render: Template,
  argTypes: {
    backgroundColor: { control: 'color' },
    onClick: { action: 'onClick' },
    disabled: { control: 'boolean' },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'xl'],
    },
    type: {
      control: { type: 'select' },
      options: ['basic', 'solid', 'round'],
    },
    color: {
      control: { type: 'select' },
      options: ['primary', 'secondary'],
    },
  },
  component: 'outline-button',
} satisfies Meta<ButtonProps>;

export default meta;
type Story = StoryObj<ButtonProps>;

export const Default: Story = {
  args: {
    size: 'lg',
    label: 'Click Me!',
    color: 'primary',
  },
};

export const OutlineButtonPrimary = {
  render: () => html`
    <div style="display:flex">
      <outline-button
        style="margin-right:6px"
        label="click me!"
      ></outline-button>
      <outline-button
        style="margin-right:6px"
        label="click me!"
        type="solid"
      ></outline-button>
      <outline-button
        style="margin-right:6px"
        label="click me!"
        type="round"
      ></outline-button>
    </div>
  `,
};

export const OutlineButtonSecondary = {
  render: () => html`
    <div style="display:flex">
      <outline-button
        style="margin-right:6px"
        label="click me!"
        color="secondary"
      ></outline-button>
      <outline-button
        style="margin-right:6px"
        label="click me!"
        color="secondary"
        type="solid"
      ></outline-button>
      <outline-button
        style="margin-right:6px"
        label="click me!"
        color="secondary"
        type="round"
      ></outline-button>
    </div>
  `,
};

export const IconButton = {
  render: () => html` <div style="display:flex">
    <outline-button style="margin-right:6px" size="md">
      <plus-icon slot="leftIcon" color="#1DB177"></plus-icon>
    </outline-button>
    <outline-button style="margin-right:6px" size="md" label="Click Me!">
      <plus-icon slot="leftIcon" color="#1DB177"></plus-icon>
    </outline-button>
    <outline-button style="margin-right:6px" size="md" label="Click Me!">
      <plus-icon slot="rightIcon" color="#1DB177"></plus-icon>
    </outline-button>
  </div>`,
};
