import type { Meta, StoryObj } from '@storybook/web-components';
import type { Button } from './button';
import './text-button';
import '../icon/icon';
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
  title: 'Components/Buttons/TextButton',
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
      options: ['primary', 'secondary', 'gray'],
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
  render: () =>
    html`<div style="display:flex; align-items:center">
      <dwc-text-button style="margin-right:6px" size="xs" label="Click Me!"></dwc-text-button>
      <dwc-text-button style="margin-right:6px" size="sm" label="Click Me!"></dwc-text-button>
      <dwc-text-button style="margin-right:6px" label="Click Me!"></dwc-text-button>
      <dwc-text-button style="margin-right:6px" size="lg" label="Click Me!"></dwc-text-button>
      <dwc-text-button style="margin-right:6px" size="xl" label="Click Me!"></dwc-text-button>
      <div style="width:300px; height:51px">
        <dwc-text-button style="margin-right:6px" size="lg" label="Click Me!" full></dwc-text-button>
      </div>
    </div>`,
};

export const Disabled = {
  render: () =>
    html`<div style="display:flex; align-items:center">
      <dwc-text-button style="margin-right:6px" size="xs" label="Click Me!" disabled></dwc-text-button>
      <dwc-text-button style="margin-right:6px" size="sm" label="Click Me!" disabled></dwc-text-button>
      <dwc-text-button style="margin-right:6px" label="Click Me!" disabled></dwc-text-button>
      <dwc-text-button style="margin-right:6px" size="lg" label="Click Me!" disabled></dwc-text-button>
      <dwc-text-button style="margin-right:6px" size="xl" label="Click Me!" disabled></dwc-text-button>
      <div style="width:300px; height:51px">
        <dwc-text-button style="margin-right:6px" size="lg" label="Click Me!" disabled full></dwc-text-button>
      </div>
    </div>`,
};

export const IconButton = {
  render: () =>
    html` <div style="display:flex">
      <dwc-text-button style="margin-right:6px" size="md">
        <dwc-icon size="24" name="ArrowRight"></dwc-icon>
      </dwc-text-button>
      <dwc-text-button style="margin-right:6px" size="md" label="Click Me!">
        <dwc-icon size="24" name="ArrowRight"></dwc-icon>
      </dwc-text-button>
      <dwc-text-button style="margin-right:6px" size="md" label="Click Me!">
        <dwc-icon slot="rightIcon" size="24" name="ArrowRight"></dwc-icon>
      </dwc-text-button>
      <dwc-text-button style="margin-right:6px" size="xs">
        <dwc-icon slot="rightIcon" size="24" name="ArrowRight"></dwc-icon>
      </dwc-text-button>
      <dwc-text-button style="margin-right:6px" size="sm">
        <dwc-icon slot="rightIcon" size="24" name="ArrowRight"></dwc-icon>
      </dwc-text-button>
      <dwc-text-button style="margin-right:6px" size="md">
        <dwc-icon slot="rightIcon" size="24" name="ArrowRight"></dwc-icon>
      </dwc-text-button>
      <dwc-text-button style="margin-right:6px" size="lg">
        <dwc-icon slot="rightIcon" size="24" name="ArrowRight"></dwc-icon>
      </dwc-text-button>
      <dwc-text-button style="margin-right:6px" size="xl">
        <dwc-icon slot="rightIcon" size="24" name="ArrowRight"></dwc-icon>
      </dwc-text-button>
    </div>`,
};
