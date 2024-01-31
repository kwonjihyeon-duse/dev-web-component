import resolveConfig from 'tailwindcss/resolveConfig';
// @ts-ignore
import tailwindConfig from '../../tailwind.config.js';

const fullConfig = resolveConfig(tailwindConfig);

const colorConfig = fullConfig.theme.colors;
const colorCodes = Object.keys(colorConfig);
const useColorCodes = ['red', 'mintgreen', 'indigo', 'bluegray', 'gray'];
const useThemeCodes = ['brand', 'basic', 'state', 'accent'];
let textColors: string[] = [];
colorCodes.map((colorCode) => {
  Object.keys(colorConfig[colorCode]).map((colorCodeKey) => {
    if (useColorCodes.indexOf(colorCode) < 0 && useThemeCodes.indexOf(colorCode) < 0) return;
    textColors.push(`text-${colorCode}-${colorCodeKey}`);
  });
});

export default textColors;
