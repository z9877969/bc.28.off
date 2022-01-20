export const getIsToken = (state) => !!state.auth.token;
export const getIsAuth = (state) => !!state.auth.token;
export const getUserId = (state) => state.auth.user.userId;

