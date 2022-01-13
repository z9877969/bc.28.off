import { createReducer } from "@reduxjs/toolkit";

const iS = {
  name: "Bob",
  age: 25,
  country: {
    zipCode: 321546,
  },
};

const userReducer = createReducer(iS, {
  getUser: (_, { payload }) => payload,
});

export default userReducer;
