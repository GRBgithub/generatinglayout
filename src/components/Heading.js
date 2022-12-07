import React from "react";
import styled from "styled-components";

// Create a <Title> react component that renders an <h1> which is
// centered, palevioletred and sized at 1.5em
const Heading = styled.h1`
  position: absolute;
  top: ${(props) => (props.top ? props.top : "")};
  left: ${(props) => (props.left ? props.left : "")};
  font-size: ${(props) => (props.fontsize ? props.fontsize : "")};
  text-align: ${(props) => (props.textalign ? props.textalign : "")};
  color: ${(props) => (props.color ? props.color : "")};
`;

export default Heading;
