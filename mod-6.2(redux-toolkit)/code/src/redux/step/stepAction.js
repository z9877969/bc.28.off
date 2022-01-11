import {createAction} from '@reduxjs/toolkit';
// import { CHANGE_STEP_INCR, CHANGE_STEP_DECR } from "./stepConstants";

// export const changeStepIncr = (step) => ({
//   type: CHANGE_STEP_INCR,
//   payload: step,
// });

// export const changeStepDecr = (step) => ({
//   type: CHANGE_STEP_DECR,
//   payload: step,
// });

export const changeStepIncr = createAction("changeStepIncr")
export const changeStepDecr = createAction("changeStepDecr")