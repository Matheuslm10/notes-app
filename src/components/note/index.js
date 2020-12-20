import React, { useState } from "react";
import { useDispatch } from "react-redux";
import marked from "marked";
import parse from "html-react-parser";

import { actions } from "../../actions/notes";
import "./style.css";

const Note = ({ id, textContent }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [draft, setDraft] = useState();

  const handleDeleteNote = () => {
    if (id) {
      dispatch(actions.deleteNote({ id }));
    }
  }; // isolar o gerenciador de estado.

  const handleUpdateNote = () => {
    if (id) {
      dispatch(actions.updateNote({ id, newTextContent: draft }));
      setIsEditing(false);
    }
  }; // isolar o gerenciador de estado.

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
    <div className="note">
      {isEditing ? (
        <div className="buttons">
          <button onClick={cancelEditing}>Cancel</button>
          <button onClick={handleUpdateNote}>Save Changes</button>
        </div>
      ) : (
        <div className="buttons">
          <button onClick={startEditing}>Edit</button>
          <button onClick={handleDeleteNote}>Delete</button>
        </div>
      )}
      <div className="text-content">
        {isEditing ? (
          <textarea
            className="editing-area"
            onChange={updateDraft}
            value={draft}
            type="text"
          ></textarea>
        ) : (
          parse(marked(textContent))
        )}
      </div>
    </div>
  );
};

export default Note;
