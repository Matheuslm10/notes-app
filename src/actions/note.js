const actions = {
  createNote: () => ({
    type: "NOTE_CREATE",
    payload: { id, content },
  }),
  deleteNote: () => ({
    type: "NOTE_DELETE",
    payload: { id },
  }),
};

export { actions };
