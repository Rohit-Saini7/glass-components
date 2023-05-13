import React from 'react';
import styled from 'styled-components';
import Circle from './components/Circle';
import { getCircles } from './components/getCircles';

const RingProgress = ({
  size = 150,
  thickness = 10,
  roundCaps = false,
  label = 'It goes in middle.',
  sections = [
    { value: 40, color: 'rgb(0, 255, 255, 0.3)' },
    { value: 15, color: 'rgb(255, 165, 0)' },
    { value: 15, color: 'rgb(255, 255, 0, 0.3)' },
  ],
}) => {
  const cirlces = getCircles({
    size,
    thickness,
    sections,
    roundCaps,
  }).map(({ data, sum, root, lineRoundCaps, offset }, index) => (
    <Circle
      {...data}
      key={index}
      value={!!data ? data.value : ''}
      size={size}
      thickness={thickness}
      sum={sum}
      offset={offset}
      color={!!data ? data.color : ''}
      root={root}
      lineRoundCaps={lineRoundCaps}
      tooltip={!!data ? data.value : ''}
    />
  ));

  return (
    <RingWrapper size={size}>
      <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
        {cirlces}
      </svg>

      {!!label && <Label thickness={thickness}>{label}</Label>}
    </RingWrapper>
  );
};

export default RingProgress;

const RingWrapper = styled.div`
  ${({ size }) => `
  height: ${size}px;
  width: ${size}px;
`}
  position:relative;
  text-align: center;
`;

const Label = styled.label`
  position: absolute;
  top: 50%;
  translate: 0 -50%;
  ${({ thickness }) => `
  right: ${thickness * 2}px;
  left: ${thickness * 2}px;
`}
`;
