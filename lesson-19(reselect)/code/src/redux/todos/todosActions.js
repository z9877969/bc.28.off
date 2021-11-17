import { createAction } from "@reduxjs/toolkit";

export const changeTodoFilter = createAction("todos/changeTodoFilter");

export const addTodoRequest = createAction("todo/addTodoRequest");
export const addTodoSuccess = createAction("todo/addTodoSuccess");
export const addTodoError = createAction("todo/addTodoError");

export const getTodosRequest = createAction("todo/getTodosRequest");
export const getTodosSuccess = createAction("todo/getTodosSuccess");
export const getTodosError = createAction("todo/getTodosError");

export const removeTodoRequest = createAction("todo/removeTodoRequest");
export const removeTodoSuccess = createAction("todo/removeTodoSuccess");
export const removeTodoError = createAction("todo/removeTodoError");
