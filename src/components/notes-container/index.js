import React from "react";
import { useSelector } from "react-redux";

import Note from "../../components/note";
import { selectors } from "../../selectors/notes";

const NotesContainer = () => {
  const notes = useSelector(selectors.getNotes); // isolar o gerenciador de estado.

  return (
    <div>
      {notes && notes.length > 0 ? (
        notes.map((note) => (
          <Note key={note.id} textContent={note.textContent} />
        ))
      ) : (
        <p>There is no notes yet.</p>
      )}
    </div>
  );
};

export default NotesContainer;
