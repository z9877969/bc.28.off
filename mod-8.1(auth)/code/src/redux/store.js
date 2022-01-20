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
import { formatTodosObj } from "./_middlewares/formatTodosObj";
import counterReducer from "./counter/counterReducer";
import stepReducer from "./step/stepSlice";
import todos from "./todo/todoReducer";
import filter from "./filter/filterReducer";
import auth from "./auth/authSlice";
import lang from "./lang/langSlice";

const authPersistConfig = {
  key: "token",
  version: 1,
  storage,
  whitelist: ["token", "refreshToken"],
};

const persistConfig = {
  key: "lang",
  version: 1,
  storage,
  whitelist: ["lang"],
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, auth),
  counter: counterReducer,
  step: stepReducer,
  todos,
  filter,
  lang,
});

const middleware = (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }).concat(formatTodosObj);

const store = configureStore({
  reducer: persistReducer(persistConfig, rootReducer),
  middleware,
  devTools: process.env.NODE_ENV !== "production",
});

export const persistor = persistStore(store);

export default store;
