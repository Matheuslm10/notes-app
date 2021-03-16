import React from "react";
import styled from "styled-components";

const StyledEditingArea = styled.div`
  white-space: pre-line;
  background-color: var(--primary-color-darker);
  box-shadow: inset 0px 0px 8px 2px rgba(0, 0, 0, 0.185);
  color: var(--primary-text-color);
  min-width: -webkit-fill-available;
  padding: 10px;
  border-radius: 8px;
  border: none;
  font-size: 1rem;
  font-family: inherit;
  overflow: auto;

  &:focus {
    outline-style: none;
  }
`;

const EditingArea = (props) => {
  return <StyledEditingArea {...props} />;
};

export default EditingArea;
