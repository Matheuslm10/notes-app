const localStorageSyncEnhancer = (createStore) => (
  reducer,
  initialState,
  enhancer
) => {
  const synchronizedReducer = (state, action) => {
    const newState = reducer(state, action);

    const isInitAction = action && action.type && action.type === "@@INIT";

    if (!isInitAction) {
      localStorage.setItem(
        "@notes-app_state",
        JSON.stringify(newState.noteReducers)
      );
    }

    return newState;
  };

  return createStore(synchronizedReducer, initialState, enhancer);
};

export default localStorageSyncEnhancer;
