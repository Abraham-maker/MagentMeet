import {
  saveMessages,
  saveGift,
  saveMembersChannel,
  clearGift,
  clearMessages,
} from "./agora";

export const channelMessage = (data, senderId) => {
  return async (dispatch) => {
    await dispatch(saveMessages(data, senderId));
  };
};

export const handleGiftMessage = (message, senderId) => {
  return async (dispatch) => {
    await dispatch(saveGift(message, senderId));
  };
};

export const handleMemberJoined = (memberId) => {
  return async (dispatch, getState) => {
    const { clientRtm } = getState().agora;
    try {
      const { name, userRtcUid } = await clientRtm.getUserAttributesByKeys(
        memberId,
        ["name", "userRtcUid"]
      );
      await dispatch(saveMembersChannel(memberId, name, userRtcUid));
    } catch (err) {
      console.log(
        "Error al obtener los atributos del usuario: REMOTO",
        err.code
      );
    }
  };
};

export const handleMemberLeft = (memberId) => {
  return async (dispatch) => {
    await dispatch(clearGift());
    await dispatch(clearMessages());
  };
};
