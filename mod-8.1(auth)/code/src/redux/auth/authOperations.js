import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import {
  userRegisterApi,
  userLoginApi,
  getCurUserApi,
  refreshTokenApi,
} from "../../utils/firebaseApi";
import { errorHandler } from "../error/errorHandler";

export const userRegister = createAsyncThunk(
  "userRegister",
  async (userData, { rejectWithValue }) => {
    try {
      const data = await userRegisterApi(userData);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const userLogin = createAsyncThunk(
  "userLogin",
  async (userData, { rejectWithValue }) => {
    try {
      const data = await userLoginApi(userData);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getCurUser = createAsyncThunk(
  "getCurUser",
  async (_, { rejectWithValue, getState, dispatch }) => {
    const { token } = getState().auth;
    try {
      const userData = await getCurUserApi(token);
      return userData;
    } catch (error) {
      console.log("rejectWithValue(error) :>> ", rejectWithValue(error));
      dispatch(
        errorHandler({
          error,
          cbOperation: getCurUser,
        })
      );
      return rejectWithValue(error);
    }
  }
);

// export const refreshToken = createAsyncThunk(
//   "refreshToken",
//   async (cbOperation, { getState, rejectWithValue,  }) => {
//     const { refreshToken } = getState().auth;
//     try {
//       const { data } = refreshTokenApi(refreshToken);
//       return data;
//     } catch (error) {
//       return rejectWithValue(error)
//     }
//   }
// );

export const refreshTokenRequest = createAction("auth/refresh/pending");
export const refreshTokenSuccess = createAction("auth/refresh/fulfilled");
export const refreshTokenError = createAction("auth/refresh/rejected");

export const refreshToken = (cbOperation) => async (dispatch, getState) => {
  dispatch(refreshTokenRequest());
  const { refreshToken } = getState().auth;
  try {
    const data = await refreshTokenApi(refreshToken);

    console.log("REFRESH", data);
    dispatch(refreshTokenSuccess(data));
    dispatch(cbOperation());
  } catch (error) {
    dispatch(refreshTokenError(error));
  }
};

// dispatch(getCurUser("data"))
