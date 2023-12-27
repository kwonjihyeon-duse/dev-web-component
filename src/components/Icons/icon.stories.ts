import { IconProps, SIZE } from './Icon';
import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import IconPaths from "./IconPaths";

// More on how to set up stories at: https://storybook.js.org/doㄹcs/web-components/writing-stories/introduction
const Template = (args: IconProps, { loaded: { Icon } }) => {

  console.log("args", args)
  console.log("args", Icon.default)
  return html`
  <div style='color:red;'>
    <dwc-icon
      number-of-size=${args.numberOfSize}
      view-box=${args.viewBox}
      name=${args.name}
      size=${args.size}
    ></dwc-icon>
    </div>
`;
}

console.log("IconPaths", IconPaths)

const meta = {
  title: 'Example/Icon',
  tags: ['autodocs'],
  // component: 'dwc-icon',
  loaders: [async () => ({ Icon: await import('./Icon') })], // svg 비동기처리
  render: Template,
  argTypes: {
    numberOfSize: { action: 'nubmer' },
    viewBox: {
      control: 'text',
      description: 'min-x min-y width height <br/> default: 0 0 24 24',
    },
    name: {
      control: { type: 'select' },
      options: ['arrow-right', 'arrow-down', 'arrow-exchange', 'arrow-left', 'arrow-repeat'],
      defaultValue: 'arrow-right'
    },
    size:{ 
      if: { arg: 'numberOfSize', eq: 0 },
      control: { type: 'select' },
      options: Object.values(SIZE),
     },
  },
  args: {
    viewBox: '0 0 24 24',
  },
} satisfies Meta<IconProps>;

export default meta;

type Story = StoryObj<IconProps>;

// More on writing stories with args: https://storybook.js.org/docs/web-components/writing-stories/args
export const Primary: Story = {
  args: {
    numberOfSize: 24,
    name: 'arrow-right',
    // color: 'primary'
  },
  
};

