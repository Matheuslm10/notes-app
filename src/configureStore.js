import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import localStorageSyncEnhancer from "./enhancers/localStorageSync";
import { reducers } from "./reducers";

export default function configureStore(preloadedState) {
  const enhancers = [localStorageSyncEnhancer];
  const composedEnhancers = composeWithDevTools(...enhancers);

  const store = createStore(reducers, preloadedState, composedEnhancers);

  return store;
}
