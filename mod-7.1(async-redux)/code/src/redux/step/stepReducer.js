import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { CHANGE_STEP_DECR, CHANGE_STEP_INCR } from "./stepConstants";
import { changeStepIncr, changeStepDecr } from "./stepAction";

// const stepReducerIncr = (state = 5, { type, payload }) => {
//   switch (type) {
//     case CHANGE_STEP_INCR:
//       return payload;
//     default:
//       return state;
//   }
// };

// const stepReducerDecr = (state = 10, { type, payload }) => {
//   switch (type) {
//     case CHANGE_STEP_DECR:
//       return payload;
//     default:
//       return state;
//   }
// };

const stepReducerIncr = createReducer(5, {
  [changeStepIncr]: (_, { payload }) => payload,
});

const stepReducerDecr = createReducer(10, {
  [changeStepDecr]: (_, { payload }) => payload,
});

// const stepReducer = createReducer(
//   {
//     incr: 5,
//     decr: 10,
//   },
//   {
//     [changeStepIncr]: (state, { payload }) => ({ ...state, incr: payload }),
//     [changeStepDecr]: (state, { payload }) => ({ ...state, decr: payload }),
//   }
// );

const stepReducer = combineReducers({
  incr: stepReducerIncr,
  decr: stepReducerDecr,
});

export default stepReducer;
