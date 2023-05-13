import React from 'react';
import styled from 'styled-components';

const Notification = ({
  color = 'rgba(255, 255, 255, 0.2)',
  radius = 10,
  loading = false,
  disallowClose = false,
  title = 'This is title.',
  onClose = () => console.log('closed'),
  icon = '',
  children,
  ...others
}) => {
  return (
    <NotificationWrapper
      role='alert'
      icon={icon}
      loading={loading}
      color={color}
      radius={radius}
      {...others}
    >
      {!!icon && !loading ? (
        <Icon>
          <img src={icon} alt='' />
        </Icon>
      ) : (
        <Loader />
      )}
      <Body>
        {!!title && <Heading>{title}</Heading>}
        <Description>{children}</Description>
      </Body>

      {!disallowClose && (
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
    </NotificationWrapper>
  );
};

export default Notification;

const NotificationWrapper = styled.div`
  box-sizing: border-box;
  position: relative;
  display: flex;
  align-items: center;
  padding: 10px 5px 10px;
  padding-left: ${({ icon, loading }) =>
    !!icon || !!loading ? '10px' : '22px'};
  border-radius: ${({ radius }) => radius}px;
  background-color: rgba(3, 65, 251, 0.2);
  border: 1px solid #aaa;

  &::before {
    content: '';
    display: ${({ icon, loading }) => (!!icon || !!loading ? 'none' : 'block')};
    position: absolute;
    width: 6px;
    top: ${({ radius }) => Math.min(Math.max(radius / 1.2, 4), 30)}px;
    bottom: ${({ radius }) => Math.min(Math.max(radius / 1.2, 4), 30)}px;
    left: 4px;
    border-radius: 4px;
    background-color: ${({ color }) => color};
  }
  & > svg {
    margin-right: 16px;
  }
`;

const Icon = styled.div`
  box-sizing: border-box;
  width: 28px;
  height: 28px;
  border-radius: 28px;
  display: flex;
  flex: none;
  align-items: center;
  justify-content: center;
  margin-right: 16px;
  background-color: #228be6;
`;

const Loader = () => {
  return (
    <svg
      width='28px'
      height='28px'
      viewBox='0 0 38 38'
      xmlns='http://www.w3.org/2000/svg'
      stroke='#228be6'
      role='presentation'
    >
      <g fill='none' fillRule='evenodd'>
        <g transform='translate(2.5 2.5)' strokeWidth='5'>
          <circle strokeOpacity='.5' cx='16' cy='16' r='16'></circle>
          <path d='M32 16c0-9.94-8.06-16-16-16'>
            <animateTransform
              attributeName='transform'
              type='rotate'
              from='0 16 16'
              to='360 16 16'
              dur='1s'
              repeatCount='indefinite'
            ></animateTransform>
          </path>
        </g>
      </g>
    </svg>
  );
};

const Body = styled.div`
  flex: 1;
  overflow: hidden;
  margin-right: 10px;
`;

const Heading = styled.div`
  line-height: 1.4;
  font-weight: 500;
  font-size: 1rem;
  text-decoration: none;
  margin-bottom: 2px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Description = styled.div`
  line-height: 1.4;
  font-size: 0.9rem;
  overflow: hidden;
  text-overflow: ellipsis;
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
