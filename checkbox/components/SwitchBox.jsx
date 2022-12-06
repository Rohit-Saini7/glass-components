import React, { useState } from "react";
import styled from "styled-components";
export const SwitchBox = ({
  checked,
  name,
  id,
  disabled,
  value,
  label,
  size,
}) => {
  const [check, setCheck] = useState(checked);
  {
    console.log(check);
  }
  const changeHandler = (e) => {
    setCheck(!check);
  };
  return (
    <SwitchContaioner>
      <Switch
        checked={check}
        name={name}
        id={id}
        disabled={disabled}
        value={value}
        label={label}
        className="glassCheck"
        onChange={changeHandler}
        size={size}
      />
      <SwitchLabel onClick={changeHandler} size={size}></SwitchLabel>
    </SwitchContaioner>
  );
};
SwitchBox.defaultProps = {
  checked: false,
  size: "sm" || "xs" || "lg" || "xl",
};
const SwitchContaioner = styled.div`
  margin-top: 200px;
  background-color: rgba(255, 255, 255, 0.3);
  padding: 10px;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.3);
`;
const Switch = styled.input.attrs({ type: "checkbox" })`
  opacity: 0;
  visibility: hidden;
  z-index: -100;
  display: none;
`;
const SwitchLabel = styled.label`
  position: relative;
  display: block;
  cursor: pointer;
  /* width: 80px;
  height: 30px; */
  width: 60px;
  height: 25px;
  z-index: 10000;
  background-color: rgba(255, 255, 255, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(3px);
  border-radius: 100px;
  transition: background-color 0.4s;
  ${Switch}:checked + && {
    background-color: #f86fc1;
    border-color: transparent;
  }
  ::before {
    content: "";
    position: absolute;
    display: block;
    /* width: 30px;
    height: 40px; */
    width: 25px;
    height: 35px;
    /* top: 153%; */
    top: 187%;
    left: 30px;
    transform: translate(-30px, -50px);
    background-color: rgba(255, 255, 255, 0.4);
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-right: 1px solid rgba(255, 255, 255, 0.1);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 15px;
    border-radius: 10px;
    transition: transform 0.4s;
    backdrop-filter: blur(7px);
  }
  ${Switch}:checked + &&::before {
    transform: translate(6px, -130%);
  }
`;
