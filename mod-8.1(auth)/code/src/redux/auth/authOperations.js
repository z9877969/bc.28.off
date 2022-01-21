import { createAsyncThunk } from "@reduxjs/toolkit";
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

export const refreshToken = createAsyncThunk(
  "refreshToken",
  async (cbOperation, { getState, rejectWithValue, dispatch }) => {
    const { refreshToken } = getState().auth;
    try {
      const data = await refreshTokenApi(refreshToken);
      setTimeout(() => {
        dispatch(cbOperation());
      }, 0);

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
