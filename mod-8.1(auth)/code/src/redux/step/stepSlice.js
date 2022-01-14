import { createSlice } from "@reduxjs/toolkit";
import { logOut } from "../auth/authSlice";

const iS = {
  incr: 5,
  decr: 10,
};

const stepSlice = createSlice({
  name: "step",
  initialState: iS,
  reducers: {
    changeIncr(state, { payload }) {
      state.incr = payload;
    },
    changeDecr(state, { payload }) {
      state.decr = payload;
    },
  },
  extraReducers: {
    [logOut]: () => iS
  }
});

export const { changeIncr, changeDecr } = stepSlice.actions;
export default stepSlice.reducer;
