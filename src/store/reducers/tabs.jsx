import { SET_ACTIVE_TAB, SHOW_VIDEO, SHOW_HOME } from "../actions/tabs";

const initialState = {
  activeTab: 0,
  showHome: true,
  showVideo: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_TAB:
      return {
        ...state,
        activeTab: action.payload,
      };
    case SHOW_HOME:
      return {
        ...state,
        showHome: action.showHome,
      };
    case SHOW_VIDEO:
      return {
        ...state,
        showVideo: action.showVideo,
      };
    default:
      return state;
  }
};
