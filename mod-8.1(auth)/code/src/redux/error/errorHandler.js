import { refreshToken } from "../auth/authOperations";

export const errorHandler =
  ({ error, cbOperation }) =>
  (dispatch) => {
    setTimeout(() => {
      if (error.code === 400) {
        dispatch(refreshToken(cbOperation));
      }
    }, 0);
  };
