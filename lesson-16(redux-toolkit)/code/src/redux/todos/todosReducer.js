import { createReducer, combineReducers } from "@reduxjs/toolkit";
import {
  addTodo,
  removeTodo,
  changeTodoFilter,
  setTodos,
} from "./todosActions";

// const iS = {
//     items: [],
//     filter: "all"
// }

const itemsReducer = createReducer([], {
  [setTodos]: (_, { payload }) => payload,
  [addTodo]: (state, { payload }) => [...state, payload],
  [removeTodo]: (state, { payload }) =>
    state.filter((todo) => todo.id !== payload),
});
const filterReducer = createReducer("all", {
  [changeTodoFilter]: (_, { payload }) => payload, // high || madia || low
});

const todosReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

export default todosReducer;
