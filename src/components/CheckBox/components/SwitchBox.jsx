import React from 'react';
import styled from 'styled-components';

export const SwitchBox = ({
  sliderWidth = 60,
  sliderHeight = 7,
  circleSize = 45,
  sliderColor = 'rgb(91 91 91)',
  circleColor = 'rgb(33 33 33)',
  ...others
}) => {
  return (
    <Switch sliderHeight={sliderHeight} sliderWidth={sliderWidth}>
      <CheckBox
        type='checkbox'
        sliderWidth={sliderWidth}
        circleSize={circleSize}
        {...others}
      />
      <Slider sliderColor={sliderColor}>
        <Circle circleColor={circleColor} circleSize={circleSize} />
      </Slider>
    </Switch>
  );
};

const Switch = styled.label`
  margin: 200px;
  position: relative;
  display: inline-block;
  height: ${({ sliderHeight }) => sliderHeight}px;
  width: ${({ sliderWidth }) => sliderWidth}px;
`;

const CheckBox = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked ~ span > span {
    transform: ${(props) =>
      `translateX(${props.sliderWidth - props.circleSize / 2}px)`};
    transition: 0.4s;
  }
  &:checked ~ span > span::before {
    background-color: #e1e1e1;
    transition: 0.4s;
  }
  &:checked ~ span > span::after {
    width: 0;
    height: 0;
    transition: 0.4s;
  }
`;

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ sliderColor }) => sliderColor};
  transition: 0.4s;
  border-radius: 30px;
  display: flex;
  align-items: center;
`;

const Circle = styled.span`
  background-color: ${({ circleColor }) => circleColor};
  height: ${({ circleSize }) => circleSize}px;
  width: ${({ circleSize }) => circleSize}px;
  border-radius: 50%;
  position: absolute;
  left: 0;
  transform: translateX(-50%);
  transition: 0.4s;
  &::before {
    position: absolute;
    content: '';
    height: ${({ circleSize }) => circleSize * 0.75}px;
    width: ${({ circleSize }) => circleSize * 0.75}px;
    border-radius: 50%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: rgb(182, 182, 182);
    transition: 0.4s;
  }
  &::after {
    content: '';
    background-color: #212121;
    height: ${({ circleSize }) => circleSize * 0.56}px;
    width: ${({ circleSize }) => circleSize * 0.56}px;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: 0.4s;
  }
`;
