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

const persistConfig = {
  // config for persist todos to LS
  key: "todos",
  version: 1,
  storage,
  whitelist: ["todos"],
};

const middleware = (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  });

const rootReducer = combineReducers({
  counter: counterReducer,
  step: stepReducer,
  todos,
  filter,
});

const store = configureStore({
  reducer: persistReducer(persistConfig, rootReducer), // persisted RootReducer with config for todos
  middleware,
  devTools: process.env.NODE_ENV !== "production",
});

export const persistor = persistStore(store);

export default store;
