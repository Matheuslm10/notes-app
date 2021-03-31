import { actionsTypes } from "../constants/note";

const actions = {
  createNote: ({ id, userID, textContent }) => ({
    type: actionsTypes.NOTE_CREATE,
    payload: { id, userID, textContent },
  }),
  deleteNote: ({ id }) => ({
    type: actionsTypes.NOTE_DELETE,
    payload: { id },
  }),
  updateNote: ({ id, userID, newTextContent }) => ({
    type: actionsTypes.NOTE_UPDATE,
    payload: { id, userID, newTextContent },
  }),
  loadNotes: ({ stateFromLocalStorage }) => ({
    type: actionsTypes.NOTES_LOAD,
    payload: { stateFromLocalStorage },
  }),
};

export { actions };
