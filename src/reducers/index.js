import { combineReducers } from "redux";

import { reducers as noteReducers } from "./note";

const reducers = combineReducers({
  noteReducers,
});

export { reducers };
