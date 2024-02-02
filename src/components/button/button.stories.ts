import type { Meta, StoryObj } from '@storybook/web-components';
import type { Button } from './button';
import './button';
import '../icon/icon';
import { html } from 'lit';

const Template = (args: Button) => html`
  <dwc-button
    style="margin: 0 0.5rem"
    color=${args.color || 'primary'}
    backgroundColor=${args.backgroundColor || ''}
    size=${args.size || 'md'}
    label=${args.label}
    type=${args.type || 'basic'}
    ?disabled=${args.disabled}
    @click=${args.onClick}
  ></dwc-button>
`;

const meta = {
  title: 'Components/Buttons/Button',
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
      options: ['basic', 'round'],
    },
    color: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'gray'],
    },
  },
  component: 'dwc-button',
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
    html` <div style="display:flex">
      <dwc-button style="margin-right:6px" size="lg" label="Click Me!" color="primary"></dwc-button>

      <dwc-button style="margin-right:6px" size="lg" label="Click Me!" color="primary" type="round"></dwc-button>
    </div>`,
};

export const Secondary = {
  render: () =>
    html` <div style="display:flex">
      <dwc-button style="margin-right:6px" size="lg" label="Click Me!" color="secondary"></dwc-button>

      <dwc-button style="margin-right:6px" size="lg" label="Click Me!" color="secondary" type="round"></dwc-button>
    </div>`,
};

export const Gray = {
  render: () =>
    html` <div style="display:flex">
      <dwc-button style="margin-right:6px" size="lg" label="Click Me!" color="gray"></dwc-button>

      <dwc-button style="margin-right:6px" size="lg" label="Click Me!" color="gray" type="round"></dwc-button>
    </div>`,
};

export const ButtonSize = {
  render: () =>
    html` <div style="display:flex">
      <dwc-button style="margin-right:6px" size="sm" label="Click Me!"></dwc-button>

      <dwc-button style="margin-right:6px" label="Click Me!"></dwc-button>

      <dwc-button style="margin-right:6px" size="lg" label="Click Me!"></dwc-button>

      <dwc-button style="margin-right:6px" size="xl" label="Click Me!"></dwc-button>
    </div>`,
};

export const IconButton = {
  render: () =>
    html` <div style="display:flex">
      <dwc-button style="margin-right:6px" size="md">
        <dwc-icon size="24" name="ArrowRight"></dwc-icon>
      </dwc-button>
      <dwc-button style="margin-right:6px" size="md" label="Click Me!">
        <dwc-icon size="24" name="ArrowRight"></dwc-icon>
      </dwc-button>
      <dwc-button style="margin-right:6px" size="md" label="Click Me!">
        <dwc-icon slot="rightIcon" size="24" name="ArrowRight"></dwc-icon>
      </dwc-button>
    </div>`,
};
