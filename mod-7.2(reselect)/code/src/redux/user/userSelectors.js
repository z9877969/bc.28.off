import { createSelector } from "@reduxjs/toolkit";

export const getUser = (state) => state.user;
// export const getUserName = state => getUser(state).name
export const getUserAge = (state) => getUser(state).age;

export const getUserZipCode = (state) => getUser(state).country.zipCode;

export const getUserName = createSelector(getUser, (user) => user.name);
