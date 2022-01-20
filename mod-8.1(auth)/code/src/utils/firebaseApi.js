import axios from "axios";

// axios.defaults.baseURL = "https://bc28react-default-rtdb.firebaseio.com";

const API_KEY = "AIzaSyBhqN3kmr2pOE_VYvh44d2DgAUg9FJqLTU";

const baseUrl = {
  AUTH: "https://identitytoolkit.googleapis.com/v1",
  DB: "https://bc28react-default-rtdb.firebaseio.com",
  REFRESH: "https://securetoken.googleapis.com/v1",
};

// https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY] - path_to_register
// https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY] - path_to_login
// https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=[API_KEY] - user_update
// https://<DATABASE_NAME>.firebaseio.com/users/ada/name.json?auth=<ID_TOKEN> - for request to DB
// https://securetoken.googleapis.com/v1/token?key=[API_KEY] - refreshToken

const path = {
  TODOS: "/todos",
  REGISTER: "/accounts:signUp",
  LOGIN: "/accounts:signInWithPassword",
  GET_CUR_USER: "/accounts:lookup",
  REFRESH: "/token",
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
  getError(error) {
    console.log(
      "JSON.parse(error.request.responseText) :>> ",
      error.request.responseText
      // JSON.parse(error.request)
    );
    return JSON.parse(error.request.responseText).error;
  },
};

export const addTodoApi = async ({ todo, userId, token }) => {
  defaults.setBaseUrl(baseUrl.DB);
  defaults.setParams({ auth: token });
  try {
    const { data } = await axios.post(
      "/users/" + userId + path.TODOS + ".json",
      todo
    );
    const dataResponse = {
      ...todo,
      id: data.name,
    };
    return dataResponse;
  } catch (err) {
    throw defaults.getError(err);
  }
};

export const getTodosApi = async (userId, token) => {
  defaults.setBaseUrl(baseUrl.DB);
  defaults.setParams({ auth: token });
  try {
    // /users/userId/name.json
    const { data } = await axios.get("/users/" + userId + path.TODOS + ".json");

    return data;
  } catch (err) {
    throw defaults.getError(err);
  }
};

export const removeTodoApi = async ({ id, userId, token }) => {
  defaults.setBaseUrl(baseUrl.DB);
  defaults.setParams({ auth: token });
  try {
    await axios.delete("/users/" + userId + path.TODOS + "/" + id + ".json");

    return id;
  } catch (err) {
    throw defaults.getError(err);
  }
};

export const editTodoApi = async ({ todo, id, userId, token }) => {
  defaults.setBaseUrl(baseUrl.DB);
  defaults.setParams({ auth: token });
  try {
    const { data } = await axios.put(
      "/users/" + userId + path.TODOS + "/" + id + ".json",
      todo
    );
    return data;
  } catch (err) {
    throw defaults.getError(err);
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
    const { idToken, refreshToken, localId, email } = data;
    return { idToken, localId, email, refreshToken };
  } catch (err) {
    throw defaults.getError(err);
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
    const { idToken, localId, email, refreshToken } = data;
    return { idToken, localId, email, refreshToken };
  } catch (err) {
    throw defaults.getError(err);
  }
};

export const getCurUserApi = async (idToken) => {
  defaults.setBaseUrl(baseUrl.AUTH);
  defaults.setParams({ key: API_KEY });
  try {
    const { data } = await axios.post(path.GET_CUR_USER, { idToken });
    const { localId, email } = data.users[0];
    return { localId, email };
  } catch (err) {
    console.log("defaults.getError(err) :>> ", defaults.getError(err));
    throw defaults.getError(err);
  }
};

export const refreshTokenApi = async (refreshToken) => {
  defaults.setBaseUrl(baseUrl.REFRESH);
  defaults.setParams({ key: API_KEY });
  try {
    const { data } = axios.post(path.REFRESH, {
      grant_type: "refresh_token",
      refresh_token: refreshToken,
    });
    const { id_token, refresh_token } = data;
    return { token: id_token, refreshToken: refresh_token };
  } catch (err) {
console.log('err_refreshOperation :>> ', err);
    throw defaults.getError(err);
  }
};
