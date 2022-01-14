export const formatTodosObj = (store) => (next) => (action) => {
    if (action.type === "getTodosSuccess") {
      const payload = Object.entries(action.payload).map(([id, data]) => ({
        ...data,
        id,
      }));
      action.payload = payload;
    }
    next(action);
  };