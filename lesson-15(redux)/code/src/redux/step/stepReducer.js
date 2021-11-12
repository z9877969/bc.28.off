import { combineReducers } from "redux";
import { CHANGE_DECR, CHANGE_INCR } from "./stepConstants";

const stepReducerIncr = (state = 10, { type, payload }) => {
  switch (type) {
    case CHANGE_INCR:
      return payload;
    default:
      return state;
  }
};
const stepReducerDecr = (state = 10, { type, payload }) => {
  switch (type) {
    case CHANGE_DECR:
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
