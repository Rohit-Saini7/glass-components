import React from 'react';
import styled from 'styled-components';

const Button = ({
  bgColor = 'transparent',
  label = 'Button',
  mainColor = 'rgba(255,255, 255 ,0.7)',
  size = { height: '44px', width: '102px' },
  textProps = { lineHeight: '42px', fontSize: '17px', color: '#fff' },
  border = { size: '2px', type: 'solid', radius: '6px', color: 'var(--color)' },
  hoverTextColor = '#000',
}) => {
  return (
    <Btn
      bgColor={bgColor}
      mainColor={mainColor}
      size={size}
      textProps={textProps}
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
  ${({ textProps }) =>
    `line-height: ${textProps.lineHeight}; font-size: ${textProps.fontSize}; color:${textProps.color};`}
  ${({ border }) =>
    `border: ${border.size} ${border.type} ${border.color}; border-radius: ${border.radius};`}
  overflow: hidden;
  z-index: 1;
  position: relative;
  background-color: ${({ bgColor }) => bgColor};

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
