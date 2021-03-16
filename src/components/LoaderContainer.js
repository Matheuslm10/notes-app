import React from "react";
import styled from "styled-components";

const StyledLoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  position: fixed;
`;

const LoaderContainer = ({ children }) => {
  return <StyledLoaderContainer>{children}</StyledLoaderContainer>;
};

export default LoaderContainer;
