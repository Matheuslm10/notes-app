import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import Note from "../../components/note";
import { selectors } from "../../selectors/notes";
import { useActions } from "../../hooks/use-actions";

const DefaultMessage = styled.p`
  color: var(--primary-text-color);
  margin: 20px 10px 40px;
`;

const NotesContainer = () => {
  const { loadNotes } = useActions();
  const notes = useSelector(selectors.getNotes); // isolar o gerenciador de estado.

  useEffect(() => {
    const stateFromLocalStorage = JSON.parse(
      localStorage.getItem("@notes-app_state")
    );

    if (stateFromLocalStorage) {
      loadNotes({ stateFromLocalStorage });
    }
  }, [loadNotes]);

  return (
    <div>
      {notes && notes.length > 0 ? (
        notes
          .map((note) => (
            <Note key={note.id} id={note.id} textContent={note.textContent} />
          ))
          .reverse()
      ) : (
        <DefaultMessage>There is no notes yet.</DefaultMessage>
      )}
    </div>
  );
};

export default NotesContainer;
