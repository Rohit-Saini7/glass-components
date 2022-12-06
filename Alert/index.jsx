import React from 'react';
import styled from 'styled-components';

const Alert = ({
  title,
  variant = 'light',
  children,
  color,
  fontColor,
  icon,
  onClose,
  radius = 4,
  withCloseButton,
  ...others
}) => {
  return (
    <AlertWrapper
      variant={variant}
      radius={radius}
      color={color}
      fontColor={fontColor}
      role='alert'
      {...others}
    >
      {icon && <Icon>{icon}</Icon>}
      <Body>
        {title && <Heading>{title}</Heading>}
        {!!children && <Description>{children}</Description>}
      </Body>
      {withCloseButton && (
        <CloseButton onClick={onClose}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 320 512'
            fill='currentColor'
          >
            <path d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z' />
          </svg>
        </CloseButton>
      )}
    </AlertWrapper>
  );
};

export default Alert;

const AlertWrapper = styled.div`
  position: relative;
  overflow: hidden;
  padding: 12px 16px;
  padding-left: ${({ icon, loading }) =>
    !!icon || !!loading ? '10px' : '16px'};
  border-radius: ${({ radius }) => radius}px;
  border: 1px solid
    ${({ color, variant }) => (variant === 'outline' ? color : 'transparent')};
  display: flex;
  background-color: ${({ color, variant }) =>
    variant === 'filled' ? color : 'rgba(231, 245, 255, 1)'};
  color: ${({ fontColor }) => fontColor};
`;

const Icon = styled.div`
  box-sizing: border-box;
  line-height: 1;
  width: 20px;
  height: 20px;
  display: flex;
  flex: none;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  margin: 1px;
`;

const Body = styled.div`
  flex: 1;
  overflow: hidden;
  margin-right: 10px;
`;

const Heading = styled.div`
  box-sizing: border-box;
  margin: 0;
  margin-bottom: 7px;
  line-height: 1;
  font-size: 1rem;
  font-weight: 700;
  text-decoration: none;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #212529;
`;

const Description = styled.div`
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.55;
  font-size: 0.8rem;
`;

const CloseButton = styled.button`
  cursor: pointer;
  appearance: none;
  font-size: 1rem;
  text-align: left;
  border: 1px solid transparent;
  background: transparent;
  color: #868e96;
  position: relative;
  height: 28px;
  width: 28px;
  border-radius: 4px;
  padding: 0;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.1s;
  & > svg {
    height: 16px;
    width: 16px;
  }
  &:hover {
    background-color: #55555548;
  }
  &:active {
    translate: 0 2px;
  }
`;
