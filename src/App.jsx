import React from "react";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import ReduxThunk from "redux-thunk";
import { rootReducer } from "./store/reducers";
import Register from "./views/auth/register/Register";

const App = () => {
  const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

  return (
    <Provider store={store}>
      <Register></Register>
    </Provider>
  );
};

export default App;
