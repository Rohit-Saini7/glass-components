import React from 'react';

const Circle = ({
  size,
  value,
  offset,
  sum,
  thickness,
  root,
  color,
  lineRoundCaps,
  tooltip,
  others,
}) => {
  return (
    <circle
      {...others}
      fill='none'
      title={!!tooltip ? tooltip : null}
      strokeLinecap={lineRoundCaps ? 'round' : 'butt'}
      stroke={color}
      {...getCurveProps({ offset, root, size, sum, thickness, value })}
    />
  );
};

export default Circle;

const getCurveProps = ({ offset, root, size, sum, thickness, value }) => {
  const radius = (size * 0.9 - thickness * 2) / 2;
  const deg = (Math.PI * radius * 2) / 100;

  const strokeDasharray = root
    ? `${(100 - sum) * deg}, ${sum * deg}`
    : `${value * deg}, ${(100 - value) * deg}`;

  return {
    strokeWidth: thickness,
    cx: size / 2,
    cy: size / 2,
    r: radius,
    transform: root ? `scale(1, -1) translate(0, -${size})` : null,
    strokeDasharray,
    strokeDashoffset: root ? 0 : offset,
  };
};
