import { actionsTypes } from "../constants/note";

const actions = {
  createNote: ({ id, textContent }) => ({
    type: actionsTypes.NOTE_CREATE,
    payload: { id, textContent },
  }),
  deleteNote: ({ id }) => ({
    type: actionsTypes.NOTE_DELETE,
    payload: { id },
  }),
};

export { actions };
