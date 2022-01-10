const counterReducer = (state = 200, { type, payload }) => {
  switch (type) {
    case "increment":
      return state + payload;
    case "decrement":
      return state - payload;
    case "reset":
      return 0;
    default:
      return state;
  }
};

export default counterReducer;
