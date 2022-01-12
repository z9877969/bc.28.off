import { createSlice } from "@reduxjs/toolkit";
import {
  addTodoError,
  addTodoRequest,
  addTodoSuccess,
  getTodosError,
  getTodosRequest,
  getTodosSuccess,
} from "./todoActions";
import { removeTodo } from "./todoOperations";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [addTodoError]: (state, { payload }) => ({
      ...state,
      error: payload,
      isLoading: false,
    }),
    [addTodoRequest]: (state) => ({
      ...state,
      error: null,
      isLoading: true,
    }),
    [addTodoSuccess]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      items: [...state.items, payload],
    }),
    [getTodosError]: (state, { payload }) => ({
      ...state,
      error: payload,
      isLoading: false,
    }),
    [getTodosRequest]: (state) => ({
      ...state,
      error: null,
      isLoading: true,
    }),
    [getTodosSuccess]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      items: payload,
    }),
    [removeTodo.pending]: (state) => ({
      ...state,
      error: null,
      isLoading: true,
    }),
    [removeTodo.fulfilled]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      items: state.items.filter(({ id }) => id !== payload),
    }),
    [removeTodo.rejected]: (state, { payload }) => ({
      ...state,
      error: payload,
      isLoading: false,
    }),
  },
});

export default todoSlice.reducer;
