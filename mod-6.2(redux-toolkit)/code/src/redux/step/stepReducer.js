import { combineReducers } from "redux";
import { CHANGE_STEP_DECR, CHANGE_STEP_INCR } from "./stepConstants";

const stepReducerIncr = (state = 5, { type, payload }) => {
  switch (type) {
    case CHANGE_STEP_INCR:
      return payload;
    default:
      return state;
  }
};

const stepReducerDecr = (state = 10, { type, payload }) => {
  switch (type) {
    case CHANGE_STEP_DECR:
      return payload;
    default:
      return state;
  }
};

const stepReducer = combineReducers({
  incr: stepReducerIncr,
  decr: stepReducerDecr,
});

export default stepReducer;
