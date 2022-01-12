import { createAction } from "@reduxjs/toolkit";
import { v4 } from "uuid";

export const addToDo = createAction("todo/add", (todo) => {
  return {
    payload: {
      ...todo,
      id: v4(),
    },
  };
});
export const removeTodo = createAction("todo/remove");

export const addTodoRequest = createAction("addTodoRequest");
export const addTodoSuccess = createAction("addTodoSuccess");
export const addTodoError = createAction("addTodoError");

export const getTodosRequest = createAction("getTodosRequest");
export const getTodosSuccess = createAction("getTodosSuccess");
export const getTodosError = createAction("getTodosError");

export const removeTodoRequest = createAction("removeTodoRequest");
export const removeTodoSuccess = createAction("removeTodoSuccess");
export const removeTodoError = createAction("removeTodoError");
