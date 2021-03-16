import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: transparent;
  height: 32px;
  border: none;
  text-transform: uppercase;
  font-weight: 700;
  color: var(${(props) => "--" + props.textColor});
  margin: 8px 2px 6px 4px;

  &:hover {
    border-radius: 8px;
    background-color: var(${(props) => "--" + props.backgroundColor});
    margin: 8px 0 6px 2px;
    padding: 4px 8px;
    cursor: pointer;
  }

  &:focus {
    outline-style: none;
  }
`;

StyledButton.defaultProps = {
  textColor: "primary-text-color",
  backgroundColor: "primary-color-darker",
};

const Button = (props) => {
  return <StyledButton {...props} />;
};

export default Button;
