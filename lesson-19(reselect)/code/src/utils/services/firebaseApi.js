import axios from "axios";

// https://[PROJECT_ID].firebaseio.com/message_list.json

axios.defaults.baseURL = "https://bc11-7c3e8-default-rtdb.firebaseio.com/";

export const addTodoApi = (todo) => {
  return axios
    .post("/todos.json", todo)
    .then(({ data }) => ({ ...todo, id: data.name }))
    .catch((err) => {
      throw err;
    });
};

export const getTodosApi = () => {
  return axios
    .get("/todos.json")
    .then(({ data }) => data)
    .catch((err) => {
      throw err;
    });
};

export const removeTodoApi = (id) => {
  return axios
    .delete("/todos/" + id + ".json") // null
    .then(() => id) // data = null
    .catch((err) => {
      throw err;
    });
};
