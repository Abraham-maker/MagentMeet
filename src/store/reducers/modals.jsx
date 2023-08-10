import {
  MODAL_PERMISSIONS,
  MODAL_CHANNEL,
  MODAL_BLOQUED_PERMISSIONS,
  RESET_STATE_MODAL,
  MODAL_MINUTES,
} from "../actions/modals";

const initialState = {
  modalPermissions: false,
  modalChannel: false,
  modalBloqued: false,
  modalMinutes: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case MODAL_PERMISSIONS:
      return {
        ...state,
        modalPermissions: action.modalPermissions,
      };
    case MODAL_CHANNEL:
      return {
        ...state,
        modalChannel: action.modalChannel,
      };
    case MODAL_BLOQUED_PERMISSIONS:
      return {
        ...state,
        modalBloqued: action.modalBloqued,
      };
    case MODAL_MINUTES:
      return {
        ...state,
        modalMinutes: action.modalMinutes,
      };
    case RESET_STATE_MODAL:
      return initialState;
    default:
      return state;
  }
};
