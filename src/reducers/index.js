import { combineReducers } from "redux";

import movieReducer from "./movieReducer";
import favouriteReducer from "./favouriteReducer";

const rootReducer = combineReducers({
  movieReducer,
  favouriteReducer,
});
export default rootReducer;
