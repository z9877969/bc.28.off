import { createReducer } from "@reduxjs/toolkit";
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
const counterReducer = createReducer(200, {
  [decrement]: (state, { payload }) => state - payload,
  [increment]: (state, { payload }) => state + payload,
  [reset]: () => 0,
});

export default counterReducer;
