import { combineReducers } from "redux";
import counterReducer from "./counter/counterReducer";
import stepReducer from "./step/stepReducer";
import todosReducer from "./todos/todosReducer";
import loaderReducer from "./loader/loaderReducer";
import errorReducer from "./error/errorReducer";

const rootReducer = combineReducers({
  todos: todosReducer,
  counter: counterReducer,
  step: stepReducer,
  isLoading: loaderReducer,
  error: errorReducer,
});

export default rootReducer;
