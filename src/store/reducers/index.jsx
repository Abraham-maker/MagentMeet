import { combineReducers } from "redux";

import authReducer from "./auth";
import tabsReducer from "./tabs";

export const rootReducer = combineReducers({
  auth: authReducer,
  tabs: tabsReducer,
});
