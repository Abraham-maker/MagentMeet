import { SERVER_URL } from "../../environment/server";

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

    const data = response.json();
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
