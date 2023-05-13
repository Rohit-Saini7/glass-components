import React from 'react';
import styled from 'styled-components';

const Burger = ({
  opened = false,
  size = 24,
  spacing = 4,
  transitionTime = 300,
  color = 'rgba(205, 93, 93, 1)',
  ...others
}) => {
  return (
    <BurgerButton size={size} spacing={spacing} {...others}>
      <BurgerIcon
        data-opened={opened || undefined}
        size={size}
        color={color}
        transitionTime={transitionTime}
      />
    </BurgerButton>
  );
};

export default Burger;

const BurgerButton = styled.button`
  border-radius: 4px;
  width: ${({ size, spacing }) => size + spacing * 2}px;
  height: ${({ size, spacing }) => size + spacing * 2}px;
  padding: ${({ spacing }) => spacing}px;
  cursor: pointer;
  border: 0;
  appearance: none;
  background-color: transparent;
`;

const BurgerIcon = styled.div`
  position: relative;
  user-select: none;
  box-sizing: border-box;
  &,
  &::before,
  &::after {
    display: block;
    width: ${({ size }) => size}px;
    height: ${({ size }) => Math.ceil(size / 12)}px;
    background: ${({ color }) => color};
    outline: 1px solid transparent;
    transition-property: background-color, transform;
    transition-duration: ${({ transitionTime }) => transitionTime}ms;
    background-color: ${({ color }) => color};
  }
  &::before,
  &::after {
    position: absolute;
    content: '';
    left: 0;
  }
  &::before {
    top: ${({ size }) => Math.ceil(size / 3) * -1}px;
  }
  &::after {
    top: ${({ size }) => Math.ceil(size / 3)}px;
  }
  &[data-opened] {
    background: transparent;
    &::before {
      transform: translateY(${({ size }) => Math.ceil(size / 3)}px)
        rotate(45deg);
    }
    &::after {
      transform: translateY(${({ size }) => -Math.ceil(size / 3)}px)
        rotate(-45deg);
    }
  }
`;
