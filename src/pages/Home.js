import React from "react";
import styled from "styled-components";

import NotesMaker from "../components/NotesMaker";
import NotesContainer from "../components/NotesContainer";
import Header from "../components/Header";

const StyledHome = styled.div`
  display: grid;
`;

const Title = styled.h2`
  color: var(--primary-text-color);
  margin: 10px 0;
  text-align: center;
  text-shadow: 3px 3px 4px rgba(0, 0, 0, 1);
`;

const Home = () => (
  <StyledHome>
    <Title>Notes App</Title>
    <Header />
    <NotesMaker />
    <NotesContainer />
  </StyledHome>
);

export default Home;
