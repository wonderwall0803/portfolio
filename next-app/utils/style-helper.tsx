const spDesignWidth: number = 390;
const tbDesignWidth: number = 1280;

export const rem = (num: number): string => {
  return `${num / 16}rem`;
};

export const vw = (num: number): string => {
  return `${(num / spDesignWidth) * 100}vw`;
};

export const vwTb = (num: number): string => {
  return `${(num / tbDesignWidth) * 100}vw`;
};

export const media = {
  pc: '@media (min-width: 769px)',
  sp: '@media (max-width: 768px)',
  tb: '@media (min-width: 769px) and (max-width: 1280px)'
};
