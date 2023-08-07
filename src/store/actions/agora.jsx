import { SERVER_URL } from "../../environment/server";
import { createLocalTracks, joinRtcChannel } from "./agoraRTC";
import { initAgoraRTM } from "./agoraRTM";
import { deleteCounterFemale, getUserData, pauseCounter } from "./auth";
import {
  closeCall,
  closeHostMale,
  getHost,
  removeHost,
} from "./functionsAgora";
import { handleShowHome } from "./tabs";

export const CLIENT_RTC = "CLIENT_RTC";
export const CLIENT_RTM = "CLIENT_RTM";
export const CHANNEL = "CHANNEL";
export const AUDIO_TRACKS = "AUDIO_TRACKS";
export const VIDEO_TRACKS = "VIDEO_TRACKS";
export const HOST = "HOST";
export const MESSAGES = "MESSAGES";
export const RESET_MESSAGES = "RESET_MESSAGES";
export const GIFT_RECEIVED = "GIFT_RECEIVED";
export const RESET_GIFT_RECEIVED = "RESET_GIFT_RECEIVED";
export const GIFT_SENDING = "GIFT_SENDING";
export const RESET_GIFT_SENDING = "RESET_GIFT_SENDING";
export const MEMBERS_CHANNEL = "MEMBERS_CHANNEL";
export const ERRORS_AGORA = "ERRORS_AGORA";
export const IS_LOADING = "IS_LOADING";
export const COUNTER_FEMALE = "COUNTER_FEMALE";
export const MUTED = "MUTED";
export const RESET_STATE_AGORA = "RESET_STATE_AGORA";

// *TODO // FUNCTION FOR AGORA RTC
//
export const saveClientRTC = (clientRtc) => {
  return async (dispatch) => {
    await dispatch({ type: CLIENT_RTC, clientRtc: clientRtc });
  };
};

// *TODO // FUNCTION FOR AGORA RTM
//
export const saveClientRTM = (clientRtm) => {
  return async (dispatch) => {
    await dispatch({ type: CLIENT_RTM, clientRtm: clientRtm });
  };
};

// *TODO // FUNCTION FOR AGORA RTM
//
export const saveChannel = (channel) => {
  return async (dispatch) => {
    await dispatch({ type: CHANNEL, channel: channel });
  };
};

// *TODO // FUNCTION FOR AGORA RTC
//
export const saveAudioTracks = (audio) => {
  return async (dispatch) => {
    await dispatch({ type: AUDIO_TRACKS, audioTracks: audio });
  };
};
// *TODO // FUNCTION FOR AGORA RTC
//
export const saveVideoTracks = (video) => {
  return async (dispatch) => {
    await dispatch({ type: VIDEO_TRACKS, videoTracks: video });
  };
};

// *TODO // FUNCTION FOR AGORA RTC AND RTM
//
export const saveHost = (host) => {
  return async (dispatch) => {
    await dispatch({ type: HOST, host: host });
  };
};

// *TODO // FUNCTION FOR AGORA RTM
//
export const saveMessages = (data, senderId) => {
  return async (dispatch, getState) => {
    await dispatch({
      type: MESSAGES,
      messages: { text: data.text, sender: senderId },
    });
  };
};

// *TODO // FUNCTION FOR AGORA RTM
//
export const saveGift = (data, senderId) => {
  return async (dispatch) => {
    await dispatch({
      type: GIFT_RECEIVED,
      giftReceived: { text: data.text, sender: senderId },
    });
  };
};

// *TODO // FUNCTION FOR AGORA RTM
//
export const saveGiftSending = (data, senderId) => {
  return async (dispatch) => {
    await dispatch({
      type: GIFT_SENDING,
      giftSending: { text: data.text, sender: senderId },
    });
  };
};

// *TODO // FUNCTION FOR AGORA RTM
//
export const saveMembersChannel = (memberId, name, userRtcUid) => {
  return async (dispatch, getState) => {
    await dispatch({
      type: MEMBERS_CHANNEL,
      membersChannel: { memberId: memberId, name: name, rtcUid: userRtcUid },
    });
  };
};

// *TODO // FUNCTION FOR AGORA RTC AND RTM
//
export const saveErrorsAgora = (error, code) => {
  return async (dispatch) => {
    await dispatch({
      type: ERRORS_AGORA,
      agoraErrors: { error: error, code: code },
    });
  };
};

// *TODO // FUNCTION FOR AGORA RTC AND RTM
//
export const setLoading = () => {
  return async (dispatch) => {
    dispatch({ type: IS_LOADING, isLoading: true });
  };
};

// *TODO // FUNCTION FOR AGORA RTC AND RTM
//
export const clearLoading = () => {
  return async (dispatch) => {
    dispatch({ type: IS_LOADING, isLoading: false });
  };
};

// *TODO // FUNCTION FOR AGORA RTM
//
export const clearMessages = () => {
  return async (dispatch) => {
    await dispatch({ type: MESSAGES, messages: [] });
  };
};

// *TODO // FUNCTION FOR AGORA RTM
//
export const clearGift = () => {
  return async (dispatch) => {
    await dispatch({ type: GIFT_SENDING, messages: [] });
    await dispatch({ type: GIFT_RECEIVED, messages: [] });
  };
};

// *TODO // FUNCTION FOR AGORA RTC
//
export const handleMuted = () => {
  return async (dispatch, getState) => {
    const { muted } = getState().agora;
    await dispatch({ type: MUTED, muted: !muted });
  };
};

// *TODO // FUNCION QUE CIERRA EL CANAL DE AGORA RTC
//
export const leave = () => {
  return async (dispatch, getState) => {
    const { userData } = getState().auth;
    const { audioTracks, videoTracks, clientRtc, channel, clientRtm } =
      getState().agora;

    await audioTracks.stop();
    await videoTracks.stop();
    await audioTracks.close();
    await videoTracks.close();

    dispatch({ type: AUDIO_TRACKS, audioTracks: null });
    dispatch({ type: VIDEO_TRACKS, videoTracks: null });
    dispatch({ type: RESET_MESSAGES, messages: [] });
    dispatch({ type: RESET_GIFT_RECEIVED, giftReceived: [] });
    dispatch({ type: RESET_GIFT_SENDING, giftSending: [] });

    switch (userData.gender) {
      case "female":
        await clientRtc.leave();
        await channel.leave();
        await clientRtm.logout();
        await dispatch(deleteCounterFemale());
        await dispatch(removeHost());
        await dispatch(closeCall());
        break;
      case "male":
        await clientRtc.leave();
        await clientRtm.logout();
        await dispatch(pauseCounter());
        await dispatch(closeHostMale());
        break;
      default:
        break;
    }
    await dispatch(getUserData());
    await dispatch(handleShowHome());
  };
};

export const changeForUsers = () => {
  return async (dispatch, getState) => {
    const { channelActive, clientRtm, clientRtc } = getState().functionAgora;
    try {
      await clientRtc.leave();
      await clientRtm.logout();
      if (channelActive.length === 0) {
        await dispatch(pauseCounter());
        await dispatch(closeHostMale());
        await dispatch(getUserData());
        await dispatch(handleShowHome());
      } else {
        dispatch({ type: AUDIO_TRACKS, audioTracks: null });
        dispatch({ type: VIDEO_TRACKS, videoTracks: null });
        dispatch({ type: RESET_MESSAGES, messages: [] });
        dispatch({ type: RESET_GIFT_RECEIVED, giftReceived: [] });
        dispatch({ type: RESET_GIFT_SENDING, giftSending: [] });
        await dispatch(getHost());
        await dispatch(initAgoraRTM());
        await dispatch(createLocalTracks());
        await dispatch(joinRtcChannel());
      }
    } catch (error) {
      console.error("Error al cambiar de canal:", error);
    }
  };
};
