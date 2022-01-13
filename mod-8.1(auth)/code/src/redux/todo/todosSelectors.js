import { createSelector } from "@reduxjs/toolkit";

export const getTodos = (state) => state.todos.items;
export const getFilter = (state) => state.filter;
export const getEditedTodo = (state) => state.todos.editedTodo;

export const getVisibleTodos = (state) => {
  const filter = getFilter(state);
  const todos = getTodos(state);

  if (filter === "all") return todos;
  return todos.filter((todo) => todo.priority === filter);
};

export const getVisibleTodosMemo = createSelector(
  [getFilter, getTodos],
  (filter, todos) =>
    filter === "all" ? todos : todos.filter((todo) => todo.priority === filter)
);
