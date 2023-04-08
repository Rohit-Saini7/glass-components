import React from 'react';
import styled from 'styled-components';

const Skeleton = ({
  height = 0,
  width = '100%',
  animate = true,
  visible = true,
  circle = false,
  radius = 4,
}) => {
  return (
    <SkeletonContainer
      height={height}
      width={width}
      animate={animate}
      visible={visible}
      circle={circle}
      radius={radius}
    ></SkeletonContainer>
  );
};

export default Skeleton;

const SkeletonContainer = styled.div`
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
    background: #fff;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 10;
  }
  &::after {
    content: '';
    position: absolute;
    background: #dee2e6;
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
      opacity: 0.4;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0.4;
    }
  }
`;
