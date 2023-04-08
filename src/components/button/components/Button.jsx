import React from "react";
import styled from "styled-components";
import Buttons from "./Styled";
export const Button = (props) => {
  return (
    <ButtonContainer>
      <ButtonComp
        color={props.color}
        size={props.size}
        fontSize={props.fontSize}
        gap={props.gap}
        radius={props.radius}
        textColor={props.textColor}
        variant={props.variant}
        onClick={props.onClick}
      >
        {console.log(props)}
        {props.children}
      </ButtonComp>
    </ButtonContainer>
  );
};

const ButtonContainer = styled.div`
  /* border: 1px solid; */
  /* height: 25px; */
  text-align: center;
`;
const ButtonComp = styled(Buttons)`
  display: flex;
  margin: 5px;
  margin-left: auto;
  margin-right: auto;
  height: 35px;
  gap: 8px;
  gap: ${(props) => props.gap}px;
  background-color: ${(props) => props.color};
  background: ${(props) => props.color == "blue" && "rgba(4,40,80,0.5)"};
  background: ${(props) => props.color == "red" && "rgba(208,2,27,0.5)"};
  background: ${(props) => props.color == "green" && "rgba(65,117,5,0.5 )"};
  background: ${(props) => props.color == "dark" && "rgba(0,0,0,0.45)"};
  color: ${(props) => props.color == "dark" && "white"};
  background: ${(props) => props.color == "yellow" && "rgba(65,117,5,0.5)"};
  background: ${(props) => props.color == "tomato" && "rgba(255,99,71,0.5)"};
  color: ${(props) => props.textColor};
  font-size: ${(props) => props.fontSize}px;
  border-radius: ${(props) => props.radius}px;
  /* box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37); */
  backdrop-filter: blur(4px);
  border-radius: 5px;
  /* border: 1px solid rgba(140, 138, 138, 0.18); */
  /* border: ${(props) => (props.variant == "transparent" ? `none` : "")}; */
  /* text-align: center; */
  padding: 2px;
  padding-right: 15px;
  padding-left: 15px;
  box-sizing: content-box;
  align-items: center;
  img {
    height: 30px;
    width: 30px;
    height: ${(props) => props.size}px;
    width: ${(props) => props.size}px;
    background-color: transparent;
  }
  &:hover {
    /* color: white; */
    color: ${(props) => {
      props.textColor != "black" || props.color != "black"
        ? "black"
        : "#fefefe";
    }};
    img {
      filter: invert(20%) sepia(10%) saturate(2878%) hue-rotate(346deg)
        brightness(108%) contrast(106%);
    }
    /* background-color: ${(props) =>
      props.variant == "subtle" ? props.color : ""}; */
  }
`;
