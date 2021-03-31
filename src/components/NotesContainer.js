import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";

import Note from "./Note";
import { useActions } from "../hooks/use-actions";
import { useSelectEntireState } from "../hooks/use-select-entire-state";

const StyledNotesContainer = styled.div`
  column-gap: 0px;
  column-count: 5;
  margin: 0 auto;

  @media screen and (min-width: 1527px) and (max-width: 1906px) {
    column-count: 4;
  }

  @media screen and (min-width: 1147px) and (max-width: 1526px) {
    column-count: 3;
  }

  @media screen and (min-width: 767px) and (max-width: 1146px) {
    column-count: 2;
  }

  @media screen and (max-width: 766px) {
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
  const [userNotes, setUserNotes] = useState([]);
  const {
    user: { sub: user_id },
  } = useAuth0();

  useEffect(() => {
    const loggedUserNotes = (notes || []).filter(
      (note) => note.userID === user_id
    );
    setUserNotes(loggedUserNotes);
  }, [notes, user_id]);

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
      {userNotes && userNotes.length > 0 ? (
        userNotes
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
