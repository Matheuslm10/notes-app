import React from "react";
import styled from "styled-components";

const StyledTextContent = styled.div`
  border: none;
  border-radius: 10px;

  & code {
    background-color: var(--primary-color-darker);
    padding: 0.5em 10px;
    margin: 1em 10px;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
  }

  & blockquote {
    background-color: var(--primary-color-darker);
    border-left: 10px solid var(--primary-color-super-darker);
    padding: 0.5em 10px;
    margin: 1em 10px;
  }
`;

const TextContent = (props) => {
  return <StyledTextContent {...props} />;
};

export default TextContent;
