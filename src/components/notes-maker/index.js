import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

import { actions } from "../../actions/notes";
import "./style.css";

const NotesMaker = () => {
  const dispatch = useDispatch();
  const [textContent, setTextContent] = useState("");

  const handleInput = (event) => {
    const value = event.target.value;
    setTextContent(value);
  };

  const handleCreateNote = () => {
    if (textContent) {
      dispatch(actions.createNote({ id: nanoid(), textContent }));
      setTextContent("");
    }
  }; // isolar o gerenciador de estado.

  return (
    <div className="notes-maker">
      <textarea
        className="input-area"
        onChange={handleInput}
        value={textContent}
        type="text"
      ></textarea>
      <button className="new-note-btn" onClick={handleCreateNote}>
        New Note
      </button>
    </div>
  );
};

export default NotesMaker;
