import { createAction } from "@reduxjs/toolkit";
// export const increment = (value) => ({
//   type: "increment",
//   payload: value,
// });

export const increment = createAction("increment");

// export const decrement = (value) => ({
//   type: "decrement",
//   payload: value,
// });
export const decrement = createAction("decrement");

// export const reset = () => ({
//     type: "reset",
// })
export const reset = createAction("reset");
