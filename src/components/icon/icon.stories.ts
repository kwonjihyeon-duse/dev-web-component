import { html } from 'lit';
import type { Meta, StoryObj } from '@storybook/web-components';

import  { IconProps, SIZE } from './icon';
import IconMap from "./svgs";
import textColors from '../../foundations/colors';

// More on how to set up stories at: https://storybook.js.org/doㄹcs/web-components/writing-stories/introduction
const Template = (args: IconProps, { loaded: { Icon } }) => (
  html`
    <dwc-icon
      number-of-size=${args.numberOfSize}
      view-box=${args.viewBox}
      name=${args.name}
      size=${args.size}
    ></dwc-icon>
`
);

const meta = {
  title: 'Components/Icon',
  tags: ['autodocs'],
  component: 'dwc-icon',
  loaders: [async () => ({ Icon: await import('./icon') })], // svg 비동기처리
  render: Template,
  argTypes: {
    numberOfSize: { action: 'nubmer' },
    viewBox: {
      control: 'text',
      description: 'min-x min-y width height <br/> default: 0 0 24 24',
    },
    name: {
      control: { type: 'select' },
      options: Object.keys(IconMap),
    },
    size:{ 
      if: { arg: 'numberOfSize', eq: 0 },
      control: { type: 'select' },
      options: Object.values(SIZE),
     },
     color: {
      control: { type: 'select' },
      options: textColors,
     }
  },
  args: {
    viewBox: '0 0 24 24',
    name: 'ArrowRight'
  },
} satisfies Meta<IconProps>;

export default meta;

type Story = StoryObj<IconProps>;

const IconTemplate = (args: IconProps, { loaded: { Icon } }) => {
  return html`
    <div class=${args.color}>
      <dwc-icon name=${args.name || 'ArrowRight'} number-of-size=${args.numberOfSize} size=${args.size}></dwc-icon>
    </div>
  `
};
export const Icon = {
  render: IconTemplate,
  loaders: [async () => ({ Icon: await import('./icon') })], // svg 비동기처리
  args: {
    numberOfSize: 0,
    name: 'ArrowRight',
    size: 'mmm'
  }
}

// More on writing stories with args: https://storybook.js.org/docs/web-components/writing-stories/args
const IconsTemplate = (args: IconProps, { loaded: { Icon } }) => {
  return html`
    <div style="display:flex">
      ${
        Object.keys(IconMap).map(key => {
          return html`
            <dwc-icon name=${key} number-of-size=${args.numberOfSize}></dwc-icon>
          `;
        })
      }
    </div>
  `
};
export const Icons = {
  render: IconsTemplate,
  args: {
    numberOfSize: 24,
  }
}

