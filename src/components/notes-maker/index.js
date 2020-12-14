import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

import { actions } from "../../actions/notes";

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
    <>
      <input onChange={handleInput} value={textContent} type="text"></input>
      <button onClick={handleCreateNote}>New Note</button>
    </>
  );
};

export default NotesMaker;
