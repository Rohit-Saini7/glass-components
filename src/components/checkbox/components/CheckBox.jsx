import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ColorToHexa from "./ColorToHexa";

export const CheckBox = (props) => {
  useEffect(() => {
    if (props.color.charAt(0) != "#") {
      var clr = ColorToHexa(props.color) + "50";
      //   console.log(props + "50");
      //   console.log(props.color, "hexa");
    }
  }, []);
  const [check, setCheck] = useState(props.checked);
  const changeHandler = (e) => {
    console.log(e.target.checked);
    setCheck(!check);
  };
  return (
    <Label>
      <Check
        name={props.name}
        value={!!props.value ? props.value : props.label}
        label={props.label}
        checked={check}
        id={props.id}
        onChange={changeHandler}
        disabled={props.disabled}
        intermidiate={props.intermidiate}
        icon={props.icon}
        color={ColorToHexa(props.color)}
      />
      <LabelText>{props.label}</LabelText>
    </Label>
  );
};
// {ColorToHexa(props.color) + "09"}
CheckBox.defaultProps = {
  checked: false,
  disabled: false,
};
const Check = styled.input.attrs({ type: "checkbox" })`
  width: 20px;
  height: 20px;
  accent-color: ${(p) => p.color + "11"};
  opacity: 0.7;
  /* accent-color: #3d3d4186; */
  /* accent-color: #a8789408; */
  /* display: grid;  */
  accent-color: ${(p) => (p.disabled ? "#3d3d4186" : p.color)};
  place-content: center;
  ::before {
    content: "";
    width: 15px;
    height: 15px;
    /* accent-color: ${(p) => p.color + "10"}; */
    /* border-radius: 4px; */
    /* transform: scale(0); */
    /* transition: 100ms transform ease-in-out; */
    /* box-shadow: inset 10px 10px var(--form-control-color); */
    /* background: green; */
    /* background: ${(p) => p.color}; */
  }
  :checked::before {
    transform: scale(1);
  }
`;
const Label = styled.div`
  align-items: center;
  text-align: center;
  display: flex;
  gap: 10px;
  margin-bottom: 4px;
  margin-left: 10px;
`;

const LabelText = styled.span``;
