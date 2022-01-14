import { createSlice } from "@reduxjs/toolkit";
import { logOut } from "../auth/authSlice";
import {
  addTodoError,
  addTodoRequest,
  addTodoSuccess,
  getTodosError,
  getTodosRequest,
  getTodosSuccess,
} from "./todoActions";
import { removeTodo, editTodo } from "./todoOperations";

const initialState = {
  items: [],
  editedTodo: null,
  isLoading: false,
  error: null,
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    openEditedTodo(state, { payload }) {
      state.editedTodo = payload;
    },
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
    [editTodo.pending]: (state, { payload }) => {
      state.isLoading = true;
      state.error = null;
    },
    [editTodo.fulfilled]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      editedTodo: null,
      items: state.items.map((todo) =>
        todo.id !== payload.id ? todo : payload
      ),
    }),
    [editTodo.rejected]: (state, { payload }) => ({
      ...state,
      error: payload,
      isLoading: false,
    }),
    [logOut]: () => initialState,
  },
});

export const { openEditedTodo } = todoSlice.actions;
export default todoSlice.reducer;
