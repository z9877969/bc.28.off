import axios from "axios";

axios.defaults.baseURL = "https://bc28react-default-rtdb.firebaseio.com";

const path = {
  TODOS: "/todos",
};

export const addTodoApi = async (todo) => {
  try {
    const { data } = await axios.post(path.TODOS + ".json", todo);
    const dataResponse = {
      ...todo,
      id: data.name,
    };
    return dataResponse;
  } catch (err) {
    throw err.message;
  }
};

export const getTodosApi = async () => {
  try {
    const { data } = await axios.get(path.TODOS + ".json");

    return data;
  } catch (err) {
    throw err.message;
  }
};

export const removeTodoApi = async (id) => {
  try {
    await axios.delete(path.TODOS + "/" + id + ".json");

    return id;
  } catch (err) {
    throw err.message;
  }
};
