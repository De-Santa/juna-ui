import styled from "styled-components";
import theme from "../constants/theme";
import { ButtonColor } from "./types";

const handleBorderType = (color: ButtonColor) => {
  switch (color) {
    case "white":
      return `1px solid ${theme.color.orangeRed}`;
    default:
      return "none";
  }
};

const handleColorType = (color: ButtonColor) => {
  switch (color) {
    case "white":
      return `${theme.color.mainDark}`;
    default:
      return `${theme.color.white}`;
  }
};

const handleBackgroundType = (color: ButtonColor) => {
  switch (color) {
    case "gradient":
      return "linear-gradient(88.5deg, #c83ef3 17.43%, #ff584b 82.38%)";
    case "red":
      return `${theme.color.orangeRed}`;
    default:
      return "none";
  }
};

export const StyledButton = styled.button<{ color: ButtonColor }>`
  border: ${({ color }) => handleBorderType(color)};
  color: ${({ color }) => handleColorType(color)};
  background: ${({ color }) => handleBackgroundType(color)};
  width: 193px;
  font-size: 14px;
  outline: none;
  height: 48px;
  border-radius: 38px;
  cursor: pointer;
`;
