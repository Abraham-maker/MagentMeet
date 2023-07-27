import { TOKEN, USER_INFO } from "../actions/auth";

const initialState = {
  token: null,
  userData: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TOKEN:
      return {
        ...state,
        token: action.token,
      };
    case USER_INFO:
      return {
        ...state,
        userData: action.userData,
      };
    default:
      return state;
  }
};
