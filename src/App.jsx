import React from "react";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import ReduxThunk from "redux-thunk";
import { rootReducer } from "./store/reducers";
import LayoutWrapper from "./layout/LayoutWrapper";
import HomeContent from "./views/home/HomeContent";
import Login from "./views/auth/login/Login";
import ProtectedRoutes from "./routes/ProtectedRoute";
import { Route, Routes } from "react-router-dom";
import Welcome from "./views/welcome/Welcome";
import Register from "./views/auth/register/Register";

const App = () => {
  const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/magent-video"
          element={
            <ProtectedRoutes>
              <HomeContent />
            </ProtectedRoutes>
          }
        />
      </Routes>
    </Provider>
  );
};

export default App;
