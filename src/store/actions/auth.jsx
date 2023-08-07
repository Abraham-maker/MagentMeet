import { SERVER_URL } from "../../environment/server";
import { RESET_STATE_AGORA } from "./agora";
import { RESET_STATE_FUNCTIONS } from "./functionsAgora";
import { RESET_STATE_MODAL } from "./modals";
import { RESET_STATE_TABS } from "./tabs";

export const TOKEN = "TOKEN";
export const USER_INFO = "USER_INFO";
export const UPLOAD_PHOTO = "UPLOAD_PHOTO";
export const INCREMENT_MINUTES = "INCREMENT_MINUTES";
export const INCREMENT_SECONDS = "INCREMENT_SECONDS";
export const INTERVAL_ID = "INTERVAL_ID";
export const COUNTER_MALE = "COUNTER_MALE";
export const TIEMPO_RESTANTE = "TIEMPO_RESTANTE";
export const RESET_STATE_AUTH = "RESET_STATE_AUTH";

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

export const uploadPhotoProfile = (image, setIsLoading, setSelectedFile) => {
  return async (dispatch, getState) => {
    let formdata = new FormData();
    formdata.append("profile_photo", image, "profile.jpg");
    const response = await fetch(SERVER_URL + "profile-photo", {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: getState().auth.token.userData,
      },
      body: formdata,
    });
    const data = await response.json();
    dispatch({ type: UPLOAD_PHOTO, uploadPhoto: data });
    dispatch(getUserData());
    setIsLoading(false);
    setSelectedFile(null);
    setTimeout(() => {
      dispatch({ type: UPLOAD_PHOTO, uploadPhoto: {} });
    }, 5000);
  };
};

export const deletePhotoProfile = (setIsLoading) => {
  return async (dispatch, getState) => {
    const response = await fetch(SERVER_URL + `delete-profile-photo`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: getState().auth.token.userData,
      },
    });

    const data = await response.json();
    dispatch(getUserData());
    setIsLoading(false);
    return data;
  };
};

export const logout = () => {
  return async (dispatch, getState) => {
    await dispatch({ type: RESET_STATE_AGORA });
    await dispatch({ type: RESET_STATE_FUNCTIONS });
    await dispatch({ type: RESET_STATE_MODAL });
    await dispatch({ type: RESET_STATE_TABS });
    localStorage.removeItem("userData");
    await fetch(SERVER_URL + `logout`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: getState().auth.token.userData,
      },
    }).then((response) => response.json());
    await dispatch({ type: RESET_STATE_AUTH });
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

export const updateCounterMale = (counter) => {
  return async (dispatch) => {
    await dispatch({ type: COUNTER_MALE, counterMale: counter });
  };
};

export const initialCounterMale = () => {
  return async (dispatch, getState) => {
    const id = setInterval(async () => {
      const { counterMale } = getState().auth;
      await dispatch({ type: COUNTER_MALE, counterMale: counterMale - 1 });
    }, 1000);
    await dispatch(uploadIntervalID(id));
  };
};

export const pauseCounter = () => {
  return async (dispatch, getState) => {
    const { intervalID, counterMale } = getState().auth;
    await dispatch(updateTimeRemaining(counterMale));
    clearInterval(intervalID);
  };
};

export const reloadCounter = () => {
  return async (dispatch, getState) => {
    const { timeRemaining } = getState().auth;
    if (timeRemaining !== null) {
      await dispatch({ type: COUNTER_MALE, counterMale: timeRemaining });
      const id = setInterval(async () => {
        const { counterMale } = getState().auth;
        await dispatch({ type: COUNTER_MALE, counterMale: counterMale - 1 });
      }, 1000);
      await dispatch(uploadIntervalID(id));
      await dispatch(updateTimeRemaining(null));
    }
  };
};

export const uploadIntervalID = (intervalID) => {
  return async (dispatch) => {
    await dispatch({ type: INTERVAL_ID, intervalID: intervalID });
  };
};

export const updateTimeRemaining = (counterMale) => {
  return async (dispatch) => {
    await dispatch({ type: TIEMPO_RESTANTE, timeRemaining: counterMale });
  };
};

export const initialCounterFemale = () => {
  return async (dispatch, getState) => {
    const id = setInterval(async () => {
      const { seconds, minutes } = await getState().auth;
      await dispatch({
        type: INCREMENT_SECONDS,
        seconds: seconds + 1,
      });

      if (seconds === 59) {
        await dispatch({ type: INCREMENT_MINUTES, minutes: minutes + 1 });
        await dispatch({
          type: INCREMENT_SECONDS,
          seconds: 0,
        });
      }
    }, 1000);
    await dispatch(uploadIntervalID(id));
  };
};

export const deleteCounterFemale = () => {
  return async (dispatch, getState) => {
    const { intervalID } = getState().auth;
    clearInterval(intervalID);
    await dispatch(uploadIntervalID(null));
    await dispatch({ type: INCREMENT_MINUTES, minutes: 0 });
    await dispatch({
      type: INCREMENT_SECONDS,
      seconds: 0,
    });
  };
};
