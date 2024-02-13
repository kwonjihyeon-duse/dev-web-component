import type { Meta, StoryObj } from '@storybook/web-components';
import type { Select } from './select';
import './select';
import '../icon/icon';
import { html } from 'lit';

const Template = (args: Select) => html`
  <div style="width:280px; height:350px">
    <dwc-select
      style="margin: 0 0.5rem"
      label=${args.label}
      type=${args.type || 'basic'}
      placeholder=${args.placeholder || ''}
      ?disabled=${args.disabled}
      .options=${args.options}
      ?isError=${args.isError}
      @onChange=${args.onChange}
    />
  </div>
`;

const selectOptions = [
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
    onChange: { action: 'onChange' },
    disabled: { control: 'boolean' },
    isError: { control: 'boolean' },
    type: {
      control: { type: 'select' },
      options: ['basic', 'underline'],
    },
  },
  component: 'dwc-button',
} satisfies Meta<Select>;

export default meta;
type Story = StoryObj<Select>;

export const Default: Story = {
  args: {
    label: 'Label',
    placeholder: '항목을 선택해주세요',
    options: selectOptions,
  },
};

export const Primary = {
  render: () =>
    html` <div style="display:flex; height:350px">
      <div style="margin-right:6px; width:280px">
        <dwc-select label="Label" placeholder="항목을 선택해주세요" .options=${selectOptions}></dwc-select>
      </div>
      <div style="margin-left:12px; width:280px">
        <dwc-select
          type="underline"
          label="Label"
          placeholder="항목을 선택해주세요"
          .options=${selectOptions}
        ></dwc-select>
      </div>
    </div>`,
};
