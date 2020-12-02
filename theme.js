const BASE_SIZE = 4;

export const palette = {
  // backgroundDark: '#191720',
  backgroundDark: '#14131a',
  backgroundGray: '#1e1c24',
  white: '#fff',
  accent: '#03b591',
  grayAccent: '#5c5b66',
};

export const pxGenerator = function (multiplier) {
  if (typeof multiplier !== 'number') return 0;

  return multiplier * BASE_SIZE;
};
