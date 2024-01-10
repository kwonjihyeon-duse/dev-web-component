import type { Meta, StoryObj } from '@storybook/web-components';
import { css, html } from 'lit';
import '../components/typography/typography';

const tableStyles = css`
  table {
    width: 100%;
    border-collapse: collapse;
  }
  th,
  td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
    font-size: 14px;
  }
  th {
    background-color: #f2f2f2;
    color: black;
  }
  tr:nth-child(even) {
    background-color: #f2f2f2;
  }
  tr:hover {
    background-color: #ddd;
  }
`;

const Template = () => html`
  <style>
    ${tableStyles}
  </style>
  <div>
    <h4 class="heading-4">Heading</h4>
    <table>
      <thead>
        <tr>
          <th>token</th>
          <th>Style</th>
          <th>Weight</th>
          <th>FontSize</th>
          <th>Line Height</th>
          <th>Letter-spacing</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><p>heading-1</p></td>
          <td><h1 class="heading-1">heading-1</h1></td>
          <td><p class="heading-1">Bold</p></td>
          <td>
            <p class="heading-1">40px</p>
            <span>(2.50rem)</span>
          </td>
          <td>
            <p class="heading-1">60px</p>
            <span>(3.75rem)</span>
          </td>
          <td class="heading-1"><p>-0.3px</p></td>
        </tr>
        <tr>
          <td><p>heading-2</p></td>
          <td><h1 class="heading-2">heading-2</h1></td>
          <td><p class="heading-2">Bold</p></td>
          <td>
            <p class="heading-2">34px</p>
            <span>(2.13rem)</span>
          </td>
          <td>
            <p class="heading-2">50px</p>
            <span>(3.13rem)</span>
          </td>
          <td><p class="heading-2">-0.3px</p></td>
        </tr>
        <tr>
          <td><p>heading-3</p></td>
          <td><h1 class="heading-3">heading-3</h1></td>
          <td><p class="heading-3">Bold</p></td>
          <td>
            <p class="heading-3">32px</p>
            <span>(0.69rem)</span>
          </td>
          <td>
            <p class="heading-3">48px</p>
            <span>(3.00rem)</span>
          </td>
          <td><p class="heading-3">-0.3px</p></td>
        </tr>
        <tr>
          <td><p>heading-4</p></td>
          <td><h1 class="heading-4">heading-4</h1></td>
          <td><p class="heading-4">Bold</p></td>
          <td>
            <p class="heading-4">24px</p>
            <span>(1.50rem)</span>
          </td>
          <td>
            <p class="heading-4">36px</p>
            <span>(2.25rem)</span>
          </td>
          <td><p class="heading-4">-0.3px</p></td>
        </tr>
        <tr>
          <td><p>heading-5</p></td>
          <td><h1 class="heading-5">heading-5</h1></td>
          <td><p class="heading-5">Bold</p></td>
          <td>
            <p class="heading-5">20px</p>
            <span>(1.25rem)</span>
          </td>
          <td>
            <p class="heading-5">30px</p>
            <span>(1.88rem)</span>
          </td>
          <td><p class="heading-5">-0.3px</p></td>
        </tr>
        <tr>
          <td><p>heading-6</p></td>
          <td><h1 class="heading-6">heading-6</h1></td>
          <td><p class="heading-6">Bold</p></td>
          <td>
            <p class="heading-6">18px</p>
            <span>(1.13rem)</span>
          </td>
          <td>
            <p class="heading-6">27px</p>
            <span>(1.69rem)</span>
          </td>
          <td><p>-0.3px</p></td>
        </tr>
        <tr>
          <td><p>heading-7</p></td>
          <td><h1 class="heading-7">heading-7</h1></td>
          <td><p class="heading-7">Bold</p></td>
          <td>
            <p class="heading-7">16px</p>
            <span>(1.00rem)</span>
          </td>
          <td>
            <p class="heading-7">24px</p>
            <span>(1.50rem)</span>
          </td>
          <td><p class="heading-7">-0.3px</p></td>
        </tr>
      </tbody>
    </table>
    <br />
    <h4 class="heading-4">Title</h4>
    <table>
      <thead>
        <tr>
          <th>token</th>
          <th>Style</th>
          <th>Weight</th>
          <th>FontSize</th>
          <th>Line Height</th>
          <th>Letter-spacing</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><p>title-medium-1</p></td>
          <td><h1 class="title-medium-1">title-medium-1</h1></td>
          <td><p class="title-medium-1">Medium</p></td>
          <td>
            <p class="title-medium-1">16px</p>
            <span>(1.00rem)</span>
          </td>
          <td>
            <p class="title-medium-1">24px</p>
            <span>(1.38rem)</span>
          </td>
          <td><p class="title-medium-1">-0.3px</p></td>
        </tr>
        <tr>
          <td><p>title-medium-2</p></td>
          <td><h1 class="title-medium-2">title-medium-2</h1></td>
          <td><p class="title-medium-2">Medium</p></td>
          <td>
            <p class="title-medium-2">15px</p>
            <span>(0.94rem)</span>
          </td>
          <td>
            <p class="title-medium-2">22px</p>
            <span>(1.38rem)</span>
          </td>
          <td><p class="title-medium-2">-0.3px</p></td>
        </tr>
        <tr>
          <td><p>title-medium-3</p></td>
          <td><h1 class="title-medium-3">title-medium-3</h1></td>
          <td><p class="title-medium-3">Medium</p></td>
          <td>
            <p class="title-medium-3">14px</p>
            <span>(0.88rem)</span>
          </td>
          <td>
            <p class="title-medium-3">21px</p>
            <span>(1.31rem)</span>
          </td>
          <td><p class="title-medium-3">-0.3px</p></td>
        </tr>
        <tr>
          <td><p>title-medium-4</p></td>
          <td><h1 class="title-medium-4">title-medium-4</h1></td>
          <td><p class="title-medium-4">Medium</p></td>
          <td>
            <p class="title-medium-4">13px</p>
            <span>(0.81rem)</span>
          </td>
          <td>
            <p class="title-medium-4">20px</p>
            <span>(1.25rem)</span>
          </td>
          <td><p class="title-medium-4">-0.3px</p></td>
        </tr>
        <tr>
          <td><p>title-medium-5</p></td>
          <td><h1 class="title-medium-5">title-medium-5</h1></td>
          <td><p class="title-medium-5">Medium</p></td>
          <td>
            <p class="title-medium-5">12px</p>
            <span>(0.75rem)</span>
          </td>
          <td>
            <p class="title-medium-5">18px</p>
            <span>(1.13rem)</span>
          </td>
          <td><p class="title-medium-5">-0.3px</p></td>
        </tr>
        <tr>
          <td><p>title-medium-6</p></td>
          <td><h1 class="title-medium-6">title-medium-6</h1></td>
          <td><p class="title-medium-6">Medium</p></td>
          <td>
            <p class="title-medium-6">11px</p>
            <span>(0.69rem)</span>
          </td>
          <td>
            <p class="title-medium-6">16px</p>
            <span>(1.00 rem)</span>
          </td>
          <td><p class="title-medium-6">-0.3px</p></td>
        </tr>
      </tbody>
    </table>
    <br />
    <h4 class="heading-4">Body</h4>
    <table>
      <thead>
        <tr>
          <th>token</th>
          <th>Style</th>
          <th>Weight</th>
          <th>FontSize</th>
          <th>Line Height</th>
          <th>Letter-spacing</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><p>body-1</p></td>
          <td><h1 class="body-1">body-1</h1></td>
          <td><p class="body-1">Regular</p></td>
          <td>
            <p class="body-1">16px</p>
            <span>(1.00rem)</span>
          </td>
          <td>
            <p class="body-1">24px</p>
            <span>(1.50rem)</span>
          </td>
          <td><p class="body-1">-0.3px</p></td>
        </tr>
        <tr>
          <td><p>body-2</p></td>
          <td><h1 class="body-2">body-2</h1></td>
          <td><p class="body-2">Regular</p></td>
          <td>
            <p class="body-2">15px</p>
            <span>(0.94rem)</span>
          </td>
          <td>
            <p class="body-2">23px</p>
            <span>(1.44rem)</span>
          </td>
          <td><p class="body-2">-0.3px</p></td>
        </tr>
        <tr>
          <td><p>body-3</p></td>
          <td><h1 class="body-3">body-3</h1></td>
          <td><p class="body-3">Regular</p></td>
          <td>
            <p class="body-3">14px</p>
            <span class="body-3">(0.88rem)</span>
          </td>
          <td>
            <p class="body-3">21px</p>
            <span>(1.31rem)</span>
          </td>
          <td><p class="body-3">-0.3px</p></td>
        </tr>
        <tr>
          <td><p>body-4</p></td>
          <td><h1 class="body-4">body-4</h1></td>
          <td><p class="body-4">Regular</p></td>
          <td>
            <p class="body-4">13px</p>
            <span>(0.81rem)</span>
          </td>
          <td>
            <p class="body-4">20px</p>
            <span>(1.25rem)</span>
          </td>
          <td><p class="body-4">-0.3px</p></td>
        </tr>
        <tr>
          <td><p>Hyperlink</p></td>
          <td><h1 class="Hyperlink">Hyperlink</h1></td>
          <td><p class="Hyperlink">Regular</p></td>
          <td>
            <p class="Hyperlink">12px</p>
            <span class="Hyperlink">(0.75rem)</span>
          </td>
          <td>
            <p class="Hyperlink">18px</p>
            <span>(1.13rem)</span>
          </td>
          <td><p class="Hyperlink">-0.3px</p></td>
        </tr>
        <tr>
          <td><p>caption-1</p></td>
          <td><h1 class="caption-1">caption-1</h1></td>
          <td><p class="caption-1">Regular</p></td>
          <td>
            <p class="caption-1">11px</p>
            <span>(0.69rem)</span>
          </td>
          <td>
            <p class="caption-1">16px</p>
            <span>(1.00rem)</span>
          </td>
          <td><p class="caption-1">-0.3px</p></td>
        </tr>
        <tr>
          <td><p>caption-2</p></td>
          <td><h1 class="caption-2">caption-2</h1></td>
          <td><p class="caption-2">Regular</p></td>
          <td>
            <p class="caption-2">18px</p>
            <span>(1.13rem)</span>
          </td>
          <td>
            <p class="caption-2">27px</p>
            <span>(1.69rem)</span>
          </td>
          <td><p class="caption-2">-0.3px</p></td>
        </tr>
      </tbody>
    </table>
  </div>
`;

const meta = {
  title: 'Foundations/Typography',
  tags: ['autodocs'],
  render: Template,
} satisfies Meta;
export default meta;

type Story = StoryObj;

export const Default: Story = {};
