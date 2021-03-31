import React, { useEffect, useState } from "react";
import marked from "marked";
import parse from "html-react-parser";
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";

import { useActions } from "../hooks/use-actions";
import Button from "./Button";
import EditingArea from "./EditingArea";
import TextContent from "./TextContent";

const StyledNote = styled.div`
  border-radius: 10px;
  background-color: var(--primary-color);
  color: var(--primary-text-color);
  box-shadow: 4px 4px 5px -2px rgba(0, 0, 0, 0.48);
  margin-top: 10px;
  padding: 10px;
  margin: 0 10px 18px;
  display: block;
  width: 330px;
  height: fit-content;
  break-inside: avoid;
`;

const Buttons = styled.div`
  text-align: right;
  margin-top: 4px;
`;

const Note = ({ id, textContent }) => {
  const { deleteNote, updateNote } = useActions();
  const [isEditing, setIsEditing] = useState(false);
  const [draft, setDraft] = useState();
  const {
    user: { sub: user_id },
  } = useAuth0();

  const handleDeleteNote = () => {
    deleteNote({ id });
  };

  const handleUpdateNote = () => {
    updateNote({ id, userID: user_id, newTextContent: draft });
    setIsEditing(false);
  };

  const startEditing = () => {
    setDraft(textContent);
    setIsEditing(true);
  };

  const cancelEditing = () => {
    setDraft(textContent);
    setIsEditing(false);
  };

  useEffect(() => {
    const updateDraft = () => {
      const newContent = document.getElementById("editing-area").innerText;
      setDraft(newContent);
    };

    if (isEditing) {
      document
        .getElementById("editing-area")
        .addEventListener("input", updateDraft);
    }
  }, [isEditing]);

  return (
    <StyledNote>
      <TextContent>
        {isEditing ? (
          <EditingArea
            id="editing-area"
            spellCheck="false"
            contentEditable="true"
            suppressContentEditableWarning={true}
          >
            {textContent}
          </EditingArea>
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
