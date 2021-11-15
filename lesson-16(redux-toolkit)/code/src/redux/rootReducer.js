import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import counterReducer from "./counter/counterReducer";
import stepReducer from "./step/stepReducer";
import todosReducer from "./todos/todosReducer";

const todosPersistConfig = {
  key: "todos",
  version: 1,
  storage: storage,
  whitelist: ["items"]
};

const todosPersistReducer = persistReducer(todosPersistConfig, todosReducer);

const rootReducer = combineReducers({
  todos: todosPersistReducer,
  counter: counterReducer,
  step: stepReducer,
});

export default rootReducer;
