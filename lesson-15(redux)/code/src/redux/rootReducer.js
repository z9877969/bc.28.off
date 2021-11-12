import { combineReducers } from "redux";
import counterReducer from "./counter/counterReducer";
import stepReducer from "./step/stepReducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  step: stepReducer,
});

export default rootReducer;
