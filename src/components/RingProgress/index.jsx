import React from 'react';
import styled from 'styled-components';
import Circle from './components/Circle';
import { getCircles } from './components/getCircles';

const RingProgress = ({
  label = '',
  roundCaps = false,
  sections = [{}],
  size = 120,
  thickness = 12,
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

/* <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
  <circle
    fill='none'
    strokeLinecap='butt'
    stroke='#f1f3f5'
    strokeWidth='12'
    cx={size / 2}
    cy={size / 2}
    r='42'
    transform={'scale(1, -1) translate(0, -' + { size } + ')'}
    strokeDasharray='26.389378290154262, 237.50440461138837'
    strokeDashoffset='0'
  ></circle>
  <circle
    fill='none'
    strokeLinecap='butt'
    stroke='#15aabf'
    strokeWidth='12'
    cx={size / 2}
    cy={size / 2}
    r='42'
    strokeDasharray='105.55751316061705, 158.3362697409256'
    strokeDashoffset='263.89378290154264'
  ></circle>
  <circle
    fill='none'
    strokeLinecap='butt'
    stroke='#e64980'
    strokeWidth='12'
    cx={size / 2}
    cy={size / 2}
    r='42'
    strokeDasharray='52.778756580308524, 211.1150263212341'
    strokeDashoffset='79.16813487046277'
  ></circle>
  <circle
    fill='none'
    strokeLinecap='butt'
    stroke='#fd7e14'
    strokeWidth='12'
    cx={size / 2}
    cy={size / 2}
    r='42'
    strokeDasharray='79.1681348704628, 184.72564803107986'
    strokeDashoffset='158.33626974092556'
  ></circle>
</svg>; */
