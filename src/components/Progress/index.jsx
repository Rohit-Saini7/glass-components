import React from 'react';
import styled from 'styled-components';

const Progress = ({
  value = 20,
  color = '#ddd',
  barColor = 'pink',
  size = 10,
  radius = 10,
  striped = false,
  animate = false,
  label = '',
  'aria-label': ariaLabel,
  sections,
  ...others
}) => {
  function getCumulativeSections(sections) {
    return sections.reduce(
      (acc, section) => {
        acc.sections.push({ ...section, accumulated: acc.accumulated });
        acc.accumulated += section.value;
        return acc;
      },
      { accumulated: 0, sections: [] }
    ).sections;
  }

  const ProgessSegments = Array.isArray(sections)
    ? getCumulativeSections(sections).map(
        (
          {
            accumulated,
            value: sectionValue,
            label: sectionLabel,
            color: sectionColor,
            ...sectionProps
          },
          index
        ) => (
          <Bar
            {...sectionProps}
            key={index}
            width={sectionValue}
            left={accumulated}
            color={!!sectionColor ? sectionColor : 'pink'}
            radius={radius}
          >
            {sectionLabel && <label>{sectionLabel}</label>}
          </Bar>
        )
      )
    : null;
  return (
    <ProgressBar
      {...others}
      color={color}
      height={size}
      radius={radius}
      striped={striped}
      animate={animate}
    >
      {!!ProgessSegments ? (
        ProgessSegments
      ) : (
        <Bar
          role='progressbar'
          aria-valuemax={100}
          aria-valuemin={0}
          aria-valuenow={value}
          aria-label={ariaLabel}
          width={value}
          left={0}
          color={barColor}
          radius={radius}
        >
          {label ? <div>{label}</div> : ''}
        </Bar>
      )}
    </ProgressBar>
  );
};

export default Progress;

const ProgressBar = styled.div`
  position: relative;
  overflow: hidden;

  //changes
  ${({ color, height, radius, striped, animate }) => `
    background-color: ${color};
    height: ${height}px;
    border-radius: ${radius}px;
    & > div {
     background-image: ${
       striped || animate
         ? 'linear-gradient(45deg, rgba(255, 255, 255, 0.3) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.3) 50%, rgba(255, 255, 255, 0.3) 75%, transparent 75%, transparent)'
         : 'none'
     };
      animation: ${
        animate ? `stripesAnimation 1000ms linear infinite` : 'none'
      };
    }
  `}
  @keyframes stripesAnimation {
    from {
      background-position: 0 0;
    }
    to {
      background-position: 40px 0;
    }
  }
`;

const Bar = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: width 100ms linear;
  background-size: 20px 20px;

  & > label {
    color: white;
    font-size: 0.9rem;
    font-weight: 700;
    user-select: none;
    overflow: hidden;
    white-space: nowrap;
  }

  ${({ width, left, color, radius }) => `
  width:${width}%;
  left:${left}%;
  background-color: ${color};

  &:last-of-type {
    border-top-right-radius: ${radius}px;
    border-bottom-right-radius: ${radius}px;
  }
  &:first-of-type {
    border-top-left-radius: ${radius}px;
    border-bottom-left-radius: ${radius}px;
  }
  `}
`;
