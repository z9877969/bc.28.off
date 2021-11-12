import { RESET, INCREMENT, DECREMENT } from "./counterConstants";

export const counterReset = () => ({
  type: RESET,
});
export const counterIncrement = (step) => ({
  type: INCREMENT,
  payload: step,
});
export const counterDecrement = (step) => ({
  type: DECREMENT,
  payload: step,
});
