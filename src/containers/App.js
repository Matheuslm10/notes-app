import React from "react";

import NotesMaker from "../components/notes-maker";
import NotesContainer from "../components/notes-container";
import "./style.css";

const App = () => (
  <div className="app">
    <h2 className="app-title">Notes App</h2>
    <NotesMaker />
    <NotesContainer />
  </div>
);

export default App;
