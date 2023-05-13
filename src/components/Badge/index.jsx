import React from 'react';
import styled from 'styled-components';

const Badge = ({
  color = 'rgba(255, 255, 25, 0.3)',
  fontColor = 'rgba(0, 17, 17, 1)',
  size = 24,
  radius = 20,
  fullWidth = false,
  leftSection,
  rightSection,
  children,
  ...others
}) => {
  return (
    <BadgeWrapper
      color={color}
      fontColor={fontColor}
      fullWidth={fullWidth}
      radius={radius}
      size={size}
      {...others}
    >
      {!!leftSection && <LeftSection>{leftSection}</LeftSection>}
      <MiddleSection>{children}</MiddleSection>
      {!!rightSection && <RightSection>{rightSection}</RightSection>}
    </BadgeWrapper>
  );
};

export default Badge;

const BadgeWrapper = styled.div`
  font-family: sans-serif;
  text-decoration: none;
  height: ${({ size }) => size}px;
  font-size: ${({ size }) => size / 2}px;
  line-height: 18px;
  padding: 0 10px;
  box-sizing: border-box;
  display: ${({ fullWidth }) => (fullWidth ? 'flex' : 'inline-flex')};
  align-items: center;
  justify-content: center;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
  text-transform: uppercase;
  border-radius: ${({ radius }) => radius}px;
  font-weight: 700;
  letter-spacing: 0.25px;
  text-overflow: ellipsis;
  overflow: hidden;
  background: ${({ color }) => color};
  color: ${({ fontColor }) => fontColor};
  border: 1px solid transparent;
`;

const LeftSection = styled.span`
  margin-right: 10px;
`;

const MiddleSection = styled.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const RightSection = styled.span`
  margin-left: 10px;
`;
