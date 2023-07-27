import { TOKEN, USER_INFO, UPLOAD_PHOTO } from "../actions/auth";

const initialState = {
  token: null,
  userData: {},
  uploadPhoto: {},
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
    case UPLOAD_PHOTO:
      return {
        ...state,
        uploadPhoto: action.uploadPhoto,
      };
    default:
      return state;
  }
};
