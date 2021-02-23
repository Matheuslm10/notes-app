import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  text-transform: uppercase;
  font-weight: 700;
  color: var(--primary-text-color);
  margin: 7px 2px 7px 4px;

  &:hover {
    border-radius: 8px;
    background-color: var(--primary-color-darker);
    margin: 4px 0 4px 2px;
    padding: 4px 8px;
    cursor: pointer;
  }

  &:focus {
    outline-style: none;
  }
`;

const Button = (props) => {
  return <StyledButton {...props} />;
};

export default Button;
