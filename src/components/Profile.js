import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";

import Loader from "./Loader";

const StyledProfile = styled.div`
  display: flex;
`;

const ProfileImg = styled.img`
  border-radius: 100%;
  width: 53px;
`;

const TextContent = styled.div`
  margin-left: 10px;
  color: var(--primary-text-color);
  align-self: center;

  & h2 {
    margin-top: 0px;
    margin-bottom: 0px;
  }
`;

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <Loader />;
  }

  return (
    isAuthenticated && (
      <StyledProfile>
        <div>
          <ProfileImg src={user.picture} alt={user.name} />
        </div>
        <TextContent>
          <h2>{user.name || user.nickname || ""}</h2>
        </TextContent>
      </StyledProfile>
    )
  );
};

export default Profile;
