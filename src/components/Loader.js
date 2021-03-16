import React from "react";
import styled from "styled-components";

const StyledLoader = styled.div`
  border: 5px solid var(--background-color-lighter);
  border-radius: 50%;
  border-top: 5px solid var(--primary-color);
  width: 20px;
  height: 20px;
  -webkit-animation: spin 0.7s linear infinite; /* Safari */
  animation: spin 0.7s linear infinite;

  /* Safari */
  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Loader = () => {
  return <StyledLoader />;
};

export default Loader;
