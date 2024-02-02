import type { Meta, StoryObj } from '@storybook/web-components';
import type { Button } from '../button/button';
import './outline-button';
import '../icon/icon';
import { html } from 'lit';

const Template = (args: Button) => html`
  <dwc-outline-button
    style="margin: 0 0.5rem"
    color=${args.color || 'primary'}
    backgroundColor=${args.backgroundColor || ''}
    size=${args.size || 'md'}
    label=${args.label}
    type=${args.type || 'basic'}
    ?disabled=${args.disabled}
    @click=${args.onClick}
  ></dwc-outline-button>
`;

const meta = {
  title: 'Components/Buttons/OutlineButton',
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
  component: 'dwc-outline-button',
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
    <div style="display:flex; align-items:center">
      <dwc-outline-button style="margin-right:6px" label="click me!" size="xs"></dwc-outline-button>
      <dwc-outline-button style="margin-right:6px" label="click me!" size="sm"></dwc-outline-button>
      <dwc-outline-button style="margin-right:6px" label="click me!" size="md"></dwc-outline-button>
      <dwc-outline-button style="margin-right:6px" label="click me!" size="lg"></dwc-outline-button>
      <dwc-outline-button style="margin-right:6px" label="click me!" size="xl"></dwc-outline-button>
      <div style="width:300px; height:51px">
        <dwc-outline-button style="margin-right:6px" size="lg" label="Click Me!" full></dwc-outline-button>
      </div>
    </div>
  `,
};

export const Secondary = {
  render: () => html`
    <div style="display:flex; align-items:center">
      <dwc-outline-button style="margin-right:6px" label="click me!" size="xs" color="secondary"></dwc-outline-button>
      <dwc-outline-button style="margin-right:6px" label="click me!" size="sm" color="secondary"></dwc-outline-button>
      <dwc-outline-button style="margin-right:6px" label="click me!" size="md" color="secondary"></dwc-outline-button>
      <dwc-outline-button style="margin-right:6px" label="click me!" size="lg" color="secondary"></dwc-outline-button>
      <dwc-outline-button style="margin-right:6px" label="click me!" size="xl" color="secondary"></dwc-outline-button>
      <div style="width:300px; height:51px">
        <dwc-outline-button
          style="margin-right:6px"
          size="lg"
          label="Click Me!"
          color="secondary"
          full
        ></dwc-outline-button>
      </div>
    </div>
  `,
};

export const Disabled = {
  render: () => html`
    <div style="display:flex; align-items:center">
      <dwc-outline-button
        style="margin-right:6px"
        label="click me!"
        size="xs"
        color="secondary"
        disabled
      ></dwc-outline-button>
      <dwc-outline-button
        style="margin-right:6px"
        label="click me!"
        size="sm"
        color="secondary"
        disabled
      ></dwc-outline-button>
      <dwc-outline-button
        style="margin-right:6px"
        label="click me!"
        size="md"
        color="secondary"
        disabled
      ></dwc-outline-button>
      <dwc-outline-button
        style="margin-right:6px"
        label="click me!"
        size="lg"
        color="secondary"
        disabled
      ></dwc-outline-button>
      <dwc-outline-button
        style="margin-right:6px"
        label="click me!"
        size="xl"
        color="secondary"
        disabled
      ></dwc-outline-button>
      <div style="width:300px; height:51px">
        <dwc-outline-button
          style="margin-right:6px"
          size="lg"
          label="Click Me!"
          color="secondary"
          full
          disabled
        ></dwc-outline-button>
      </div>
    </div>
  `,
};

export const IconButton = {
  render: () =>
    html` <div style="display:flex">
      <dwc-outline-button style="margin-right:6px" size="md">
        <dwc-icon size="24" name="ArrowRight"></dwc-icon>
      </dwc-outline-button>
      <dwc-outline-button style="margin-right:6px" size="md" label="Click Me!">
        <dwc-icon size="24" name="ArrowRight"></dwc-icon>
      </dwc-outline-button>
      <dwc-outline-button style="margin-right:6px" size="md" label="Click Me!">
        <dwc-icon slot="rightIcon" size="24" name="ArrowRight"></dwc-icon>
      </dwc-outline-button>
      <dwc-outline-button style="margin-right:6px" size="xs">
        <dwc-icon slot="rightIcon" size="24" name="ArrowRight"></dwc-icon>
      </dwc-outline-button>
      <dwc-outline-button style="margin-right:6px" size="sm">
        <dwc-icon slot="rightIcon" size="24" name="ArrowRight"></dwc-icon>
      </dwc-outline-button>
      <dwc-outline-button style="margin-right:6px" size="md">
        <dwc-icon slot="rightIcon" size="24" name="ArrowRight"></dwc-icon>
      </dwc-outline-button>
      <dwc-outline-button style="margin-right:6px" size="lg">
        <dwc-icon slot="rightIcon" size="24" name="ArrowRight"></dwc-icon>
      </dwc-outline-button>
      <dwc-outline-button style="margin-right:6px" size="xl">
        <dwc-icon slot="rightIcon" size="24" name="ArrowRight"></dwc-icon>
      </dwc-outline-button>
    </div>`,
};
