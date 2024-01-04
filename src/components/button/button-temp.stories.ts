import type { Meta, StoryObj } from '@storybook/web-components';
import type { ButtonProps } from './Button';
import './Button';
// import '../Icons/PlusIcon';
import { html } from 'lit';

const Template = (args: ButtonProps) => html`
  <base-button
    style="margin: 0 0.5rem"
    color=${args.color || 'primary'}
    backgroundColor=${args.backgroundColor || ''}
    size=${args.size || 'md'}
    label=${args.label}
    type=${args.type || 'basic'}
    ?disabled=${args.disabled}
    @click=${args.onClick}
  ></base-button>
`;

const meta = {
  title: 'Components/Button',
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
    color: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'gray'],
    },
  },
  component: 'my-button',
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

export const Primary = {
  render: () => html` <div style="display:flex">
    <base-button
      style="margin-right:6px"
      size="lg"
      label="Click Me!"
      color="primary"
    ></base-button>

    <base-button
      style="margin-right:6px"
      size="lg"
      label="Click Me!"
      color="primary"
      type="basic"
    ></base-button>

    <base-button
      style="margin-right:6px"
      size="lg"
      label="Click Me!"
      color="primary"
      type="round"
    ></base-button>
  </div>`,
};

export const Secondary = {
  render: () => html` <div style="display:flex">
    <base-button
      style="margin-right:6px"
      size="lg"
      label="Click Me!"
      color="secondary"
    ></base-button>

    <base-button
      style="margin-right:6px"
      size="lg"
      label="Click Me!"
      color="secondary"
      type="basic"
    ></base-button>

    <base-button
      style="margin-right:6px"
      size="lg"
      label="Click Me!"
      color="secondary"
      type="round"
    ></base-button>
  </div>`,
};

export const Gray = {
  render: () => html` <div style="display:flex">
    <base-button
      style="margin-right:6px"
      size="lg"
      label="Click Me!"
      color="gray"
    ></base-button>

    <base-button
      style="margin-right:6px"
      size="lg"
      label="Click Me!"
      color="gray"
      type="basic"
    ></base-button>

    <base-button
      style="margin-right:6px"
      size="lg"
      label="Click Me!"
      color="gray"
      type="round"
    ></base-button>
  </div>`,
};

export const ButtonSize = {
  render: () => html` <div style="display:flex">
    <base-button
      style="margin-right:6px"
      size="sm"
      label="Click Me!"
    ></base-button>

    <base-button style="margin-right:6px" label="Click Me!"></base-button>

    <base-button
      style="margin-right:6px"
      size="lg"
      label="Click Me!"
    ></base-button>

    <base-button
      style="margin-right:6px"
      size="xl"
      label="Click Me!"
    ></base-button>
  </div>`,
};

export const IconButton = {
  render: () => html` <div style="display:flex">
    <base-button style="margin-right:6px" size="md">
      <plus-icon slot="leftIcon"></plus-icon>
    </base-button>
    <base-button style="margin-right:6px" size="md" label="Click Me!">
      <plus-icon slot="leftIcon"></plus-icon>
    </base-button>
    <base-button style="margin-right:6px" size="md" label="Click Me!">
      <plus-icon slot="rightIcon"></plus-icon>
    </base-button>
  </div>`,
};
