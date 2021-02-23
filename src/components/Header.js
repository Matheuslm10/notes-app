import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";

import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import Profile from "./Profile";

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px;
`;

const Header = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <StyledHeader>
      <Profile />
      {isAuthenticated ? <LogoutButton /> : <LoginButton />}
    </StyledHeader>
  );
};

export default Header;
