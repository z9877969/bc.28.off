import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  userRegisterApi,
  userLoginApi,
  getCurUserApi,
} from "../../utils/firebaseApi";

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
  async (_, { rejectWithValue, getState }) => {
    const { token } = getState().auth;
    try {
      const userData = await getCurUserApi(token);
      return userData;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
