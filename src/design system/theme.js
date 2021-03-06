const createMediaQuery = n => `@media screen and (min-width:${n}px)`;

const addAliases = (arr, aliases) =>
  aliases.forEach((key, i) =>
    Object.defineProperty(arr, key, {
      enumerable: false,
      get() {
        return this[i];
      }
    })
  );

export const breakpoints = [500, 900, 1120];

export const mediaQueries = {
  ...breakpoints.map(createMediaQuery),
  reduceMotion: "@media (prefers-reduced-motion: reduce)",
  reduceTransparency: "@media (prefers-reduced-transparency: reduce)"
};

const aliases = ["sm", "md", "lg", "xl"];

addAliases(breakpoints, aliases);
addAliases(mediaQueries, aliases);

export const space = [0, 4, 8, 16, 32, 64, 128, 256, 512];

export const font = `'Montserrat','Helvetica Neue',Helvetica,Arial,sans-serif`;
//export const codeFont = `'source-code-pro', 'Menlo', 'Monaco', 'Consolas', 'Courier New', 'monospace'`

export const fontSizes = [12, 14, 16, 20, 24, 32, 48, 80, 96];

export const regular = 400;
export const bold = 700;

// styled-system's `fontWeight` function can hook into the `fontWeights` object
export const fontWeights = {
  regular,
  bold
};

const letterSpacings = {
  normal: "normal",
  caps: "0.025em",
  tracked: "0.1em",
  tight: "-0.05em",
  mega: "0.25em"
};

// color palette
const black = "#000";
const white = "#fff";
const text = "#001833";
const lightBlue = "#cdf";
const blue = "#007aff"; // primary
const darkBlue = "#049";
const lightGray = "#f6f8fa";
const borderGray = "#d1d6db";
const gray = "#687B8E"; // primary
const darkGray = "#364049";
const lightGreen = "#cec";
const green = "#0a0"; // secondary
const darkGreen = "#060";
const lightRed = "#fcc";
const red = "#c00"; // secondary
const darkRed = "#800";
const lightOrange = "#feb";
const orange = "#fa0"; // secondary
const darkOrange = "#a50";
const lightPurple = "#ecf";
const purple = "#70b"; // secondary
const darkPurple = "#407";

// tints
const flatten = (name, colors) =>
  colors.reduce((a, b, i) => {
    const color = {
      [name + i]: b
    };
    return { ...a, ...color };
  }, {});

const blues = [lightBlue, lightBlue, blue, blue];
const grays = [lightGray, lightGray, gray, gray];
const greens = [lightGreen, lightGreen, green, green];
const reds = [lightRed, lightRed, red, red];
const oranges = [lightOrange, lightOrange, orange, orange];
const purples = [lightPurple, lightPurple, purple, purple];

const colors = {
  black,
  white,
  text,
  blue,
  lightBlue,
  darkBlue,
  gray,
  lightGray,
  borderGray,
  darkGray,
  green,
  lightGreen,
  darkGreen,
  red,
  lightRed,
  darkRed,
  orange,
  lightOrange,
  darkOrange,
  purple,
  lightPurple,
  darkPurple,
  blues,
  greens,
  reds,
  oranges,
  purples,
  ...flatten("blue", blues),
  ...flatten("gray", grays),
  ...flatten("green", greens),
  ...flatten("red", reds),
  ...flatten("orange", oranges),
  ...flatten("purple", purples)
};

export { colors };

// styled-system's `borderRadius` function can hook into the `radii` object/array
export const radii = ['0px', '2px', '4px', '8px', '16px', '32px', "100%"];
export const radius = "2px";

export const maxContainerWidth = "1280px";

// boxShadows
export const boxShadows = [
  `0 0 2px 0 rgba(0,0,0,.08),0 1px 4px 0 rgba(0,0,0,.16)`,
  `0 0 2px 0 rgba(0,0,0,.08),0 2px 8px 0 rgba(0,0,0,.16)`,
  `0 0 2px 0 rgba(0,0,0,.08),0 4px 16px 0 rgba(0,0,0,.16)`,
  `0 0 2px 0 rgba(0,0,0,.08),0 8px 32px 0 rgba(0,0,0,.16)`
];

// animation duration
export const duration = {
  fast: `250ms`,
  normal: `500ms`,
  slow: `750ms`,
  slowest: `1000ms`
};

// animation easing curves
const easeInOut = "cubic-bezier(0.5, 0, 0.25, 1)";
const easeOut = "cubic-bezier(0, 0, 0.25, 1)";
const easeIn = "cubic-bezier(0.5, 0, 1, 1)";

const timingFunctions = {
  easeInOut,
  easeOut,
  easeIn
};

// animation delay
const transitionDelays = {
  small: `60ms`,
  medium: `160ms`,
  large: `260ms`,
  xLarge: `360ms`
};

export const scaleFactor = 17 / 16;

export const shadowColor = "rgba(0,0,0,0.125)";

const theme = {
  breakpoints,
  mediaQueries,
  space,
  font,
  fontSizes,
  fontWeights,
  letterSpacings,
  regular,
  bold,
  colors,
  radii,
  radius,
  boxShadows,
  maxContainerWidth,
  duration,
  timingFunctions,
  transitionDelays,
  scaleFactor
};

export default theme;
