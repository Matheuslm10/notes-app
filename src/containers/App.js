import React from "react";
import { useDispatch, useSelector } from "reac-redux";

import Note from "../components/note";
import { actions } from "../actions/note";
import { selectors } from "../selectors/notes";

const App = () => {
  const [inputText, setInputText] = useState("");
  const notes = useSelector(selectors.getNotes); // isolar o gerenciador de estado.
  const dispatch = useDispatch();

  const handleInput = (event) => {
    const value = event.target.value;
    setInputText(value);
  };

  const handleCreateNote = () => dispatch(actions.createNote()); // isolar o gerenciador de estado.

  return (
    <div>
      <h1>App Notes</h1>
      <input onChange={handleInput} value={inputText} type="text"></input>
      <button onClick={handleCreateNote}>New Note</button>
      {notes &&
        notes.length > 0 &&
        notes.map((note) => <Note key={note.id} content={note.content} />)}
    </div>
  );
};

export default App;
