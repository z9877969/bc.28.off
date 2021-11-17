import { createReducer, combineReducers } from "@reduxjs/toolkit";
import {
  changeTodoFilter,
  addTodoSuccess,
  getTodosSuccess,
  removeTodoSuccess,
} from "./todosActions";

const itemsReducer = createReducer([], {
  [addTodoSuccess]: (state, { payload }) => [...state, payload],
  [getTodosSuccess]: (_, { payload }) => payload,
  [removeTodoSuccess]: (state, { payload }) =>
    state.filter((item) => item.id !== payload),
});
const filterReducer = createReducer("all", {
  [changeTodoFilter]: (_, { payload }) => payload,
});

const todosReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

export default todosReducer;
