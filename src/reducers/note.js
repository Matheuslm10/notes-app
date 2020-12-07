import { actionsTypes } from "../constants/note";

const INITIAL_STATE = {
  notes: [],
};

const reducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionsTypes.NOTE_CREATE:
      return {
        // ...state,
        // notes: state.notes.push({ content: action.payload.content }),
      };
    case actionsTypes.NOTE_DELETE:
      return {
        // ...state,
        // notes: state.notes.filter((note) => note.id !== action.payload.id),
      };
    default:
      return state;
  }
};

export { reducers };
