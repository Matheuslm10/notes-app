import React from "react";
import styled from "styled-components";

export const Loader = styled.div`
  border: 5px solid var(--background-color-lighter);
  border-radius: 50%;
  border-top: 5px solid var(--primary-color);
  width: 20px;
  height: 20px;
  animation: spin 0.7s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const CentralizingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  position: fixed;
`;

const CentralizedLoader = () => {
  return (
    <CentralizingContainer>
      <Loader />
    </CentralizingContainer>
  );
};

export default CentralizedLoader;
