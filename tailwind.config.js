/** @type {import('tailwindcss').Config} */

import plugin from 'tailwindcss/plugin';
import { themeColors, typographyTheme, colorTheme } from './src/foundations/index';
import colors from 'tailwindcss/colors';
export default {
  content: ['./src/**/*.{js,ts,html,css,scss}'],
  theme: {
    colors: {
      ...themeColors,
    },
    extend: {
      fontFamily: {
        sans: ['SpoqaHanSansNeo'],
      },
      colors: {
        ...colorTheme,
      },
      padding: ({ theme }) => ({
        'dwc-1': theme('spacing[0.5]'),
        'dwc-2': theme('spacing[1]'),
        'dwc-3': theme('spacing[1.5]'),
        'dwc-4': theme('spacing[2]'), // 4px 간격
        'dwc-5': theme('spacing[3]'),
        'dwc-6': theme('spacing[4]'),
        'dwc-7': theme('spacing[5]'),
        'dwc-8': theme('spacing[6]'), // 8px 간격
        'dwc-9': theme('spacing[8]'),
        'dwc-10': theme('spacing[10]'),
      }),
      margin: ({ theme }) => ({
        'dwc-1': theme('spacing[0.5]'),
        'dwc-2': theme('spacing[1]'),
        'dwc-3': theme('spacing[1.5]'),
        'dwc-4': theme('spacing[2]'), // 4px 간격
        'dwc-5': theme('spacing[3]'),
        'dwc-6': theme('spacing[4]'),
        'dwc-7': theme('spacing[5]'),
        'dwc-8': theme('spacing[6]'), // 8px 간격
        'dwc-9': theme('spacing[8]'),
        'dwc-10': theme('spacing[10]'),
      }),
      borderRadius: ({ theme }) => ({
        'mo-1': theme('spacing[1]'),
        'mo-2': theme('spacing[2]'),
        'mo-3': theme('spacing[3]'),
        'mo-4': theme('spacing[4]'),
        'pc-1': theme('spacing[0.5]'),
        'pc-2': theme('spacing[1.5]'),
        'pc-3': theme('spacing[2]'),
        'pc-4': theme('spacing[3]'),
      }),
    },
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({ ...typographyTheme });
    }),
  ],
  safelist: [
    {
      pattern: /(red|mintgreen|indigo|bluegray|gray)-(50|100|200|300|400|500|600|700|800|900)/,
    },
    {
      pattern: /brand-(primary|secondary)/,
    },
    {
      pattern: /(basic)-(surface*|on-surface*|border*)/,
    },
    {
      pattern: /(state)-(error*|info*|success*)/,
    },
    {
      pattern: /(accent)-(mintgreen*|bluegray*|red*|indigo*)/,
    },
    // {
    //   pattern: /(divider)-(border|b)-(1|2|3|4)/,
    // },
    // {
    //   pattern: /(icon)-(primary|secondary|tertiary|caption)/,
    // },
    // {
    //   pattern: /(other)-(naver|kakao|facebook)/,
    // },
    // {
    //   pattern: /(state|state-container)-(error|success|info|information|warning)/,
    // },
    // {
    //   pattern: /(transparent)-(black-30|black-50|black-70|bluegray-90|bluegray-95|white-30|white-50|white-70)/,
    // },
  ],
};
