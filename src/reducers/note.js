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
        notes,
      };
    case actionsTypes.NOTE_DELETE:
      return {
        ...state,
        notes: state.notes.filter((note) => note.id !== action.payload.id),
      };
    default:
      return state;
  }
};

export { reducers };
