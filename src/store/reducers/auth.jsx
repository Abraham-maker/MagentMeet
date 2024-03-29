import {
  TOKEN,
  USER_INFO,
  UPLOAD_PHOTO,
  INCREMENT_MINUTES,
  INCREMENT_SECONDS,
  INTERVAL_ID,
  COUNTER_MALE,
  TIEMPO_RESTANTE,
  RESET_STATE_AUTH,
  COUNTRIS,
  STORIES,
  MY_HISTORY,
  RANKING_LIST,
} from "../actions/auth";

const initialState = {
  token: null,
  userData: {},
  uploadPhoto: {},
  minutes: 0,
  seconds: 0,
  intervalID: null,
  counterMale: 0,
  timeRemaining: null,
  countris: [],
  stories: [],
  myHistory: false,
  rankingList: [],
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
    case INCREMENT_SECONDS:
      return {
        ...state,
        seconds: action.seconds,
      };
    case INCREMENT_MINUTES:
      return {
        ...state,
        minutes: action.minutes,
      };
    case INTERVAL_ID:
      return {
        ...state,
        intervalID: action.intervalID,
      };
    case COUNTER_MALE:
      return {
        ...state,
        counterMale: action.counterMale,
      };
    case TIEMPO_RESTANTE:
      return {
        ...state,
        timeRemaining: action.timeRemaining,
      };
    case COUNTRIS:
      return {
        ...state,
        countris: action.countris,
      };
    case STORIES:
      return {
        ...state,
        stories: action.stories,
      };
    case MY_HISTORY:
      return {
        ...state,
        myHistory: action.myHistory,
      };
    case RANKING_LIST:
      return {
        ...state,
        rankingList: action.rankingList,
      };
    case RESET_STATE_AUTH:
      return initialState;
    default:
      return state;
  }
};
