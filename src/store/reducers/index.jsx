import React from 'react'
import { combineReducers } from 'redux'

import authReducer from "./auth"

export const rootReducer = combineReducers({
    auth: authReducer,
})