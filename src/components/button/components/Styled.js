import styled from "styled-components";

const Button = styled.button`
  /* width: 100px; */
  height: 36px;
  padding: 0px 10px 0 10px;
  background: ${(props) => variant[props.variant].backgroundValue};
  box-shadow: ${(props) => variant[props.variant].boxShadowValue};
  border: ${(props) => variant[props.variant].borderValue};
  background: ${(props) =>
    props.color == "blue" ? "rgba( 4, 40, 80, 0.5 )" : ""};
  border-radius: 6px;
  margin: 5px 0;
  &:hover {
    background: ${(props) => variant[props.variant].bgHover};
    cursor: pointer;
    box-shadow: ${(props) => variant[props.variant].hoverBoxShadowValue};
  }
`;
Button.defaultProps = {
  variant: "default",
};

const variant = {
  transparent: {
    borderValue: `none`,
    boxShadowValue: "0 0 0 0",
    backgroundValue: "transparent",
  },
  subtle: {
    borderValue: `none`,
    backgroundValue: "transparent",
    hoverBoxShadowValue: "0px 2px 3px rgba(51, 51, 51, 0.2)",
    bgHover: "#d0cfcf86",
    color: "#3F3F3F",
  },
  default: {
    backgroundValue: "#c9c6c6",
    boxShadowValue: " 0 4px 20px 0 rgba(143, 145, 181, 0.37)",
    color: "#bababa99",
    hoverBoxShadowValue: "0px 2px 3px rgba(51, 51, 51, 0.2)",

    borderValue: "1px solid #bababa ",
  },
  outline: {
    borderValue: "1.3px solid #aac4e1",
    boxShadowValue: " 0 4px 20px 0 rgba(143, 145, 181, 0.37)",
    hoverBoxShadowValue: "0px 2px 3px rgba(51, 51, 51, 0.2)",
    color: "#777d9e84",
    bgHover: "#aac4e1bd",
    backgroundValue: "transparent",
  },
  filled: {
    backgroundValue: "#aac4e1bd",
    // boxShadowValue: " 0 4px 20px 0 rgba(143, 145, 181, 0.37)",
    hoverBoxShadowValue: "0px 2px 3px rgba(51, 51, 51, 0.2)",
    borderValue: "1px solid #828ed073",
    color: "#3D5AFE",
    bgHover: "#bfd0e35e",
  },
  light: {
    color: "#777982",
    hoverBoxShadowValue: "0px 2px 3px rgba(51, 51, 51, 0.2)",
    boxShadowValue: " 0 4px 20px 0 rgba(143, 145, 181, 0.37)",

    backgroundValue: "#9fb1c690",
    borderValue: "1px solid #9094ac83",
  },
  //   hoverFocusType3Button: {
  //     backgroundValue: "rgba(41, 98, 255, 0.251)",
  //     color: "#3D5AFE",
  //     borderValue: "1px solid",
  //     boxShadowValue: "0 4px 8px 0 rgba(13, 37, 65, 0.409)",
  //   },
};
export default Button;
