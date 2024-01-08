/** @type {import('tailwindcss').Config} */

import plugin from "tailwindcss/plugin";
import { typographyTheme, colorTheme } from "./src/foundations/index";

export default {
  content: ["./src/**/*.{js,ts,html,css,scss}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["SpoqaHanSansNeo"],
      },
      colors: {
        ...colorTheme,
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, addComponents, addUtilities, theme }) {
      addComponents({ ...typographyTheme });
    }),
  ],
  safelist: [
    {
      pattern:
        /(red|orange|brown|yellow|green|mintgreen|blue|indigo|purple|bluegray|gray)-(50|100|200|300|400|500|600|700|800|900)/,
    },
    {
      pattern: /(primary)-(bg|background|light-1|light-2|main|dark-1|dark-2)/,
    },
    {
      pattern: /(secondary)-(bg|background|light-1|light-2|light-3|main|dark)/,
    },
    {
      pattern: /(text)-(primary|secondary|tertiary|caption|hint|white|link)/,
    },
    {
      pattern: /(background|bg)-(light-1|light-2|light-3|dark-1|dark-2)/,
    },
    {
      pattern: /(divider)-(border|b)-(1|2|3|4)/,
    },
    {
      pattern: /(icon)-(primary|secondary|tertiary|caption)/,
    },
    {
      pattern: /(other)-(naver|kakao|facebook)/,
    },
    {
      pattern:
        /(state|state-container)-(error|success|info|information|warning)/,
    },
    {
      pattern:
        /(transparent)-(black-30|black-50|black-70|bluegray-90|bluegray-95|white-30|white-50|white-70)/,
    },
  ],
};
