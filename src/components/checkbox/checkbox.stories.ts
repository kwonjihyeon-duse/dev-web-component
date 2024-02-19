import type { Meta, StoryObj } from '@storybook/web-components';
import type { Checkbox } from './checkbox';
import './checkbox';
import '../icon/icon';
import { html } from 'lit';

const Template = (args: Checkbox) => html`
  <dwc-checkbox
    label=${args.label}
    id=${args.id}
    name=${args.name}
    size=${args.size || 'sm'}
    ?value=${args.value}
    ?disabled=${args.disabled}
    .onClick=${args.onClick}
  />
`;

const meta = {
  title: 'Components/Checkbox',
  tags: ['autodocs'],
  render: Template,
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md'],
      defaultValue: 'sm',
    },
    label: {
      control: {
        type: 'text',
      },
      description: 'checkbox label',
    },
    id: {
      control: {
        type: 'text',
      },
      description: 'checkbox id',
    },
    name: {
      control: {
        type: 'text',
      },
      description: 'checkbox name 값이 없으면 id로 대체됩니다.',
    },
    value: {
      control: {
        type: 'boolean',
      },
      description: 'checkbox value boolean 값으로 설정합니다.',
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
  },
  component: 'dwc-button',
} satisfies Meta<Checkbox>;

export default meta;
type Story = StoryObj<Checkbox>;

let checkboxDefaultValue = true;
let checkboxSmallValue = false;
let checkboxMediumValue = false;

const onClick = (checked: boolean) => {
  checkboxDefaultValue = checked;
};

const onClickSmall = (checked: boolean) => {
  checkboxSmallValue = checked;
};

const onClickMedium = (checked: boolean) => {
  console.log('small');
  checkboxMediumValue = checked;
};

export const Default: Story = {
  args: {
    size: 'sm',
    label: 'Small',
    id: 'small',
    name: 'small',
    value: checkboxDefaultValue,
    onClick,
  },
};

export const CheckboxSize = {
  render: () =>
    html`<div style="display:flex;">
      <div style="margin-right:12px">
        <dwc-checkbox label="small" id="small" value=${checkboxSmallValue} .onClick=${onClickSmall}></dwc-checkbox>
      </div>
      <div>
        <dwc-checkbox
          size="md"
          label="medium"
          id="medium"
          value=${checkboxMediumValue}
          .onClick=${onClickMedium}
        ></dwc-checkbox>
      </div>
    </div> `,
};
