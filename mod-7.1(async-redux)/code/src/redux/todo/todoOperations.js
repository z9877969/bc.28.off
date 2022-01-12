import {createAsyncThunk} from '@reduxjs/toolkit';
import {
  addTodoApi,
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
  removeTodoError,
  removeTodoRequest,
  removeTodoSuccess,
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

// export const removeTodo = (id) => (dispatch) => {
//   dispatch(removeTodoRequest());

//   removeTodoApi(id)
//     .then((id) => dispatch(removeTodoSuccess(id)))
//     .catch((err) => dispatch(removeTodoError(err)));
// };

export const removeTodo = createAsyncThunk("todo", async (id, thunkApi) => {
    try {
        const respId = await removeTodoApi(id)
        return respId
    } catch(err){
        return thunkApi.rejectWithValue(err)
    }
})


