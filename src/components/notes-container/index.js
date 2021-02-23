import React, { useEffect } from "react";
import styled from "styled-components";

import Note from "../../components/note";
import { useActions } from "../../hooks/use-actions";
import { useSelectEntireState } from "../../hooks/use-select-entire-state";

const StyledNotesContainer = styled.div`
  column-count: 5;
  column-gap: 10px;

  @media (min-width: 1201px) and (max-width: 1500px) {
    column-count: 4;
  }

  @media (min-width: 769px) and (max-width: 1200px) {
    column-count: 3;
  }

  @media (min-width: 321px) and (max-width: 768px) {
    column-count: 2;
  }

  @media (max-width: 320px) {
    column-count: 1;
  }
`;

const DefaultMessage = styled.p`
  color: var(--primary-text-color);
  margin: 20px 10px 40px;
`;

const NotesContainer = () => {
  const { loadNotes } = useActions();
  const { notes } = useSelectEntireState();

  useEffect(() => {
    const stateFromLocalStorage = JSON.parse(
      localStorage.getItem("@notes-app_state")
    );

    if (stateFromLocalStorage) {
      loadNotes({ stateFromLocalStorage });
    }
  }, [loadNotes]);

  return (
    <StyledNotesContainer id="masonry">
      {notes && notes.length > 0 ? (
        notes
          .map((note) => (
            <Note key={note.id} id={note.id} textContent={note.textContent} />
          ))
          .reverse()
      ) : (
        <DefaultMessage>There is no notes yet.</DefaultMessage>
      )}
    </StyledNotesContainer>
  );
};

export default NotesContainer;
