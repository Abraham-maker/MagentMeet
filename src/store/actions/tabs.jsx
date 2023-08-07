export const SET_ACTIVE_TAB = "SET_ACTIVE_TAB";
export const SHOW_HOME = "SHOW_HOME";
export const SHOW_VIDEO = "SHOW_VIDEO";
export const RESET_STATE_TABS = "RESET_STATE_TABS";

export const setActiveTab = (tab) => {
  return async (dispatch) => {
    await dispatch({ type: SET_ACTIVE_TAB, payload: tab });
  };
};

export const handleShowHome = () => {
  return async (dispatch) => {
    await dispatch({ type: SHOW_HOME, showHome: true });
    await dispatch({ type: SHOW_VIDEO, showVideo: false });
  };
};

export const handleShowVideo = () => {
  return async (dispatch) => {
    await dispatch({ type: SHOW_HOME, showHome: false });
    await dispatch({ type: SHOW_VIDEO, showVideo: true });
  };
};
