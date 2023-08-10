import {
  saveMessages,
  saveGift,
  saveMembersChannel,
  setMembersChannel,
  RESET_MESSAGES,
  RESET_GIFT_RECEIVED,
  RESET_GIFT_SENDING,
} from "./agora";
import { translate } from "./functionsAgora";

export const channelMessage = (data, senderId) => {
  return async (dispatch) => {
    const response = await dispatch(translate(data.text, senderId));
    if (response.status === "Success") {
      const { data } = response;
      await dispatch(saveMessages(data.text, data.translations, data.senderid));
    }
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
    dispatch(setMembersChannel(memberId));
    dispatch({ type: RESET_MESSAGES, messages: [] });
    dispatch({ type: RESET_GIFT_RECEIVED, giftReceived: [] });
    dispatch({ type: RESET_GIFT_SENDING, giftSending: [] });
  };
};
