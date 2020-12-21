import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Note from "../../components/note";
import { selectors } from "../../selectors/notes";
import { actions } from "../../actions/notes";

const NotesContainer = () => {
  const dispatch = useDispatch();
  const notes = useSelector(selectors.getNotes); // isolar o gerenciador de estado.

  useEffect(() => {
    const stateFromLocalStorage = JSON.parse(
      localStorage.getItem("@notes-app_state")
    );

    if (stateFromLocalStorage) {
      dispatch(actions.loadNotes({ stateFromLocalStorage }));
    }
  }, [dispatch]);

  return (
    <div>
      {notes && notes.length > 0 ? (
        notes
          .map((note) => (
            <Note key={note.id} id={note.id} textContent={note.textContent} />
          ))
          .reverse()
      ) : (
        <p>There is no notes yet.</p>
      )}
    </div>
  );
};

export default NotesContainer;
