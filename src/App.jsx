import React from "react";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import ReduxThunk from "redux-thunk";
import { rootReducer } from "./store/reducers";
import Welcome from "./views/welcome/Welcome";

const App = () => {
  const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

  return (
    <Provider store={store}>
      <Welcome />
    </Provider>
  );
};

export default App;
