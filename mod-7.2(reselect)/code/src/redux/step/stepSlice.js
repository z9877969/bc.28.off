import { createSlice } from "@reduxjs/toolkit";

const stepSlice = createSlice({
  name: "step",
  initialState: {
    incr: 5,
    decr: 10,
  },
  reducers: {
    changeIncr(state, { payload }) {
      state.incr = payload;
    },
    changeDecr(state, { payload }) {
      state.decr = payload;
    },
  },
});

export const { changeIncr, changeDecr } = stepSlice.actions;
export default stepSlice.reducer;
