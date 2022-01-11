import axios from "axios";

axios.defaults.baseURL = "https://bc28react-default-rtdb.firebaseio.com";

const path = {
  TODOS: "/todos",
};

export const addTodoApi = async (todo) => {
  try {
    const { data } = axios.post(path.TODOS + ".json", todo);
    return {
      ...todo,
      id: data.name,
    };
  } catch (err) {
    const error = {
      message: err.message,
      status: err.request.status,
    };
    throw error;
  }
};

const transformTodosToArr = (todosObj) =>
  Object.entries(todosObj).map(([id, data]) => ({ ...data, id }));

export const getTodosApi = async () => {
  try {
    const { data } = axios.get(path.TODOS + ".json");
    return transformTodosToArr(data);
  } catch (err) {
    const error = {
      message: err.message,
      status: err.request.status,
    };
    throw error;
  }
};

export const removeTodoApi = async (id) => {
  try {
    axios.delete(path.TODOS + id + ".json");
    return id;
  } catch (err) {
    const error = {
      message: err.message,
      status: err.request.status,
    };
    throw error;
  }
};
