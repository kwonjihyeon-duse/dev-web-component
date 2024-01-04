import type { Meta, StoryObj } from '@storybook/web-components';
import type { Button } from './button';
import './text-button';
import { html } from 'lit';

const Template = (args: Button) => html`
  <dwc-text-button
    style="margin: 0 0.5rem"
    color=${args.color || 'primary'}
    backgroundColor=${args.backgroundColor || ''}
    size=${args.size || 'md'}
    label=${args.label}
    type=${args.type || 'basic'}
    ?disabled=${args.disabled}
    @click=${args.onClick}
  ></dwc-text-button>
`;

const meta = {
  title: 'Components/TextButton',
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
  component: 'dwc-text-button',
} satisfies Meta<Button>;

export default meta;
type Story = StoryObj<Button>;

export const Default: Story = {
  args: {
    size: 'lg',
    label: 'Click Me!',
    color: 'primary',
  },
};

export const Primary = {
  render: () => html`
    <div style="display:flex">
      <dwc-text-button
        style="margin-right:6px"
        label="click me!"
      ></dwc-text-button>
      <dwc-text-button
        style="margin-right:6px"
        label="click me!"
        type="solid"
      ></dwc-text-button>
      <dwc-text-button
        style="margin-right:6px"
        label="click me!"
        type="round"
      ></dwc-text-button>
    </div>
  `,
};

export const Secondary = {
  render: () => html`
    <div style="display:flex">
      <dwc-text-button
        style="margin-right:6px"
        label="click me!"
        color="secondary"
      ></dwc-text-button>
      <dwc-text-button
        style="margin-right:6px"
        label="click me!"
        color="secondary"
        type="solid"
      ></dwc-text-button>
      <dwc-text-button
        style="margin-right:6px"
        label="click me!"
        color="secondary"
        type="round"
      ></dwc-text-button>
    </div>
  `,
};

export const Gray = {
  render: () => html`
    <div style="display:flex">
      <dwc-text-button
        style="margin-right:6px"
        label="click me!"
        color="gray"
      ></dwc-text-button>
      <dwc-text-button
        style="margin-right:6px"
        label="click me!"
        color="gray"
        type="solid"
      ></dwc-text-button>
      <dwc-text-button
        style="margin-right:6px"
        label="click me!"
        color="gray"
        type="round"
      ></dwc-text-button>
    </div>
  `,
};

export const IconButton = {
  render: () => html` <div style="display:flex">
    <dwc-text-button style="margin-right:6px" size="md">
      <plus-icon slot="leftIcon" color="#1DB177"></plus-icon>
    </dwc-text-button>
    <dwc-text-button style="margin-right:6px" size="md" label="Click Me!">
      <plus-icon slot="leftIcon" color="#1DB177"></plus-icon>
    </dwc-text-button>
    <dwc-text-button style="margin-right:6px" size="md" label="Click Me!">
      <plus-icon slot="rightIcon" color="#1DB177"></plus-icon>
    </dwc-text-button>
  </div>`,
};
