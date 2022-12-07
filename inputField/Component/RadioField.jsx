import React from "react";
import styled from "styled-components";
export const RadioField = ({
  type = "radio",
  value,
  id,
  name,
  color,
  size,
  height,
  width,
  label,
  txtColor,
  //   placeholder,
  onChange,
  checked,
}) => {
  return (
    <Radio>
      <RadioButton
        type={type}
        value={!!value ? value : label}
        id={id}
        name={name}
        color={color}
        size={size}
        height={height}
        width={width}
        label={label}
        textcolor={txtColor}
        onChange={onChange}
        checked={checked}
      />
      <RadioLabel>{label}</RadioLabel>
    </Radio>
  );
};

const Radio = styled.div``;
const RadioButton = styled.input.attrs({ type: "radio" })``;
const RadioLabel = styled.label``;
