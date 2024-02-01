import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '../../components/typography/typography';

const Template = () => html`
  <div>
    <h1 class="tbd-24 mb-[20px]">Color Palette</h1>
    <h2 class="tbd-16">Black & White Color</h2>
    <div class="flex mb-[40px]">
      <div class="flex flex-col flex-1">
        <div class="bg-black h-[45px]"></div>
        <div class="trg-12">black</div>
      </div>
      <div class="flex flex-col flex-1">
        <div class="bg-white h-[45px] border-[#F4F4F5] border-[1px]"></div>
        <div class="trg-12">white</div>
      </div>
      <div class="flex-1"></div>
      <div class="flex-1"></div>
      <div class="flex-1"></div>
      <div class="flex-1"></div>
      <div class="flex-1"></div>
      <div class="flex-1"></div>
      <div class="flex-1"></div>
      <div class="flex-1"></div>
    </div>
    <h2 class="tbd-16">mintgreen</h2>
    <div class="flex mb-[40px]">
      <div class="flex flex-col flex-1">
        <div class="bg-mintgreen-50 h-[45px]"></div>
        <div class="trg-12">mintgreen-50</div>
      </div>
      <div class="flex flex-col flex-1">
        <div class="bg-mintgreen-100 h-[45px]"></div>
        <div class="trg-12">mintgreen-100</div>
      </div>
      <div class="flex flex-col flex-1">
        <div class="bg-mintgreen-200 h-[45px]"></div>
        <div class="trg-12">mintgreen-200</div>
      </div>
      <div class="flex flex-col flex-1">
        <div class="bg-mintgreen-300 h-[45px]"></div>
        <div class="trg-12">mintgreen-300</div>
      </div>
      <div class="flex flex-col flex-1">
        <div class="bg-mintgreen-400 h-[45px]"></div>
        <div class="trg-12">mintgreen-400</div>
      </div>
      <div class="flex flex-col flex-1">
        <div class="bg-mintgreen-500 h-[45px]"></div>
        <div class="trg-12">mintgreen-500</div>
      </div>
      <div class="flex flex-col flex-1">
        <div class="bg-mintgreen-600 h-[45px]"></div>
        <div class="trg-12">mintgreen-600</div>
      </div>
      <div class="flex flex-col flex-1">
        <div class="bg-mintgreen-700 h-[45px]"></div>
        <div class="trg-12">mintgreen-700</div>
      </div>
      <div class="flex flex-col flex-1">
        <div class="bg-mintgreen-800 h-[45px]"></div>
        <div class="trg-12">mintgreen-800</div>
      </div>
      <div class="flex flex-col flex-1">
        <div class="bg-mintgreen-900 h-[45px]"></div>
        <div class="trg-12">mintgreen-900</div>
      </div>
    </div>

    <h2 class="tbd-16">blue gray</h2>
    <div class="flex mb-[40px]">
      <div class="flex flex-col flex-1">
        <div class="bg-bluegray-50 h-[45px]"></div>
        <div class="trg-12">bluegray-50</div>
      </div>
      <div class="flex flex-col flex-1">
        <div class="bg-bluegray-100 h-[45px]"></div>
        <div class="trg-12">bluegray-100</div>
      </div>
      <div class="flex flex-col flex-1">
        <div class="bg-bluegray-200 h-[45px]"></div>
        <div class="trg-12">bluegray-200</div>
      </div>
      <div class="flex flex-col flex-1">
        <div class="bg-bluegray-300 h-[45px]"></div>
        <div class="trg-12">bluegray-300</div>
      </div>
      <div class="flex flex-col flex-1">
        <div class="bg-bluegray-400 h-[45px]"></div>
        <div class="trg-12">bluegray-400</div>
      </div>
      <div class="flex flex-col flex-1">
        <div class="bg-bluegray-500 h-[45px]"></div>
        <div class="trg-12">bluegray-500</div>
      </div>
      <div class="flex flex-col flex-1">
        <div class="bg-bluegray-600 h-[45px]"></div>
        <div class="trg-12">bluegray-600</div>
      </div>
      <div class="flex flex-col flex-1">
        <div class="bg-bluegray-700 h-[45px]"></div>
        <div class="trg-12">bluegray-700</div>
      </div>
      <div class="flex flex-col flex-1">
        <div class="bg-bluegray-800 h-[45px]"></div>
        <div class="trg-12">bluegray-800</div>
      </div>
      <div class="flex flex-col flex-1">
        <div class="bg-bluegray-900 h-[45px]"></div>
        <div class="trg-12">bluegray-900</div>
      </div>
    </div>

    <h2 class="tbd-16">gray</h2>
    <div class="flex mb-[40px]">
      <div class="flex flex-col flex-1">
        <div class="bg-gray-50 h-[45px]"></div>
        <div class="trg-12">gray-50</div>
      </div>
      <div class="flex flex-col flex-1">
        <div class="bg-gray-100 h-[45px]"></div>
        <div class="trg-12">gray-100</div>
      </div>
      <div class="flex flex-col flex-1">
        <div class="bg-gray-200 h-[45px]"></div>
        <div class="trg-12">gray-200</div>
      </div>
      <div class="flex flex-col flex-1">
        <div class="bg-gray-300 h-[45px]"></div>
        <div class="trg-12">gray-300</div>
      </div>
      <div class="flex flex-col flex-1">
        <div class="bg-gray-400 h-[45px]"></div>
        <div class="trg-12">gray-400</div>
      </div>
      <div class="flex flex-col flex-1">
        <div class="bg-gray-500 h-[45px]"></div>
        <div class="trg-12">gray-500</div>
      </div>
      <div class="flex flex-col flex-1">
        <div class="bg-gray-600 h-[45px]"></div>
        <div class="trg-12">gray-600</div>
      </div>
      <div class="flex flex-col flex-1">
        <div class="bg-gray-700 h-[45px]"></div>
        <div class="trg-12">gray-700</div>
      </div>
      <div class="flex flex-col flex-1">
        <div class="bg-gray-800 h-[45px]"></div>
        <div class="trg-12">gray-800</div>
      </div>
      <div class="flex flex-col flex-1">
        <div class="bg-gray-900 h-[45px]"></div>
        <div class="trg-12">gray-900</div>
      </div>
    </div>

    <h2 class="tbd-16">red</h2>
    <div class="flex mb-[40px]">
      <div class="flex flex-col flex-1">
        <div class="bg-red-50 h-[45px]"></div>
        <div class="trg-12">red-50</div>
      </div>
      <div class="flex flex-col flex-1">
        <div class="bg-red-100 h-[45px]"></div>
        <div class="trg-12">red-100</div>
      </div>
      <div class="flex flex-col flex-1">
        <div class="bg-red-200 h-[45px]"></div>
        <div class="trg-12">red-200</div>
      </div>
      <div class="flex flex-col flex-1">
        <div class="bg-red-300 h-[45px]"></div>
        <div class="trg-12">red-300</div>
      </div>
      <div class="flex flex-col flex-1">
        <div class="bg-red-400 h-[45px]"></div>
        <div class="trg-12">red-400</div>
      </div>
      <div class="flex flex-col flex-1">
        <div class="bg-red-500 h-[45px]"></div>
        <div class="trg-12">red-500</div>
      </div>
      <div class="flex flex-col flex-1">
        <div class="bg-red-600 h-[45px]"></div>
        <div class="trg-12">red-600</div>
      </div>
      <div class="flex flex-col flex-1">
        <div class="bg-red-700 h-[45px]"></div>
        <div class="trg-12">red-700</div>
      </div>
      <div class="flex flex-col flex-1">
        <div class="bg-red-800 h-[45px]"></div>
        <div class="trg-12">red-800</div>
      </div>
      <div class="flex flex-col flex-1">
        <div class="bg-red-900 h-[45px]"></div>
        <div class="trg-12">red-900</div>
      </div>
    </div>

    <h2 class="tbd-16">indigo</h2>
    <div class="flex mb-[40px]">
      <div class="flex flex-col flex-1">
        <div class="bg-indigo-50 h-[45px]"></div>
        <div class="trg-12">indigo-50</div>
      </div>
      <div class="flex flex-col flex-1">
        <div class="bg-indigo-100 h-[45px]"></div>
        <div class="trg-12">indigo-100</div>
      </div>
      <div class="flex flex-col flex-1">
        <div class="bg-indigo-200 h-[45px]"></div>
        <div class="trg-12">indigo-200</div>
      </div>
      <div class="flex flex-col flex-1">
        <div class="bg-indigo-300 h-[45px]"></div>
        <div class="trg-12">indigo-300</div>
      </div>
      <div class="flex flex-col flex-1">
        <div class="bg-indigo-400 h-[45px]"></div>
        <div class="trg-12">indigo-400</div>
      </div>
      <div class="flex flex-col flex-1">
        <div class="bg-indigo-500 h-[45px]"></div>
        <div class="trg-12">indigo-500</div>
      </div>
      <div class="flex flex-col flex-1">
        <div class="bg-indigo-600 h-[45px]"></div>
        <div class="trg-12">indigo-600</div>
      </div>
      <div class="flex flex-col flex-1">
        <div class="bg-indigo-700 h-[45px]"></div>
        <div class="trg-12">indigo-700</div>
      </div>
      <div class="flex flex-col flex-1">
        <div class="bg-indigo-800 h-[45px]"></div>
        <div class="trg-12">indigo-800</div>
      </div>
      <div class="flex flex-col flex-1">
        <div class="bg-indigo-900 h-[45px]"></div>
        <div class="trg-12">indigo-900</div>
      </div>
    </div>
  </div>

  <div class="bg-basic-on-surface-5 w-full h-[1px] my-[10px]"></div>
  <div>
    <h1 class="tbd-24 mb-[10px]">Color System</h1>
    <div class="flex justify-between items-center bg-basic-surface-2 h-[80px] px-[20px] py-[10px] mb-[10px]">
      <h2 class="tbd-24">Brand</h2>
      <h3 class="trg-16">서비스를 대표하는 브랜드 컬러. 브랜드 컬러 변경 시 함께 변경되어야 하는 모든 곳에 사용.</h3>
    </div>

    <div class="flex mb-[40px] gap-[10px]">
      <div class="flex flex-col">
        <div class="bg-brand-primary w-[130px] h-[45px] "></div>
        <div class="trg-12">Primary</div>
        <div class="trg-12">mintgreen-500</div>
      </div>
      <div class="flex flex-col">
        <div class="bg-brand-secondary w-[130px] h-[45px]"></div>
        <div class="trg-12">Secondary</div>
        <div class="trg-12">bluegray-500</div>
      </div>
    </div>

    <div class="flex justify-between items-center bg-basic-surface-2 h-[80px] px-[20px] py-[10px] mb-[10px]">
      <h2 class="tbd-24">Basic</h2>
      <h3 class="trg-16">text, background, divider 등의 기본 Ui를 구성할 때 사용.</h3>
    </div>
    <div class="flex mb-[20px] gap-[10px]">
      <div class="flex flex-col">
        <div class="bg-basic-surface-1 w-[130px] h-[45px] border-[#F4F4F5] border-[1px]"></div>
        <div class="trg-12">Surface-1</div>
        <div class="trg-12">white</div>
      </div>
      <div class="flex flex-col">
        <div class="bg-basic-surface-2 w-[130px] h-[45px]"></div>
        <div class="trg-12">Surface-2</div>
        <div class="trg-12">gray-100</div>
      </div>
      <div class="flex flex-col">
        <div class="bg-basic-surface-3 w-[130px] h-[45px]"></div>
        <div class="trg-12">Surface-3</div>
        <div class="trg-12">gray-800</div>
      </div>
      <div class="flex flex-col">
        <div class="bg-basic-surface-2 w-[130px] h-[45px]"></div>
        <div class="trg-12">Surface-4</div>
        <div class="trg-12">bluegray-50</div>
      </div>
    </div>
    <div class="flex mb-[20px] gap-[10px]">
      <div class="flex flex-col">
        <div class="bg-basic-surface-dim-thick w-[130px] h-[45px]"></div>
        <div class="trg-12">Surface-Dim-thick</div>
        <div class="trg-12">black 50%</div>
      </div>
      <div class="flex flex-col">
        <div class="bg-basic-surface-dim-basic w-[130px] h-[45px]"></div>
        <div class="trg-12">Surface-Dim-basic</div>
        <div class="trg-12">black 25%</div>
      </div>
      <div class="flex flex-col">
        <div class="bg-basic-surface-dim-thin w-[130px] h-[45px]"></div>
        <div class="trg-12">Surface-Dim-thin</div>
        <div class="trg-12">black 15%</div>
      </div>
    </div>
    <div class="flex mb-[20px] gap-[10px]">
      <div class="flex flex-col">
        <div class="bg-basic-on-surface-1 w-[130px] h-[45px]"></div>
        <div class="trg-12">On Surface-1</div>
        <div class="trg-12">gray-800</div>
      </div>
      <div class="flex flex-col">
        <div class="bg-basic-on-surface-2 w-[130px] h-[45px]"></div>
        <div class="trg-12">On Surface-2</div>
        <div class="trg-12">gray-700</div>
      </div>
      <div class="flex flex-col">
        <div class="bg-basic-on-surface-3 w-[130px] h-[45px]"></div>
        <div class="trg-12">On Surface-3</div>
        <div class="trg-12">gray-500</div>
      </div>
      <div class="flex flex-col">
        <div class="bg-basic-on-surface-4 w-[130px] h-[45px]"></div>
        <div class="trg-12">On Surface-4</div>
        <div class="trg-12">gray-400</div>
      </div>
      <div class="flex flex-col">
        <div class="bg-basic-on-surface-5 w-[130px] h-[45px]"></div>
        <div class="trg-12">On Surface-5</div>
        <div class="trg-12">gray-300</div>
      </div>
      <div class="flex flex-col">
        <div class="bg-basic-on-surface-6 w-[130px] h-[45px] border-[#F4F4F5] border-[1px]"></div>
        <div class="trg-12">On Surface-6</div>
        <div class="trg-12">white</div>
      </div>
    </div>
    <div class="flex mb-[40px] gap-[10px]">
      <div class="flex flex-col">
        <div class="bg-basic-border-1 w-[130px] h-[45px]"></div>
        <div class="trg-12">Border-1</div>
        <div class="trg-12">gray-50</div>
      </div>
      <div class="flex flex-col">
        <div class="bg-basic-border-2 w-[130px] h-[45px]"></div>
        <div class="trg-12">Border-2</div>
        <div class="trg-12">gray-100</div>
      </div>
      <div class="flex flex-col">
        <div class="bg-basic-border-3 w-[130px] h-[45px]"></div>
        <div class="trg-12">Border-3</div>
        <div class="trg-12">gray-200</div>
      </div>
      <div class="flex flex-col">
        <div class="bg-basic-border-4 w-[130px] h-[45px]"></div>
        <div class="trg-12">Border-4</div>
        <div class="trg-12">gray-300</div>
      </div>
    </div>

    <div class="flex justify-between items-center bg-basic-surface-2 h-[80px] px-[20px] py-[10px] mb-[10px]">
      <h2 class="tbd-24">State</h2>
      <h3 class="trg-16">error, info, success 등 특정 상태를 표현하는 경우에 사용.</h3>
    </div>
    <div class="flex mb-[20px] gap-[10px]">
      <div class="flex flex-col">
        <div class="bg-state-error w-[130px] h-[45px]"></div>
        <div class="trg-12">Error</div>
        <div class="trg-12">red-600</div>
      </div>
      <div class="flex flex-col">
        <div class="bg-state-info w-[130px] h-[45px]"></div>
        <div class="trg-12">Info</div>
        <div class="trg-12">indigo-600</div>
      </div>
      <div class="flex flex-col">
        <div class="bg-state-success w-[130px] h-[45px]"></div>
        <div class="trg-12">Success</div>
        <div class="trg-12">mintgreen-500</div>
      </div>
    </div>
    <div class="flex mb-[40px] gap-[10px]">
      <div class="flex flex-col">
        <div class="bg-state-error-container w-[130px] h-[45px]"></div>
        <div class="trg-12">Error Container</div>
        <div class="trg-12">red-50</div>
      </div>
      <div class="flex flex-col">
        <div class="bg-state-info-container w-[130px] h-[45px]"></div>
        <div class="trg-12">Info Container</div>
        <div class="trg-12">indigo-50</div>
      </div>
      <div class="flex flex-col">
        <div class="bg-state-success-container w-[130px] h-[45px]"></div>
        <div class="trg-12">Success Container</div>
        <div class="trg-12">mintgreen-50</div>
      </div>
    </div>

    <div class="flex justify-between items-center bg-basic-surface-2 h-[80px] px-[20px] py-[10px] mb-[10px]">
      <h2 class="tbd-24">Accent</h2>
      <h3 class="trg-16">색상으로 강조 또는 구분이 필요한 경우에 사용. 색상 자체에 의미를 부여하지 않습니다.</h3>
    </div>
    <div class="flex mb-[20px] gap-[10px]">
      <div class="flex flex-col">
        <div class="bg-accent-mintgreen w-[130px] h-[45px]"></div>
        <div class="trg-12">Accent Mintgreen</div>
        <div class="trg-12">mintgreen-500</div>
      </div>
      <div class="flex flex-col">
        <div class="bg-accent-bluegray w-[130px] h-[45px]"></div>
        <div class="trg-12">Accent Bluegray</div>
        <div class="trg-12">bluegray-600</div>
      </div>
      <div class="flex flex-col">
        <div class="bg-accent-red w-[130px] h-[45px]"></div>
        <div class="trg-12">Accent Red</div>
        <div class="trg-12">red-600</div>
      </div>
      <div class="flex flex-col">
        <div class="bg-accent-indigo w-[130px] h-[45px]"></div>
        <div class="trg-12">Accent Indigo</div>
        <div class="trg-12">indigo-600</div>
      </div>
    </div>
    <div class="flex mb-[40px] gap-[10px]">
      <div class="flex flex-col">
        <div class="bg-accent-mintgreen-container w-[130px] h-[45px]"></div>
        <div class="trg-12">Accent Mintgreen<br />Container</div>
        <div class="trg-12">mintgreen-50</div>
      </div>
      <div class="flex flex-col">
        <div class="bg-accent-bluegray-container w-[130px] h-[45px]"></div>
        <div class="trg-12">Accent Bluegray<br />Container</div>
        <div class="trg-12">bluegray-50</div>
      </div>
      <div class="flex flex-col">
        <div class="bg-accent-red-container w-[130px] h-[45px]"></div>
        <div class="trg-12">Accent Red<br />Container</div>
        <div class="trg-12">red-50</div>
      </div>
      <div class="flex flex-col">
        <div class="bg-accent-indigo-container w-[130px] h-[45px]"></div>
        <div class="trg-12">Accent Indigo<br />Container</div>
        <div class="trg-12">indigo-50</div>
      </div>
    </div>
  </div>
`;

const meta = {
  title: 'Foundations/Color',
  tags: ['autodocs'],
  render: Template,
} satisfies Meta;
export default meta;

type Story = StoryObj;

export const Default: Story = {};
