import React, { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import styled from "styled-components";

import { useActions } from "../../hooks/use-actions";

const Button = styled.button`
  background-color: transparent;
  border: none;
  text-transform: uppercase;
  font-weight: 700;
  color: var(--primary-text-color);
  margin: 7px 2px 7px 4px;

  &:hover {
    border-radius: 8px;
    background-color: #3b3b3b;
    margin: 4px 0 4px 2px;
    padding: 4px 8px;
    cursor: pointer;
  }

  &:focus {
    outline-style: none;
  }
`;

const TextArea = styled.textarea`
  max-width: -webkit-fill-available;
  min-width: -webkit-fill-available;
  padding: 10px;
  border-radius: 10px;
  height: 100px;
  box-shadow: 4px 4px 5px -2px rgba(0, 0, 0, 0.48);
  background-color: #353535;
  color: var(--primary-text-color);
  border: none;
  resize: none;
  font-size: 1rem;
  font-family: inherit;

  &:focus {
    outline-style: none;
  }
`;

const StyledNotesMaker = styled.div`
  text-align: right;
  margin: 10px;
  max-width: 625px;
  min-width: 340px;
  width: -webkit-fill-available;
  justify-self: center;
`;

const NotesMaker = () => {
  const { createNote } = useActions();
  const [textContent, setTextContent] = useState("");

  const handleInput = (event) => {
    const value = event.target.value;
    setTextContent(value);
  };

  const handleCreateNote = () => {
    if (textContent) {
      createNote({ id: nanoid(), textContent });
      setTextContent("");
    }
  };

  return (
    <StyledNotesMaker>
      <TextArea
        spellCheck="false"
        onChange={handleInput}
        value={textContent}
        type="text"
      />
      <Button onClick={handleCreateNote}>Add Note</Button>
    </StyledNotesMaker>
  );
};

export default NotesMaker;
