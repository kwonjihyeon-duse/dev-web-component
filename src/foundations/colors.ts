import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from "../../tailwind.config.js";

const fullConfig = resolveConfig(tailwindConfig)

const colorConfig = fullConfig.theme.colors;
console.log("fullConfig", colorConfig);
console.log("fullConfig", Object.keys(colorConfig));
const colorCodes = Object.keys(colorConfig);
let textColors = [];
colorCodes.map(colorCode => {
  console.log("fullConfig", Object.keys(colorConfig[colorCode]));
  Object.keys(colorConfig[colorCode]).map(colorCodeKey => {
    textColors.push(`text-${colorCode}-${colorCodeKey}`);
  })
});

console.log("fullConfig",textColors)

export default textColors;