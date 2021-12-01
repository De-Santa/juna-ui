import { keyframes, css } from "styled-components";

const fadeInAnimation = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; } 
`;

const theme = {
  animation: {
    fadeIn: css`0.5s linear ${fadeInAnimation}`,
  },
  size: {
    mobile: 320,
    tablet: 767,
    laptop: 1024,
    desktop: 1280,
  },
  device: {
    mobile: `(max-width: 320px)`,
    tablet: `(max-width: 767px)`,
    laptop: `(max-width: 1024px)`,
    desktop: `(max-width: 1280px)`,
  },
  color: {
    orangeRed: `#ff665b`,
    black: `#000`,
    white: `#fff`,
    mainDark: `#372d4c`,
    mainLight: `#8388AA`,
    borderGray: `#E2E2EE`,
    backgroundGray: `#f3f3f8`,
    red: "#FF584B",
    blue: "#4D9BFF",
    green: "#6ED284",
  },
};

export default theme;
