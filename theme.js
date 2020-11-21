const BASE_SIZE = 4;

export const palette = {
  backgroundDark: '#191720',
  white: '#fff',
  darkAccent: '#03b591',
  grayAccent: '#5c5b66',
};

export const pxGenerator = function (multiplier) {
  return `${multiplier * BASE_SIZE}px`;
};
