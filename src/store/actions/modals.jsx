export const MODAL_PERMISSIONS = "MODAL_PERMISSIONS";
export const MODAL_BLOQUED_PERMISSIONS = "MODAL_BLOQUED_PERMISSIONS";
export const MODAL_CHANNEL = "MODAL_CHANNEL";
export const MODAL_MINUTES = "MODAL_MINUTES";
export const RESET_STATE_MODAL = "RESET_STATE_MODAL";

export const handleModalPermission = () => {
  return async (dispatch, getState) => {
    const { modalPermissions } = getState().modals;
    await dispatch({
      type: MODAL_PERMISSIONS,
      modalPermissions: !modalPermissions,
    });
  };
};

export const handleModalChannel = () => {
  return async (dispatch, getState) => {
    const { modalChannel } = getState().modals;
    await dispatch({
      type: MODAL_CHANNEL,
      modalChannel: !modalChannel,
    });
  };
};

export const handleModalBloqued = () => {
  return async (dispatch, getState) => {
    const { modalBloqued } = getState().modals;
    await dispatch({
      type: MODAL_BLOQUED_PERMISSIONS,
      modalBloqued: !modalBloqued,
    });
  };
};

export const handleModalMinutes = () => {
  return async (dispatch, getState) => {
    const { modalMinutes } = getState().modals;
    await dispatch({
      type: MODAL_MINUTES,
      modalMinutes: !modalMinutes,
    });
  };
};
