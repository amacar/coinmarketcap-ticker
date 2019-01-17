import { combineReducers } from "redux";
import { coinsReducer } from "./coinReducers";
import { filterReducer } from "./filterReducer";

const rootReducer = combineReducers({
  coinsReducer,
  filterReducer
});

export default rootReducer;
