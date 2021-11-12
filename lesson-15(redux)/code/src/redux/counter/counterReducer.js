import { RESET, INCREMENT, DECREMENT } from "./counterConstants";

const counterReducer = (state = 120, action) => {
  // s = 120, action = {type: "counter/reset"}
  switch (action.type) {
    case RESET:
      return 0;
    case INCREMENT:
      return state + action.payload;
    case DECREMENT:
      return state - action.payload;
    default:
      return state;
  }
};

export default counterReducer;
