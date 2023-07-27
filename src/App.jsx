import React from "react";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import ReduxThunk from "redux-thunk";
import { rootReducer } from "./store/reducers";
import Login from "./views/auth/login/Login";

const App = () => {
  const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

  return (
    <Provider store={store}>
      <Login></Login>
    </Provider>
  );
};

export default App;
