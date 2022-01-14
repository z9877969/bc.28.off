import { createReducer } from "@reduxjs/toolkit";
import { logOut } from "../auth/authSlice";
import { changeFilter } from "./filterActions";

const iS = "all";

const filterReducer = createReducer("all", {
  [changeFilter]: (_, { payload }) => payload,
  [logOut]: () => iS,
});

export default filterReducer;
