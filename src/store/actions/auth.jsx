import { SERVER_URL } from "../../environment/server";

export const TOKEN = "TOKEN";
export const USER_INFO = "USER_INFO";

export const authLogin = (email, password) => {
  return async () => {
    const response = await fetch(SERVER_URL + "login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ email: email, password: password }),
    });

    const data = await response.json();
    if (data.status === "Success") {
      const { access_type, access_token } = data.data;
      saveDataToStorage("userData", access_type + " " + access_token);
    }

    return data;
  };
};

export const authRegister = (
  email,
  gender,
  name,
  password,
  password_confirmation
) => {
  return async () => {
    const response = await fetch(SERVER_URL + "register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
        name: name,
        gender: gender,
        password_confirmation: password_confirmation,
        terms: 1,
      }),
    });

    const data = response.json();
    return data;
  };
};

export const getUserData = () => {
  return async (dispatch, getState) => {
    fetch(SERVER_URL + "users/auth", {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: getState().auth.token.userData,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: USER_INFO, userData: data.data.user });
      })
      .catch((error) => console.log("error", error));
  };
};

export const saveDataToStorage = (id, userData) => {
  localStorage.setItem(
    id,
    JSON.stringify({
      userData,
    })
  );
};

export const authenticate = (token) => {
  return async (dispatch) => {
    dispatch({ type: TOKEN, token: token });
  };
};
