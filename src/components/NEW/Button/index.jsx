import React from 'react';
import styled from 'styled-components';

const Button = ({
  label = 'Button',
  mainColor = '#0077ff',
  size = { height: '44px', width: '102px' },
  textSize = { lineHeight: '42px', fontSize: '17px' },
  border = { size: '2px', type: 'solid', radius: '6px', color: 'var(--color)' },
  hoverTextColor = '#fff',
}) => {
  return (
    <Btn
      mainColor={mainColor}
      size={size}
      textSize={textSize}
      border={border}
      hoverTextColor={hoverTextColor}
    >
      {label}
    </Btn>
  );
};

export default Button;

const Btn = styled.button`
  --color: ${({ mainColor }) => mainColor};
  ${({ size }) => `width: ${size.width}; height: ${size.height};`}
  ${({ textSize }) =>
    `line-height: ${textSize.lineHeight}; font-size: ${textSize.fontSize};`}
  ${({ border }) =>
    `border: ${border.size} ${border.type} ${border.color}; border-radius: ${border.radius};`}
  overflow: hidden;
  z-index: 1;
  color: var(--color);
  position: relative;

  &:before {
    content: '';
    position: absolute;
    background: var(--color);
    width: 150px;
    height: 200px;
    z-index: -1;
    border-radius: 50%;
    top: 100%;
    left: 100%;
    transition: 0.3s all;
  }

  &:hover {
    color: ${({ hoverTextColor }) => hoverTextColor};
    &::before {
      top: -30px;
      left: -30px;
    }
  }
`;
