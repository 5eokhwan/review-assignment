/* root reducer */
import { combineReducers } from "redux";
import filtersReducer from "./filters";
import pageReducer from "./page";

const rootReducer = combineReducers({
  filtersReducer,
  pageReducer,
});

export default rootReducer;
