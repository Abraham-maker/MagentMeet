import {
  CLIENT_RTC,
  CLIENT_RTM,
  CHANNEL,
  AUDIO_TRACKS,
  VIDEO_TRACKS,
  HOST,
  MESSAGES,
  GIFT_RECEIVED,
  GIFT_SENDING,
  MEMBERS_CHANNEL,
  ERRORS_AGORA,
  IS_LOADING,
  COUNTER_FEMALE,
  MUTED,
  RESET_MESSAGES,
  RESET_GIFT_RECEIVED,
  RESET_GIFT_SENDING,
  RESET_STATE_AGORA,
  MEMBER_UPDATE_LEFT,
  RESET_MEMBERS_CHANNEL,
} from "../actions/agora";

const initialState = {
  appID: "b14a4e0961cc438a951fd0f644738a3c",
  token: null,
  rtcUid: String(Math.floor(Math.random() * 2032)),
  rtmUid: String(Math.floor(Math.random() * 2032)),
  clientRtc: null,
  clientRtm: null,
  channel: null,
  audioTracks: null,
  videoTracks: null,
  host: null,
  messages: [],
  giftReceived: [],
  giftSending: [],
  membersChannel: [],
  agoraErrors: {},
  isLoading: false,
  counterFemale: 0,
  muted: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CLIENT_RTC:
      return {
        ...state,
        clientRtc: action.clientRtc,
      };
    case CLIENT_RTM:
      return {
        ...state,
        clientRtm: action.clientRtm,
      };
    case CHANNEL:
      return {
        ...state,
        channel: action.channel,
      };
    case AUDIO_TRACKS:
      return {
        ...state,
        audioTracks: action.audioTracks,
      };
    case VIDEO_TRACKS:
      return {
        ...state,
        videoTracks: action.videoTracks,
      };
    case HOST:
      return {
        ...state,
        host: action.host,
      };
    case MESSAGES:
      return {
        ...state,
        messages: [...state.messages, action.messages],
      };
    case RESET_MESSAGES:
      return {
        ...state,
        messages: action.messages,
      };
    case GIFT_RECEIVED:
      return {
        ...state,
        giftReceived: [...state.giftReceived, action.giftReceived],
      };
    case GIFT_SENDING:
      return {
        ...state,
        giftSending: [...state.giftSending, action.giftSending],
      };
    case RESET_GIFT_RECEIVED:
      return {
        ...state,
        giftReceived: action.giftReceived,
      };
    case RESET_GIFT_SENDING:
      return {
        ...state,
        giftSending: action.giftSending,
      };
    case MEMBERS_CHANNEL:
      return {
        ...state,
        membersChannel: [...state.membersChannel, action.membersChannel],
      };
    case RESET_MEMBERS_CHANNEL:
      return {
        ...state,
        membersChannel: action.membersChannel,
      };
    case MEMBER_UPDATE_LEFT:
      const memberId = action.payload;
      return {
        ...state,
        membersChannel: state.membersChannel.filter(
          (memberID) => memberID.memberId !== memberId
        ),
      };
    case COUNTER_FEMALE:
      return {
        ...state,
        counterFemale: action.counterFemale,
      };
    case ERRORS_AGORA:
      return {
        ...state,
        agoraErrors: [...state.agoraErrors, action.agoraErrors],
      };
    case IS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      };

    case MUTED:
      return {
        ...state,
        muted: action.muted,
      };
    case RESET_STATE_AGORA:
      return initialState;
    default:
      return state;
  }
};
