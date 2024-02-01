import type { Meta, StoryObj } from '@storybook/web-components';
import { css, html } from 'lit';
import '../../components/typography/typography';

const tableStyles = css`
  table {
    width: 100%;
    border-collapse: collapse;
  }
  th,
  td {
    border-bottom: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }
  th {
  }
`;

const Template = () => html`
  <style>
    ${tableStyles}
  </style>
  <div>
    <!-- <h4 class="tbd-40">Typography</h4> -->
    <p class="trg-14 my-5 text-[#777777]">
      피터팬 좋은 방 구하기 타이포그래피는 Spoqa han sans neo만을 사용하여 일관된 디자인을 만들 수 있도록 하는
      타이포그래피 시스템을 제공합니다.<br />
      여러 상황에 적용하기 위해 새로운 스타일의 규칙을 만들었습니다. Typography의 T, weight의 약자(rg, md, bd), 폰트
      크기를 합쳐 스타일을 구성했습니다.<br />
      링크에 적용되는 타이포는 어떠한 크기든 피그마내의 기능으로 처리합니다.
    </p>
    <table>
      <thead>
        <tr>
          <th class="trg-16 text-[#898990]">Style</th>
          <th class="trg-16 text-[#898990]">Weight</th>
          <th class="trg-16 text-[#898990]">FontSize</th>
          <th class="trg-16 text-[#898990]">Line Height</th>
          <th class="trg-16 text-[#898990]">Letter-spacing</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><p class="tbd-40">Tbd40</p></td>
          <td><p class="tbd-40">Bold(700)</p></td>
          <td><p class="tbd-40">40px</p></td>
          <td><p class="tbd-40">87px</p></td>
          <td><p class="tbd-40">-0.3px</p></td>
        </tr>
        <tr>
          <td><p class="tbd-24">Tbd24</p></td>
          <td><p class="tbd-24">Bold(700)</p></td>
          <td><p class="tbd-24">24px</p></td>
          <td><p class="tbd-24">45px</p></td>
          <td><p class="tbd-24">-0.3px</p></td>
        </tr>
        <tr>
          <td><p class="tmd-24">Tmd24</p></td>
          <td><p class="tmd-24">Medium(500)</p></td>
          <td><p class="tmd-24">24px</p></td>
          <td><p class="tmd-24">45px</p></td>
          <td><p class="tmd-24">-0.3px</p></td>
        </tr>
        <tr>
          <td><p class="tmd-22">Tmd22</p></td>
          <td><p class="tmd-22">Medium(500)</p></td>
          <td><p class="tmd-22">22px</p></td>
          <td><p class="tmd-22">41px</p></td>
          <td><p class="tmd-22">-0.3px</p></td>
        </tr>
        <tr>
          <td><p class="tbd-20">Tbd20</p></td>
          <td><p class="tbd-20">Bold(700)</p></td>
          <td><p class="tbd-20">20px</p></td>
          <td><p class="tbd-20">38px</p></td>
          <td><p class="tbd-20">-0.3px</p></td>
        </tr>
        <tr>
          <td><p class="tmd-20">Tmd20</p></td>
          <td><p class="tmd-20">Medium(500)</p></td>
          <td><p class="tmd-20">20px</p></td>
          <td><p class="tmd-20">38px</p></td>
          <td><p class="tmd-20">-0.3px</p></td>
        </tr>
        <tr>
          <td><p class="tbd-18">Tbd18</p></td>
          <td><p class="tbd-18">Bold(700)</p></td>
          <td><p class="tbd-18">18px</p></td>
          <td><p class="tbd-18">34px</p></td>
          <td><p class="tbd-18">-0.3px</p></td>
        </tr>
        <tr>
          <td><p class="tmd-18">Tmd18</p></td>
          <td><p class="tmd-18">Medium(500)</p></td>
          <td><p class="tmd-18">18px</p></td>
          <td><p class="tmd-18">34px</p></td>
          <td><p class="tmd-18">-0.3px</p></td>
        </tr>
        <tr>
          <td><p class="trg-18">Trg18</p></td>
          <td><p class="trg-18">Regular(400)</p></td>
          <td><p class="trg-18">18px</p></td>
          <td><p class="trg-18">px</p></td>
          <td><p class="trg-18">-0.3px</p></td>
        </tr>
        <tr>
          <td><p class="tbd-16">Tbd16</p></td>
          <td><p class="tbd-16">Bold(700)</p></td>
          <td><p class="tbd-16">16px</p></td>
          <td><p class="tbd-16">30px</p></td>
          <td><p class="tbd-16">-0.3px</p></td>
        </tr>
        <tr>
          <td><p class="tmd-16">Tmd16</p></td>
          <td><p class="tmd-16">Medium(500)</p></td>
          <td><p class="tmd-16">16px</p></td>
          <td><p class="tmd-16">30px</p></td>
          <td><p class="tmd-16">-0.3px</p></td>
        </tr>
        <tr>
          <td><p class="trg-16">Trg16</p></td>
          <td><p class="trg-16">Regular(400)</p></td>
          <td><p class="trg-16">16px</p></td>
          <td><p class="trg-16">30px</p></td>
          <td><p class="trg-16">-0.3px</p></td>
        </tr>
        <tr>
          <td><p class="tmd-14">Tbd14</p></td>
          <td><p class="tmd-14">Medium(500)</p></td>
          <td><p class="tmd-14">14px</p></td>
          <td><p class="tmd-14">26px</p></td>
          <td><p class="tmd-14">-0.3px</p></td>
        </tr>
        <tr>
          <td><p class="trg-14">Trg14</p></td>
          <td><p class="trg-14">Regular(400)</p></td>
          <td><p class="trg-14">14px</p></td>
          <td><p class="trg-14">26px</p></td>
          <td><p class="trg-14">-0.3px</p></td>
        </tr>
        <tr>
          <td><p class="tmd-12">Tbd12</p></td>
          <td><p class="tmd-12">Medium(500)</p></td>
          <td><p class="tmd-12">12px</p></td>
          <td><p class="tmd-12">23px</p></td>
          <td><p class="tmd-12">-0.3px</p></td>
        </tr>
        <tr>
          <td><p class="trg-12">Trg12</p></td>
          <td><p class="trg-12">Regular(400)</p></td>
          <td><p class="trg-12">12px</p></td>
          <td><p class="trg-12">23px</p></td>
          <td><p class="trg-12">-0.3px</p></td>
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
