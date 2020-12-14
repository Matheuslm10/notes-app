import React, { useState } from "react";
import { useDispatch } from "react-redux";
import marked from "marked";
import parse from "html-react-parser";

import { actions } from "../../actions/notes";
import "./style.css";

const Note = ({ id, textContent }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);

  const handleDeleteNote = () => {
    if (id) {
      dispatch(actions.deleteNote({ id }));
    }
  }; // isolar o gerenciador de estado.

  const handleUpdateNote = () => {
    if (id) {
      dispatch(actions.updateNote({ id }));
    }
  }; // isolar o gerenciador de estado.

  return (
    <div className="note">
      {isEditing ? (
        <div className="buttons">
          <button onClick={() => setIsEditing(false)}>Cancel</button>
          <button onClick={handleUpdateNote}>Save Changes</button>
        </div>
      ) : (
        <div className="buttons">
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={handleDeleteNote}>Delete</button>
        </div>
      )}
      <div className="text-content">
        {isEditing ? (
          <div className="editing">{textContent}</div>
        ) : (
          parse(marked(textContent))
        )}
      </div>
    </div>
  );
};

export default Note;
