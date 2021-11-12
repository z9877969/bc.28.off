import { CHANGE_DECR, CHANGE_INCR } from "./stepConstants";

export const changeStepIncr = (step) => ({
  type: CHANGE_INCR,
  payload: step,
});
export const changeStepDecr = (step) => ({
  type: CHANGE_DECR,
  payload: step,
});
