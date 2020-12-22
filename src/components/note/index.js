import React, { useState } from "react";
import { useDispatch } from "react-redux";
import marked from "marked";
import parse from "html-react-parser";
import styled from "styled-components";

import { actions } from "../../actions/notes";

const StyledNote = styled.div`
  border-radius: 10px;
  background-color: var(--primary-color);
  color: var(--primary-text-color);
  box-shadow: 4px 4px 5px -2px rgba(0, 0, 0, 0.48);
  margin-top: 10px;
  padding: 10px;
  margin: 0 10px 18px;
  display: block;
`;

const TextContent = styled.div`
  border: none;
  border-radius: 10px;

  & code {
    background-color: var(--primary-color-darker);
    padding: 0.5em 10px;
    margin: 1em 10px;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
  }

  & blockquote {
    background-color: var(--primary-color-darker);
    border-left: 10px solid var(--primary-color-super-darker);
    padding: 0.5em 10px;
    margin: 1em 10px;
  }
`;

const EditingArea = styled.textarea`
  white-space: pre-line;
  background-color: var(--primary-color-darker);
  box-shadow: inset 0px 0px 8px 2px rgba(0, 0, 0, 0.185);
  color: var(--primary-text-color);
  max-width: -webkit-fill-available;
  min-width: -webkit-fill-available;
  height: 120px;
  resize: none;
  padding: 10px;
  border-radius: 8px;
  border: none;
  font-size: 1rem;
  font-family: inherit;

  &:focus {
    outline-style: none;
  }
`;

const Buttons = styled.div`
  text-align: right;
  margin-top: 4px;
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  text-transform: uppercase;
  font-weight: 700;
  color: var(--primary-text-color);
  margin: 7px 2px 7px 4px;

  &:hover {
    border-radius: 8px;
    background-color: var(--primary-color-darker);
    margin: 4px 0 4px 2px;
    padding: 4px 8px;
    cursor: pointer;
  }

  &:focus {
    outline-style: none;
  }
`;

const Note = ({ id, textContent }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [draft, setDraft] = useState();

  const handleDeleteNote = () => {
    if (id) {
      dispatch(actions.deleteNote({ id }));
    }
  }; // isolar o gerenciador de estado. custom hook?

  const handleUpdateNote = () => {
    if (id) {
      dispatch(actions.updateNote({ id, newTextContent: draft }));
      setIsEditing(false);
    }
  }; // isolar o gerenciador de estado. custom hook?

  const updateDraft = (event) => {
    const newContent = event.target.value;
    setDraft(newContent);
  };

  const startEditing = () => {
    setDraft(textContent);
    setIsEditing(true);
  };

  const cancelEditing = () => {
    setDraft(textContent);
    setIsEditing(false);
  };

  return (
    <StyledNote>
      <TextContent>
        {isEditing ? (
          <EditingArea
            spellCheck="false"
            onChange={updateDraft}
            value={draft}
            type="text"
          />
        ) : (
          parse(marked(textContent))
        )}
      </TextContent>
      {isEditing ? (
        <Buttons>
          <Button onClick={cancelEditing}>Cancel</Button>
          <Button onClick={handleUpdateNote}>Save</Button>
        </Buttons>
      ) : (
        <Buttons>
          <Button onClick={startEditing}>Edit</Button>
          <Button onClick={handleDeleteNote}>Delete</Button>
        </Buttons>
      )}
    </StyledNote>
  );
};

export default Note;
