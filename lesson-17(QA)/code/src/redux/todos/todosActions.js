import { createAction } from "@reduxjs/toolkit";

export const setTodos = createAction("todos/setTodos"); // () => ({type:"todos/setTodos", payload: 321321 }) <= setDodos(321321)
export const addTodo = createAction("todos/addTodo");
export const removeTodo = createAction("todos/removeTodo");
export const changeTodoFilter = createAction("todos/changeTodoFilter");
