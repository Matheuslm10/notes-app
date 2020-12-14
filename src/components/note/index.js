import React from "react";
import marked from "marked";
import parse from "html-react-parser";

import "./style.css";

const Note = ({ textContent }) => {
  return (
    <div className="note">
      <div className="buttons">
        <button>Edit</button>
        <button>Delete</button>
      </div>
      <div className="text-content">{parse(marked(textContent))}</div>
    </div>
  );
};

export default Note;
