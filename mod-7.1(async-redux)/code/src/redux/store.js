// from mod-6.1
// import { createStore, combineReducers } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import counterReducer from "./counter/counterReducer";
// import stepReducer from "./step/stepReducer";
import stepReducer from "./step/stepSlice";
import todos from "./todo/todoReducer";
import filter from "./filter/filterReducer";

// from mod-6.1
// const rootReducer = combineReducers({
//   counter: counterReducer,
//   step: stepReducer,
// });
// const store = createStore(rootReducer, composeWithDevTools());

// const persistConfig = {
//   // config for persist todos to LS
//   key: "todos",
//   version: 1,
//   storage,
//   whitelist: ["todos"],
// };

// const logger = (store) => (next) => (action) => {
//   console.group("actioType ", action.type);

//   const prevState = store.getState();
//   console.log("prevState :>> ", prevState);
//   // console.log("payload :>> ", action.payload);
//   const result = next(action);
//   console.log("action :>> ", result);
//   const currentState = store.getState();
//   console.log("currentState :>> ", currentState);

//   console.groupEnd();
// };

// const thunk = (store) => (next) => (action) => {
//   if (typeof action === "function") {
//     action(store.dispatch, store.getState);
//     return;
//   }
//   next(action);
// };

const middleware = (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  })
    .concat
    // logger,
    // thunk
    ();

const transformTodoObj = (store) => (next) => (action) => {
  if (action.type === "getTodosSuccess") {
    const payload = Object.entries(action.payload).map(([id, data]) => ({
      ...data,
      id,
    }));
    action.payload = payload;
  }
  next(action);
};

const rootReducer = combineReducers({
  counter: counterReducer,
  step: stepReducer,
  todos,
  filter,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(transformTodoObj),
  devTools: process.env.NODE_ENV !== "production",
});

export const persistor = persistStore(store);

export default store;

// const actionSuccess = createAction("actionSuccess")

// const operation = (data) => (dispatch, getState) => {
//   dispatch({ type: "actionRequest" });
//   requestApi(data)
//     .then((data) => dispatch(actionSuccess(data)))
//     .catch((err) => dispatch({ type: "actionError", payload: err.message }));
// };

// const actionCreator = () => ({
//   type: "actionType",
//   payload: "wqeq",
// });

// dispatch(actionCreator());
// dispatch(operation());
