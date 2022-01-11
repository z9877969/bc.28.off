import { createReducer } from "@reduxjs/toolkit";
import { addToDo, removeTodo } from "./todoActions";

// helpers for saving to LS
// const setTodosToLS = (todos) =>
//   localStorage.setItem("todos", JSON.stringify(todos));
// const getTodosFromLS = () => JSON.parse(localStorage.getItem("todos"));

const todoReducer = createReducer(
  // getTodosFromLS() || [] // initialState with custom methode
  [],
  {
    [addToDo]: (state, { payload }) => {
      const newTodos = [...state, payload];
      // setTodosToLS(newTodos); // save to LS with custom methode
      return newTodos;
    },
    [removeTodo]: (state, { payload }) => {
      const newTodos = state.filter(({ id }) => id !== payload);
      // setTodosToLS(newTodos); // save to LS with custom methode
      return newTodos;
    },
  }
);

export default todoReducer;
