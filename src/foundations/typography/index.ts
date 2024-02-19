interface IndexNumberObject {
  [index: number]: string;
}

interface IndexStringObject {
  [index: string]: string;
}

const fontSizes: IndexNumberObject = {
  12: '12px',
  14: '14px',
  16: '16px',
  18: '18px',
  20: '20px',
  22: '22px',
  24: '24px',
  40: '40px',
};

const fontLineHeights: IndexNumberObject = {
  12: '18px',
  14: '21px',
  16: '24px',
  18: '27px',
  20: '30px',
  22: '33px',
  24: '36px',
  40: '60px',
};

const fontWeights: IndexStringObject = {
  bold: '700',
  medium: '500',
  regular: '400',
};

const letterSpacings: IndexStringObject = {
  '-0.3': '-0.3px',
};

// TODO: 리펙토링 필요할듯
const makeFont = (fontSize: number, fontWeight: string, letterSpacing: string = '-0.3') => {
  return {
    fontSize: fontSizes[fontSize],
    lineHeight: fontLineHeights[fontSize],
    fontWeight: fontWeights[fontWeight],
    letterSpacing: letterSpacings[letterSpacing],
  };
};

export const typographyTheme = {
  '.tbd-40': { ...makeFont(40, 'bold') },
  '.tbd-24': { ...makeFont(24, 'bold') },
  '.tmd-24': { ...makeFont(24, 'medium') },
  '.tmd-22': { ...makeFont(22, 'medium') },
  '.tbd-20': { ...makeFont(20, 'bold') },
  '.tmd-20': { ...makeFont(20, 'medium') },
  '.tbd-18': { ...makeFont(18, 'bold') },
  '.tmd-18': { ...makeFont(18, 'medium') },
  '.trg-18': { ...makeFont(18, 'regular') },
  '.tbd-16': { ...makeFont(16, 'bold') },
  '.tmd-16': { ...makeFont(16, 'medium') },
  '.trg-16': { ...makeFont(16, 'regular') },
  '.tmd-14': { ...makeFont(14, 'medium') },
  '.trg-14': { ...makeFont(14, 'regular') },
  '.tmd-12': { ...makeFont(12, 'medium') },
  '.trg-12': { ...makeFont(12, 'regular') },
};
