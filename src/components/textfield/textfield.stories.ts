import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import type { Textfield } from './textfield';

import './textfield';
import IconMap from '../icon/svgs';

const meta = {
  title: 'Components/Textfield',
  tags: ['autodocs'],
  component: 'dwc-textfield',
  decorators: [(Story) => html`<div class="flex justify-center items-center min-h-28">${Story()}</div>`],
  args: {
    value: '',
  },
  argTypes: {
    fieldSize: {
      control: { type: 'inline-radio' },
      options: ['md', 'lg'],
    },
    isBoxed: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    isError: {
      control: { type: 'boolean' },
    },
    label: {
      control: { type: 'text' },
      description: 'label 값 없을 경우 비노출',
    },
    helperText: {
      control: { type: 'text' },
      description: 'Helper text 값 없을 경우 비노출',
    },
    suffix: {
      control: { type: 'text' },
      description: 'suffix 값 없을 경우 비노출',
    },
    name: {
      control: { type: 'select' },
      description: 'undefined 선택 시 아이콘 비노출',
      options: [...Object.keys(IconMap), undefined],
    },
  },
} satisfies Meta<Textfield>;
export default meta;

type Story = StoryObj<Textfield>;

export const Enabled: Story = {
  args: {
    placeholder: 'placeholder',
    isBoxed: false,
    label: 'Label',
    helperText: 'Helper text',
    suffix: 'suffix',
    name: 'Calender_02',
    iconColor: 'text-gray-300',
  },
};

export const EnabledBoxed: Story = {
  args: {
    ...Enabled.args,
    name: undefined,
    isBoxed: true,
  },
};

export const Success: Story = {
  args: {
    ...Enabled.args,
    value: 'typing',
  },
};

export const SuccessBoxed: Story = {
  args: {
    ...Success.args,
    value: 'typing',
    name: undefined,
    isBoxed: true,
  },
};

export const Error: Story = {
  args: {
    ...Enabled.args,
    value: 'typing',
  },
};

export const ErrorBoxed: Story = {
  args: {
    ...Error.args,
    isBoxed: true,
    value: 'typing',
  },
};

export const Complete: Story = {
  args: {
    ...Enabled.args,
    value: 'complete',
    name: undefined,
  },
};

// export const CompleteBoxed: Story = {
//   args: {
//     ...Enabled.args,
//     preset: 'complete',
//     value: 'complete',
//     name: undefined,
//     isBoxed: true,
//   },
// };

export const Disabled: Story = {
  args: {
    ...Enabled.args,
    value: 'disabled',
    name: undefined,
    disabled: true,
  },
};

export const DisabledBoxed: Story = {
  args: {
    ...Disabled.args,
    value: '',
    isBoxed: true,
  },
};
