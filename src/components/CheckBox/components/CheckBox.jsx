import React, { useState } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';

export const CheckBox = ({
  size = 40,
  strokeWidth = 4,
  strokeColor = 'limegreen',
  radio = false,
  ...others
}) => {
  const [{ viewBox, cSize, r }, setSvgDimensions] = useState({
    viewBox: '0 0 40 40',
    cSize: '20',
    r: '14',
  });

  useEffect(() => {
    setSvgDimensions({
      viewBox: `0 0 ${size} ${size}`,
      cSize: size / 2,
      r: (size * 0.9 - strokeWidth * 2) / 2,
    });
  }, []);

  return (
    <CheckBoxWrapper size={size}>
      <Checkbox
        type={radio ? 'radio' : 'checkbox'}
        strokeColor={strokeColor}
        {...others}
      />
      <StrokeWrapper viewBox={viewBox}>
        <Stroke
          cx={cSize}
          cy={cSize}
          r={r}
          strokeColor={strokeColor}
          strokeWidth={strokeWidth}
        />
      </StrokeWrapper>
      <Slider size={size} />
    </CheckBoxWrapper>
  );
};

const CheckBoxWrapper = styled.label`
  position: relative;
  display: inline-block;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border-radius: 50%;
`;

const Checkbox = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  position: absolute;

  &:checked ~ span {
    background-color: ${({ strokeColor }) => strokeColor};
    transform: scale(0.8);
    border-radius: 50%;
  }

  &:checked ~ span::before {
    transform: rotateZ(360deg);
    scale: 1;
    border-radius: 50%;
  }

  &:hover ~ svg > circle {
    stroke-dashoffset: 0;
  }
`;

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.4s;
  border-radius: 50%;

  &::before {
    position: absolute;
    content: '';
    height: ${({ size }) => size * 0.75}px;
    width: ${({ size }) => size * 0.75}px;
    border-radius: 2.5px;
    left: 50%;
    bottom: 50%;
    translate: -50% 50%;
    background-color: white;
    transition: 0.4s;
    scale: 0;
  }
`;

const StrokeWrapper = styled.svg`
  z-index: 100;
  position: relative;
  cursor: pointer;
  border-radius: 50%;
`;

const Stroke = styled.circle`
  fill: none;
  stroke: ${({ strokeColor }) => strokeColor};
  stroke-miterlimit: 10;
  stroke-width: ${({ strokeWidth }) => strokeWidth};
  stroke-dashoffset: 300%;
  stroke-dasharray: 300%;
  transition: ease all 0.6s;
  -webkit-transition: ease all 0.6s;
`;
