import React from "react";
import styled from "styled-components";

import NotesMaker from "../components/notes-maker";
import NotesContainer from "../components/notes-container";
import Header from "../components/Header";

const StyledApp = styled.div`
  display: grid;
`;

const Title = styled.h2`
  color: var(--primary-text-color);
  margin: 10px 0;
  text-align: center;
  text-shadow: 3px 3px 4px rgba(0, 0, 0, 1);
`;

const App = () => (
  <StyledApp>
    <Title>Notes App</Title>
    <Header />
    <NotesMaker />
    <NotesContainer />
  </StyledApp>
);

export default App;
