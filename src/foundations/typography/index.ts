function headingBase(fontSize: string, lineHeight: string) {
  return {
    fontSize,
    fontWeight: '700',
    lineHeight,
    letterSpacing: '-0.3px',
  };
}

function titleBase(fontSize: string, lineHeight: string) {
  return {
    fontSize,
    fontWeight: '500',
    lineHeight,
    letterSpacing: '-0.3px',
  };
}

function bodyBase(fontSize: string, lineHeight: string) {
  return {
    fontSize,
    fontWeight: '400',
    lineHeight,
    letterSpacing: '-0.3px',
  };
}

export const typography = {
  '.heading-1': { ...headingBase('40px', '60px') },
  '.heading-2': { ...headingBase('34px', '50px') },
  '.heading-3': { ...headingBase('32px', '40px') },
  '.heading-4': { ...headingBase('24px', '36px') },
  '.heading-5': { ...headingBase('20px', '30px') },
  '.heading-6': { ...headingBase('18px', '27px') },
  '.heading-7': { ...headingBase('16px', '24px') },
  '.title-medium-1': { ...titleBase('16px', '24px') },
  '.title-medium-2': { ...titleBase('15px', '22px') },
  '.title-medium-3': { ...titleBase('14px', '21px') },
  '.title-medium-4': { ...titleBase('13px', '20px') },
  '.title-medium-5': { ...titleBase('12px', '18px') },
  '.title-medium-6': { ...titleBase('11px', '16px') },
  '.body-1': { ...bodyBase('16px', '24px') },
  '.body-2': { ...bodyBase('15px', '23px') },
  '.body-3': { ...bodyBase('14px', '21px') },
  '.body-4': { ...bodyBase('13px', '20px') },
  '.hyperlink': { ...bodyBase('13px', '20px') },
  '.caption-1': { ...bodyBase('12px', '18px') },
  '.caption-2': { ...bodyBase('11px', '16px') },
};
