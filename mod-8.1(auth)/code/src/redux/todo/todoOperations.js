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

export const addTodo = (todo) => (dispatch, getState) => {
  dispatch(addTodoRequest());
  const {
    token,
    user: { userId },
  } = getState().auth;

  addTodoApi({ todo, userId, token })
    .then((todo) => dispatch(addTodoSuccess(todo)))
    .catch((err) => dispatch(addTodoError(err)));
};

export const getTodos = () => (dispatch, getState) => {
  dispatch(getTodosRequest());

  const {
    token,
    user: { userId },
  } = getState().auth;

  getTodosApi(userId, token)
    .then((todos) => dispatch(getTodosSuccess(todos)))
    .catch((err) => dispatch(getTodosError(err)));
};

export const removeTodo = createAsyncThunk(
  "removeTodo",
  async (id, { getState, rejectWithValue }) => {
    const {
      token,
      user: { userId },
    } = getState().auth;
    try {
      const respId = await removeTodoApi({ id, userId, token });
      return respId;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const editTodo = createAsyncThunk(
  "editTodo",
  async ({ id, todo }, { rejectWithValue, getState }) => {
    const {
      token,
      user: { userId },
    } = getState().auth;
    try {
      const editedTodo = await editTodoApi({ todo, id, userId, token });
      return { ...editedTodo, id };
    } catch (err) {
      console.log('rejectWithValue(err) :>> ', rejectWithValue(err));
      return rejectWithValue(err);
    }
  }
);
