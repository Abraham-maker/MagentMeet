import { combineReducers } from "redux";

import authReducer from "./auth";
import tabsReducer from "./tabs";
import agoraReducer from "./agora";
import functionAgoraReducer from "./functionAgora";
import modalsReducer from "./modals";

export const rootReducer = combineReducers({
  auth: authReducer,
  tabs: tabsReducer,
  agora: agoraReducer,
  functionAgora: functionAgoraReducer,
  modals: modalsReducer,
});
