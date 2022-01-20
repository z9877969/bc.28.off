export const formatTodosObj = (store) => (next) => (action) => {
  if (action.type === "getTodosSuccess") {
    if (action.payload === null) {
      action.payload = [];
    } else {
      const payload = Object.entries(action.payload).map(([id, data]) => ({
        ...data,
        id,
      }));
      action.payload = payload;
    }
  }
  next(action);
};
