import { actionsTypes } from "../constants/note";

const INITIAL_STATE = {
  notes: [],
};

const reducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionsTypes.NOTE_CREATE:
      const notes = [...state.notes];
      notes.push({ ...action.payload });
      return {
        ...state,
        notes,
      };
    case actionsTypes.NOTE_DELETE:
      return {
        ...state,
        notes: state.notes.filter((note) => note.id !== action.payload.id),
      };
    case actionsTypes.NOTE_UPDATE:
      return {
        ...state,
        notes: state.notes.map((note) =>
          note.id === action.payload.id
            ? { ...note, textContent: action.payload.newTextContent }
            : note
        ),
      };
    case actionsTypes.NOTES_LOAD: {
      return action.payload.stateFromLocalStorage;
    }
    default:
      return state;
  }
};

export { reducers };
