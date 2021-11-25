import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

export const signUpAsync = createAsyncThunk(
  'auth/SIGN_UP',
  async (
    { auth, email, password },
    { rejectWithValue }
  ) => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (user?.user) {
        return user;
      }
      alert('error in response');
    } catch (error) {
      console.log(`error:>>>`, error);
      return rejectWithValue(error);
    }
  }
);

export const signInAsync = createAsyncThunk(
  'auth/SIGN_IN',
  async (
    { auth, email, password },
    { rejectWithValue }
  ) => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (user?.user) {
        return user;
      }
      alert('error in response');
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const signOutAsync = createAsyncThunk(
  'auth/SIGN_OUT',
  async (auth, { rejectWithValue }) => {
    try {
      await signOut(auth);
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
