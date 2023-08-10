import {
  CHANNEL_ACTIVE,
  ID_HOST_MALE,
  LIST_GIFT,
  ID_USER_FEMALE_REMOTE,
  RESET_STATE_FUNCTIONS,
} from "../actions/functionsAgora";

const initialState = {
  channelActive: [],
  idHostCreateMale: null,
  idRemoteUser: null,
  listGift: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANNEL_ACTIVE:
      return {
        ...state,
        channelActive: action.channelActive,
      };
    case ID_HOST_MALE:
      return {
        ...state,
        idHostCreateMale: action.idHostCreateMale,
      };
    case LIST_GIFT:
      return {
        ...state,
        listGift: action.listGift,
      };
    case ID_USER_FEMALE_REMOTE:
      return {
        ...state,
        idRemoteUser: action.idRemoteUser,
      };
    case RESET_STATE_FUNCTIONS:
      return initialState;
    default:
      return state;
  }
};
