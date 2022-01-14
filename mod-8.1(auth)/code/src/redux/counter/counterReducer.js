import { createReducer } from "@reduxjs/toolkit";
import { logOut } from "../auth/authSlice";
import { increment, decrement, reset } from "./counterActions";

// const counterReducer = (state = 200, { type, payload }) => {
//   switch (type) {
//     case "increment":
//       return state + payload;
//     case "decrement":
//       return state - payload;
//     case "reset":
//       return 0;
//     default:
//       return state;
//   }
// };

const iS = 200;

const counterReducer = createReducer(iS, {
  [decrement]: (state, { payload }) => state - payload,
  [increment]: (state, { payload }) => state + payload,
  [reset]: () => 0,
  [logOut]: () => iS,
});

export default counterReducer;
