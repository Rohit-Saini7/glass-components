import React, { useRef } from 'react';
import styled from 'styled-components';

const Input = ({
  type = 'text',
  placeholder = 'Enter Email...',
  errorMessage = 'The Email is invalid',
  inputRef = useRef(),
  errorBgColor = '#d30909',
  errorColor = '#fff',
  placeholderColor = '#aaa',
  labelColor = '#222',
  labelFontSize = 10,
  inputFieldBg = '#f2f2f2',
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
  border: none;
  appearance: none;
  background: ${({ inputFieldBg }) => inputFieldBg};
  padding: 12px;
  border-radius: 3px;
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
  background: ${({ errorBgColor }) => errorBgColor};
  color: ${({ errorColor }) => errorColor};
  height: 24px;
  &:empty {
    display: none;
  }
`;
