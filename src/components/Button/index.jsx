import React, { Children } from "react";
import styled from "styled-components";

const Button = ({
  color,
  fontColor,
  varient,
  icon,
  children,
  onClick,
  width,
  height,
  radius = 5,
  size = "md",
  outline = 1,
  disabled,
  ...others
}) => {
  return (
    <ButtonBox
      varient={varient}
      color={color}
      fontColor={fontColor}
      onClick={onClick}
      variant={varient}
      radius={radius}
      width={width}
      height={height}
      outline={outline}
      disabled={disabled}
      {...others}
    >
      {icon && <Icon size={size}>{icon}</Icon>}

      <ChildrenWrap size={size}>{children}</ChildrenWrap>
    </ButtonBox>
  );
};

export default Button;

const ButtonBox = styled.button`
  position: relative;
  display: flex;
  border: ${({ outline }) => outline + "px"} solid
    ${({ color, variant }) => (variant === "outline" ? color : color)};
  background-color: ${({ color, variant }) =>
    variant === "filled" ? color : "transparent"};
  color: ${({ fontColor }) => fontColor};
  width: ${({ width }) => width + "px"};
  height: ${({ height }) => height + "px"};
  border-radius: ${({ radius }) => radius + "px"};
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(15px);
  &:hover {
    background-color: ${({ variant, color }) =>
      variant === "outline" ? color : "transparent"};
    cursor: pointer;
  }
  &:disabled {
    border: 1px solid rgba(233, 236, 239, 1);
    color: rgb(177, 185, 193);
    background: rgb(233, 236, 239);
    box-shadow: none;
    cursor: not-allowed;
  }
`;
const Icon = styled.div`
  box-sizing: border-box;
  line-height: 1;
  width: 25px;
  height: 25px;
  display: flex;
  flex: none;
  align-items: center;
  justify-content: center;
  padding: ${({ size }) => (size === "xs" || size === "sm" ? 14 : 16 + "px")};
`;
const ChildrenWrap = styled.div`
  text-align: center;
  padding: 6.5px;
  padding-left: 5px;
`;
