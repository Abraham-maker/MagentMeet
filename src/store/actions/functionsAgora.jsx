import { SERVER_URL } from "../../environment/server";
import { HOST } from "./agora";

export const CHANNEL_ACTIVE = "CHANNEL_ACTIVE";
export const ID_HOST_MALE = "ID_HOST_MALE";
export const ID_USER_FEMALE_REMOTE = "ID_USER_FEMALE_REMOTE";
export const LIST_GIFT = "LIST_GIFT";
export const RESET_STATE_FUNCTIONS = "RESET_STATE_FUNCTIONS";

// *TODO // OBTENEMOS LOS HOST ACTIVOS
// ESTO SOLO PARA LOS HOMBRES
export const getChannelActive = () => {
  return async (dispatch, getState) => {
    await fetch(SERVER_URL + "list-users-gender/female", {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: getState().auth.token.userData,
      },
    })
      .then((response) => response.json())
      .then(({ data }) => {
        const userFiltereds = data.filter(
          (user) => user.host !== null && user.in_call === 0
        );

        const channels = userFiltereds.map((user) => ({
          userID: user.id,
          host: user.host,
        }));
        dispatch({ type: CHANNEL_ACTIVE, channelActive: channels });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

// *TODO // LE GENERAMOS UN NOMBRE DE CANAL ALEATORIO A LOS HOST
// ESTO SOLO PARA LOS HOST
export const generateHost = () => {
  return async (dispatch) => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    let token = "";
    for (let i = 0; i < 12; i++) {
      token += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    dispatch({ type: HOST, host: token });
  };
};

// *TODO // OBTENEMOS EL NOMBRE DEL CANAL ACTIVO CUANDO UN CLIENTE QUIERA UNIRSE
// ESTO SOLO PARA LOS HOMBRES
export const getHost = () => {
  return async (dispatch, getState) => {
    const { channelActive } = getState().functionAgora;
    const randomIndex = Math.floor(Math.random() * channelActive.length);
    const randomElement = channelActive[randomIndex].host;
    dispatch({ type: HOST, host: randomElement });
    dispatch({
      type: ID_USER_FEMALE_REMOTE,
      idRemoteUser: randomElement.userID,
    });
  };
};

// *TODO // GUARDAMOS EL NOMBRE DEL CANAL
// ESTO SOLO PARA LOS HOST
export const saveChannelFemale = () => {
  return async (dispatch, getState) => {
    const { host } = getState().agora;
    await fetch(`${SERVER_URL}user-host/${host}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: getState().auth.token.userData,
      },
    })
      .then((response) => response.json())
      .catch((err) => console.log(err));
  };
};

// *TODO // OBTENEMOS LA LISTA DE LOS REGALOS DE LOS CLIENTES
//
export const getGiftUser = () => {
  return async (dispatch, getState) => {
    await fetch(SERVER_URL + `gifs`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: getState().auth.token.userData,
      },
    })
      .then((response) => response.json())
      .then(({ data }) => {
        dispatch({ type: LIST_GIFT, listGift: data });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

// *TODO // REGISTRA LA LLAMADA DE LOS HOST CUANDO UN CLIENTE SE UNE
// ESTO SOLO PARA LOS HOST
export const enterCall = () => {
  return async (dispatch, getState) => {
    const response = await fetch(SERVER_URL + "user-incall", {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: getState().auth.token.userData,
      },
    });

    const data = await response.json();
    console.log("USER CALL FEMALE", data);
    return data;
  };
};

// *TODO // CIERRA LA LLAMADA DE LOS HOST
// ESTO SOLO PARA LOS HOST
export const closeCall = () => {
  return async (dispatch, getState) => {
    const response = await fetch(SERVER_URL + "user-offcall", {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: getState().auth.token.userData,
      },
    });

    const data = await response.json();
    console.log("CLOSE CALL FEMALE", data);
    return data;
  };
};

// *TODO // ELIMINA EL HOST CREADO
// ESTO SOLO PARA LOS HOST
export const removeHost = () => {
  return async (dispatch, getState) => {
    const response = await fetch(SERVER_URL + `clear-host`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: getState().auth.token.userData,
      },
    });

    const data = await response.json();
    console.log("REMOVE HOST FEMALE", data);
    return data;
  };
};

// *TODO // CREA UNA SALA Y REGISTRA LA LLAMADA CUANDO UN CLIENTE SE UNE A UN CANAl
// ESTO SOLO PARA LOS HOMBRES
export const enterHostMale = () => {
  return async (dispatch, getState) => {
    const { host } = getState().agora;
    const { userData } = getState().auth;

    let formdata = new FormData();
    formdata.append("user_id", userData.id);
    formdata.append("host_id", host);

    const response = await fetch(SERVER_URL + `enter-room`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: getState().auth.token.userData,
      },
      body: formdata,
    });

    const data = await response.json();
    dispatch({ type: ID_HOST_MALE, idHostCreateMale: data.data.id });
    console.log("MALE ENTER CALL", data);
    return data;
  };
};

// *TODO // CIERRA LA LLAMADA DE LOS CLIENTES
// ESTO SOLO PARA LOS HOMBRES
export const closeHostMale = () => {
  return async (dispatch, getState) => {
    const { host, idHostCreateMale } = getState().agora;
    const { userData } = getState().auth;

    let formdata = new FormData();
    formdata.append("user_id", userData.id);
    formdata.append("host_id", host);
    formdata.append("id", idHostCreateMale);

    const response = await fetch(SERVER_URL + `closed-room`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: getState().auth.token.userData,
      },
      body: formdata,
    });

    const data = await response.json();
    console.log("CLOSE ENTER CALL MALE", data);
    return data;
  };
};

// *TODO // REGISTRA EL ENVIO DE REGALOS
// ESTO SOLO PARA LOS HOMBRES
export const SendGiftHost = (giftID) => {
  return async (dispatch, getState) => {
    const { host } = getState().agora;
    const { userData } = getState().auth;
    const { idRemoteUser } = getState().functionAgora;

    let formdata = new FormData();
    formdata.append("user_id_sends", userData.id);
    formdata.append("user_id_receives", idRemoteUser);
    formdata.append("gif_id", giftID);
    formdata.append("host_id", host);

    const response = await fetch(SERVER_URL + `send-gifs`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: getState().auth.token.userData,
      },
      body: formdata,
    });

    const data = await response.json();
    console.log("GIFT ENVIADO", data);
    return data;
  };
};
