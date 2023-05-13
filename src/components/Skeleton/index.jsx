import React from 'react';
import styled from 'styled-components';

const Skeleton = ({
  height = 20,
  width = 240,
  animate = false,
  visible = false,
  circle = false,
  radius = 10,
  gap = 10,
}) => {
  return (
    <SkeletonContainer
      height={height}
      width={width}
      animate={animate}
      visible={visible}
      circle={circle}
      radius={radius}
      gap={gap}
    ></SkeletonContainer>
  );
};

export default Skeleton;

const SkeletonContainer = styled.div`
  margin: ${({ gap }) => `${gap / 2}px`} 0;
  ${({ height, width, radius, circle }) => {
    return `
      height : ${height + (isNaN(height) ? '' : 'px')};
      width : ${
        circle
          ? height + (isNaN(height) ? '' : 'px')
          : width + (isNaN(width) ? '' : 'px')
      };
      border-radius : ${
        circle
          ? height + (isNaN(height) ? '' : 'px')
          : radius + (isNaN(height) ? '' : 'px')
      };
    `;
  }}
  position: relative;
  overflow: hidden;
  transform: translateZ(0);
  ${({ visible, animate }) =>
    visible
      ? `&::before {
    content: '';
    position: absolute;
    background: rgb(255, 255, 255, 0.1);
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 10;
  }
  &::after {
    content: '';
    position: absolute;
    background: rgb(108, 108, 108, 0.7);
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    animation: ${animate ? 'fade 1500ms linear infinite' : 'none'};
    z-index: 11;
  }`
      : ''}
  @keyframes fade {
    0% {
      opacity: 0.1;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0.1;
    }
  }
`;
