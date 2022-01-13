import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  addTodoApi,
  editTodoApi,
  getTodosApi,
  removeTodoApi,
} from "../../utils/firebaseApi";
import {
  addTodoError,
  addTodoRequest,
  addTodoSuccess,
  getTodosError,
  getTodosRequest,
  getTodosSuccess,
} from "./todoActions";

export const addTodo = (todo) => (dispatch) => {
  dispatch(addTodoRequest());

  addTodoApi(todo)
    .then((todo) => dispatch(addTodoSuccess(todo)))
    .catch((err) => dispatch(addTodoError(err)));
};

export const getTodos = () => (dispatch) => {
  dispatch(getTodosRequest());

  getTodosApi()
    .then((todos) => dispatch(getTodosSuccess(todos)))
    .catch((err) => dispatch(getTodosError(err)));
};

export const removeTodo = createAsyncThunk(
  "removeTodo",
  async (id, thunkApi) => {
    try {
      const respId = await removeTodoApi(id);
      return respId;
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }
);

export const editTodo = createAsyncThunk(
  "editTodo",
  async ({ id, todo }, { rejectWithValue }) => {
    try {
      const editedTodo = await editTodoApi({ todo, id });
      return {...editedTodo, id};
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
