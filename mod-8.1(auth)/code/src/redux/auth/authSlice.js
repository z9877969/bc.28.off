import { createSlice } from "@reduxjs/toolkit";
import { userRegister, userLogin, getCurUser, refreshTokenRequest, refreshTokenSuccess, refreshToken, refreshTokenError } from "./authOperations";

const initialState = {
  user: {
    email: null,
    userId: null,
  },
  token: null,
  refreshToken: null,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOut() {
      return initialState;
    },
  },
  extraReducers: {
    [userRegister.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [userRegister.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.token = payload.idToken;
      state.refreshToken = payload.refreshToken;
      state.user = {
        email: payload.email,
        userId: payload.localId,
      };
    },
    [userRegister.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [userLogin.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [userLogin.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.token = payload.idToken;
      state.refreshToken = payload.refreshToken;
      state.user = {
        email: payload.email,
        userId: payload.localId,
      };
    },
    [userLogin.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [getCurUser.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [getCurUser.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.user = {
        email: payload.email,
        userId: payload.localId,
      };
    },
    [getCurUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [refreshTokenRequest]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [refreshTokenSuccess]: (state, { payload }) => {
      state.isLoading = false;
      state.token = payload.token;
      state.refreshToken = payload.refreshToken
    },
    [refreshTokenError]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    } 

  },
});

export default authSlice.reducer;
export const { logOut } = authSlice.actions;
