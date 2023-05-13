import React, { useRef } from 'react';
import styled from 'styled-components';

const Input = ({
  type = 'email',
  placeholder = 'Enter Email...',
  errorMessage = 'The Email is invalid',
  inputRef = useRef(),
  errorBgColor = 'transparent',
  errorColor = '#ed0b0b',
  placeholderColor = '#aaa',
  labelColor = '#fff',
  labelFontSize = 10,
  inputFieldBg = 'transparent',
  inputBorder = '1px solid #fff',
  fontColor = '#fff',
}) => {
  return (
    <Container>
      <InputField
        type={type}
        placeholder='&nbsp;'
        ref={inputRef}
        labelColor={labelColor}
        labelFontSize={labelFontSize}
        inputFieldBg={inputFieldBg}
        inputBorder={inputBorder}
        fontColor={fontColor}
      />
      <Placeholder placeholderColor={placeholderColor}>
        {placeholder}
      </Placeholder>
      <ErrorMessage errorBgColor={errorBgColor} errorColor={errorColor}>
        {errorMessage}
      </ErrorMessage>
    </Container>
  );
};

export default Input;

const Container = styled.label`
  position: relative;
  font-size: 14px;
  border-top: 20px solid transparent;
  margin-bottom: 5px;
  display: inline-block;
  & > * {
    box-sizing: border-box;
  }
`;

const InputField = styled.input`
  color: ${({ fontColor }) => fontColor};
  border: none;
  border-bottom: ${({ inputBorder }) => inputBorder};
  appearance: none;
  background: ${({ inputFieldBg }) => inputFieldBg};
  padding: 12px;
  border-radius: ${({ inputBorder }) => (!!inputBorder ? '' : '3px')};
  width: 250px;
  outline: none;
  font-size: 14px;
  &:focus ~ span,
  &:not(:placeholder-shown) ~ span {
    top: -${({ labelFontSize }) => labelFontSize}px;
    font-size: ${({ labelFontSize }) => labelFontSize}px;
    color: ${({ labelColor }) => labelColor};
  }
  &:focus ~ div,
  &:valid ~ div {
    opacity: 0;
  }
`;

const Placeholder = styled.span`
  position: absolute;
  left: 12px;
  width: calc(100% - 24px);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  top: 22px;
  line-height: 100%;
  transform: translateY(-50%);
  color: ${({ placeholderColor }) => placeholderColor};
  transition: top 0.3s ease, color 0.3s ease, font-size 0.3s ease;
`;

const ErrorMessage = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 8px;
  font-size: 12px;
  font-weight: bold;
  background: ${({ errorBgColor }) => errorBgColor};
  color: ${({ errorColor }) => errorColor};
  height: 24px;
  &:empty {
    display: none;
  }
`;
