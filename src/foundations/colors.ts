import resolveConfig from 'tailwindcss/resolveConfig';
// @ts-ignore
import tailwindConfig from '../../tailwind.config.js';

const fullConfig = resolveConfig(tailwindConfig);

const colorConfig = fullConfig.theme.colors;
const colorCodes = Object.keys(colorConfig);
const useColorCodes = [
  'red',
  'orange',
  'brown',
  'yellow',
  'green',
  'mintgreen',
  'blue',
  'indigo',
  'purple',
  'bluegray',
  'gray',
];
const useThemeCodes = [
  'primary',
  'secondary',
  'text',
  'background',
  'bg',
  'divider',
  'icon',
  'other',
  'state',
  'state-container',
  'transparent',
];
let textColors: string[] = [];
colorCodes.map((colorCode) => {
  Object.keys(colorConfig[colorCode]).map((colorCodeKey) => {
    if (useColorCodes.indexOf(colorCode) < 0 && useThemeCodes.indexOf(colorCode) < 0) return;
    textColors.push(`text-${colorCode}-${colorCodeKey}`);
  });
});

export default textColors;
