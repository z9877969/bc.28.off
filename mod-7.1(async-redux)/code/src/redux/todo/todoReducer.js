import { createReducer, combineReducers, createSlice } from "@reduxjs/toolkit";
import {
  addTodoError,
  addTodoRequest,
  addTodoSuccess,
  getTodosError,
  getTodosRequest,
  getTodosSuccess,
  // removeTodoSuccess,
  // removeTodoRequest,
  // removeTodoError
} from "./todoActions";
import { removeTodo } from "./todoOperations";

// реализация редюсеров
// const itemsReducer = createReducer([], {
//   [addTodoSuccess]: (state, { payload }) => [...state, payload],
//   [getTodosSuccess]: (_, { payload }) => payload,
//   // [removeTodoSuccess]: (state, { payload }) =>
//   //   state.filter(({ id }) => id !== payload),
//   [removeTodo.fulfilled]: (state, { payload }) =>
//     state.filter(({ id }) => id !== payload),
// });

// const isLoadingReducer = createReducer(false, {
//   [addTodoRequest]: () => true,
//   [addTodoSuccess]: () => false,
//   [addTodoError]: () => false,
//   [getTodosRequest]: () => true,
//   [getTodosSuccess]: () => false,
//   [getTodosError]: () => false,
//   // [removeTodoRequest]: () => true,
//   // [removeTodoSuccess]: () => false,
//   // [removeTodoError]: () => false,
//   [removeTodo.pending]: () => true,
//   [removeTodo.fulfilled]: () => false,
//   [removeTodo.rejected]: () => false,
// });

// реализация слайса
const todoSlice = createSlice({
  name: "todos",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [addTodoError]: (state, { payload }) => {
      return { ...state, error: payload, isLoading: false };
    },
    [addTodoRequest]: (state) => {
      return {
        ...state,
        error: null,
        isLoading: true,
      };
    },
    [addTodoSuccess]: (state, { payload }) => {
      return {
        ...state,
        isLoading: false,
        items: [...state.items, payload],
      };
    },
    [getTodosError]: (state, { payload }) => {
      return {
        ...state,
        error: payload,
        isLoading: false,
      };
    },
    [getTodosRequest]: (state) => {
      return {
        ...state,
        error: null,
        isLoading: true,
      };
    },
    [getTodosSuccess]: (state, { payload }) => {
      return {
        ...state,
        isLoading: false,
        items: payload,
      };
    },
    [removeTodo.pending]: (state) => {
      return {
        ...state,
        error: null,
        isLoading: true,
      };
    },
    [removeTodo.fulfilled]: (state, { payload }) => {
      return {
        ...state,
        isLoading: false,
        items: state.items.filter(({ id }) => id !== payload),
      };
    },
    [removeTodo.rejected]: (state, { payload }) => {
      return {
        ...state,
        error: payload,
        isLoading: false,
      };
    },
  },
});

// импорт редюсеров комбайном
// const todoReducer = combineReducers({
//   items: itemsReducer,
//   isLoading: isLoadingReducer,
// });
// export default todoReducer;

// импорт редюсера из слайса
export default todoSlice.reducer;
