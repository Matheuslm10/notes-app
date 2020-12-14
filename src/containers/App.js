import React from "react";

import NotesMaker from "../components/notes-maker";
import NotesContainer from "../components/notes-container";
import "./style.css";

const App = () => (
  <div className="app">
    <p>Notes App</p>
    <NotesMaker />
    <NotesContainer />
  </div>
);

export default App;
