import React, { FC } from "react";
import { StyledButton } from "./style";
import { ButtonColor } from "./types";

export type ButtonProps = {
  className?: string;
  color?: ButtonColor;
  onClick?: () => void;
  type?: "submit" | "reset" | "button";
};

/**
 * Button ui-kit element, this component can be used many times by changing its appearance and functionality with props.
 *
 * @param className - className for styled-components
 * @param color - color of the button
 * @param type - button type as html attribute
 * @param onClick - onClick function
 * @param children - in children we accept the button text
 *
 * @returns - TSX element (Button component)
 */

export const Button: FC<ButtonProps> = (props) => {
  const { type, children, className, color = "white", onClick } = props;

  return (
    <StyledButton
      className={className}
      color={color}
      onClick={onClick}
      type={type}
    >
      {children}
    </StyledButton>
  );
};
