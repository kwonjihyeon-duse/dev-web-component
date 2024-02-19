import type { Meta, StoryObj } from '@storybook/web-components';
import type { Select } from './select';
import './select';
import '../icon/icon';
import { html } from 'lit';

const Template = (args: Select) => html`
  <div style="width:280px; height:320px;">
    <dwc-select
      style="margin: 0 0.5rem"
      label=${args.label}
      type=${args.type || 'basic'}
      placeholder=${args.placeholder || ''}
      ?disabled=${args.disabled}
      .options=${args.options}
      ?isError=${args.isError}
      .onChange=${args.onChange}
    />
  </div>
`;

const options = [
  { value: 'gmail.com', label: 'Google' },
  { value: 'naver.com', label: 'Naver' },
  { value: 'daum.net', label: 'Daum' },
  { value: 'kakao.com', label: 'Kakao' },
  { value: 'yahoo.com', label: 'Yahoo' },
  { value: 'hanmail.net', label: 'Hanmail' },
  { value: 'nate.com', label: 'Nate' },
  { value: 'outlook.com', label: 'Outlook' },
  { value: 'icloud.com', label: 'iCloud' },
  { value: 'aol.com', label: 'AOL' },
];

const meta = {
  title: 'Components/Select',
  tags: ['autodocs'],
  render: Template,
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['basic', 'underline'],
      default: 'basic',
    },
    disabled: { control: 'boolean' },
    isError: { control: 'boolean' },
  },
  component: 'dwc-button',
} satisfies Meta<Select>;

export default meta;
type Story = StoryObj<Select>;

export const Default: Story = {
  args: {
    label: 'Label',
    placeholder: '선택',
    options: options,
    onChange: (value: String) => {},
  },
};

export const SelectType = {
  render: () =>
    html`<div style="display:flex; height:320px; flex-direction:column;">
      <div style="display:flex ;align-items:center;justify-content:space-between">
        <div>
          <dwc-select label="Label" placeholder="선택" .options=${options} />
        </div>
        <div>
          <dwc-select label="Label" placeholder="선택" .options=${options} isError />
        </div>
        <div>
          <dwc-select label="Label" placeholder="선택" .options=${options} disabled />
        </div>
        <div>
          <dwc-select placeholder="선택" .options=${options} />
        </div>
      </div>
      <div style="display:flex; margin-top:20px; align-items:center;justify-content:space-between">
        <div>
          <dwc-select type="underline" label="Label" placeholder="선택" .options=${options} />
        </div>
        <div>
          <dwc-select type="underline" label="Label" placeholder="선택" .options=${options} isError />
        </div>
        <div>
          <dwc-select type="underline" label="Label" placeholder="선택" .options=${options} disabled />
        </div>
        <div>
          <dwc-select type="underline" placeholder="선택" .options=${options} />
        </div>
      </div>
    </div>`,
};
