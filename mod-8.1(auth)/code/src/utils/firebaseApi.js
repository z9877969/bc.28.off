import axios from "axios";

// axios.defaults.baseURL = "https://bc28react-default-rtdb.firebaseio.com";

const API_KEY = "AIzaSyBhqN3kmr2pOE_VYvh44d2DgAUg9FJqLTU";

const baseUrl = {
  AUTH: "https://identitytoolkit.googleapis.com/v1",
  DB: "https://bc28react-default-rtdb.firebaseio.com",
};

// https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY] - path_to_register
// https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY] - path_to_login
// https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=[API_KEY] - user_update

const path = {
  TODOS: "/todos",
  REGISTER: "/accounts:signUp",
  LOGIN: "/accounts:signInWithPassword",
  GET_CUR_USER: "/accounts:lookup",
};

const defaults = {
  setBaseUrl(url) {
    if (axios.defaults.baseURL !== url) {
      axios.defaults.baseURL = url;
    }
  },
  setParams(params) {
    axios.defaults.params = params;
  },
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

export const editTodoApi = async ({ todo, id }) => {
  try {
    const { data } = await axios.put(path.TODOS + "/" + id + ".json", todo);
    return data;
  } catch (err) {
    throw err.message;
  }
};

export const userRegisterApi = async (userData) => {
  defaults.setBaseUrl(baseUrl.AUTH);
  defaults.setParams({ key: API_KEY });
  try {
    const { data } = await axios.post(path.REGISTER, {
      ...userData,
      returnSecureToken: true,
    });
    const { idToken, localId, email } = data;
    return { idToken, localId, email };
  } catch (error) {
    throw error.message;
  }
};

export const userLoginApi = async (userData) => {
  defaults.setBaseUrl(baseUrl.AUTH);
  defaults.setParams({ key: API_KEY });
  try {
    const { data } = await axios.post(path.LOGIN, {
      ...userData,
      returnSecureToken: true,
    });
    const { idToken, localId, email } = data;
    return { idToken, localId, email };
  } catch (error) {
    throw error.message;
  }
};

export const getCurUserApi = async (idToken) => {
  defaults.setBaseUrl(baseUrl.AUTH);
  defaults.setParams({ key: API_KEY });
  try {
    const { data } = await axios.post(path.GET_CUR_USER, { idToken });
    const { localId, email } = data.users[0];
    return { localId, email };
  } catch (error) {
    throw error.message;
  }
};
