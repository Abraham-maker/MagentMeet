import {
  saveAudioTracks,
  saveVideoTracks,
  saveClientRTC,
  handleMuted,
  clearLoading,
  leave,
} from "./agora";
import {
  deleteCounterFemale,
  getUserData,
  initialCounterFemale,
  initialCounterMale,
  reloadCounter,
} from "./auth";
import {
  enterHostMale,
  saveChannelFemale,
  closeCall,
  enterCall,
} from "./functionsAgora";
import { handleModalPermission, handleModalBloqued } from "./modals";
import { handleShowVideo } from "./tabs";

// *TODO // FUNCION QUE INICIALIZA LA EJECUCION Y UNION A CANALES DE AGORA
//
export const initAgoraRTC = () => {
  return async (dispatch, getState) => {
    const { audioTracks, videoTracks } = getState().agora;
    try {
      if (audioTracks === null && videoTracks === null) {
        dispatch(handleModalPermission());
      }
      await dispatch(createLocalTracks());
      await dispatch(joinRtcChannel());
    } catch (error) {
      console.log("ERROR", error);
      if (error.code === "PERMISSION_DENIED") {
        dispatch(handleModalBloqued());
        dispatch(handleModalPermission());
      } else if (error.code === "HARDWARE_ERROR") {
        console.log(
          "OCURRE CUANDO HAY UN PROBLEMA DE LA CAMARA O MICROFONO (FUNCIONAMIENTO)"
        );
      } else if (error.code === "DEVICE_NOT_FOUND") {
        console.log(
          "SE PRODUCE CUANDO NO SE ENCUENTRA NINGUN DISPOSITIVO DE CAMARA O MICROFONO"
        );
      } else if (error.code === "BROWSER_RESTRICTED") {
        console.log(
          "SE PRODUCE CUANDO EL NAVEGADOR RESTRINGE EL ACCESO A LA CAMARA O MICROFONO POR POLITICAS DE SEGURIDAD O CONFIGURACIONES ESPECIFICAS"
        );
      } else if (error.code === "INVALID_PARAMS") {
        console.log(
          "SE PRODUCE CUANDO PASAS UN PARAMETRO ERRONEO O SIN VALOR AL LOGIN() o JOIN()"
        );
      } else if (error.code === "TIMEOUT") {
        console.log(
          "OCURRE CUANDO EL TIEMPO DE EJECUCION EXEDE EL TIEMPO MINIMO"
        );
      }
    }
  };
};

// *TODO // CREAMOS CON AGORA LOS OBJETOS DEL AUDIO Y VIDEO DEL DISPOSITIVO
//
export const createLocalTracks = () => {
  return async (dispatch) => {
    const AgoraRTC = await import("agora-rtc-sdk-ng");
    await AgoraRTC.setLogLevel(3);
    const videoTracks = await AgoraRTC.createCameraVideoTrack();
    const audioTracks = await AgoraRTC.createMicrophoneAudioTrack();

    dispatch(saveVideoTracks(videoTracks));
    dispatch(saveAudioTracks(audioTracks));
    dispatch(handleModalPermission());
  };
};

// *TODO // FUNCION QUE AGREGA A LOS USUARIOS AL CANAL Y TAMBIEN CREA EL CANAL
//
export const joinRtcChannel = () => {
  return async (dispatch, getState) => {
    const AgoraRTC = await import("agora-rtc-sdk-ng");
    await AgoraRTC.setLogLevel(3);

    const clientRtc = await AgoraRTC.createClient({
      mode: "rtc",
      codec: "vp8",
    });

    await dispatch(saveClientRTC(clientRtc));

    const { userData, timeRemaining } = getState().auth;
    const { appID, host, token, rtcUid } = await getState().agora;

    await clientRtc.join(appID, host, token, rtcUid);
    await dispatch(startAndPublishTracks());

    clientRtc.on("user-published", async (user, mediaType) => {
      await dispatch(publishRemoteTracks(user, mediaType));
    });

    await clientRtc.on("user-left", async ({ uid }) => {
      if (userData.gender === "male" && rtcUid !== uid) {
        await dispatch(leave());
      } else if (userData.gender === "female") {
        await dispatch(deleteCounterFemale());
        await dispatch(closeCall());
      }
      await dispatch(getUserData());
    });

    // window.addEventListener("beforeunload", async (event) => {
    //   event.preventDefault();
    //   event.returnValue = "";
    //   if (userData.gender === "male") {
    //     await dispatch(leave());
    //   } else if (userData.gender === "female") {
    //     await dispatch(leave());
    //   }
    //   return;
    // });

    switch (userData.gender) {
      case "female":
        await dispatch(saveChannelFemale());
        break;
      case "male":
        if (timeRemaining === null) {
          await dispatch(initialCounterMale());
        } else {
          await dispatch(reloadCounter());
        }
        await dispatch(enterHostMale());
      default:
        break;
    }
    await dispatch(clearLoading());
    await dispatch(handleShowVideo());
  };
};

// *TODO // INICIALIZAMOS LA PUBLICACION DEL AUDIO Y VIDEO DEL USUARIO LOCAL
//
export const startAndPublishTracks = () => {
  return async (dispatch, getState) => {
    const { videoTracks, audioTracks, clientRtc } = await getState().agora;
    const ContainerVideo = document.getElementById("video-local");
    videoTracks.play(ContainerVideo);
    audioTracks.play();
    await clientRtc.publish(videoTracks);
    await clientRtc.publish(audioTracks);
  };
};

// *TODO // FUNCION QUE PUBLICA EL AUDIO Y EL VIDEO DEL USUARIO REMOTO
//
export const publishRemoteTracks = (user, mediaType) => {
  return async (dispatch, getState) => {
    const { userData } = await getState().auth;
    const { clientRtc } = await getState().agora;
    await clientRtc.subscribe(user, mediaType);
    const ContainerVideo = document.getElementById("video-remote");

    if (mediaType === "video") {
      const remoteVideoTrack = await user.videoTrack;
      remoteVideoTrack.play(ContainerVideo);
    }

    if (mediaType === "audio") {
      const remoteAudioTrack = await user.audioTrack;
      remoteAudioTrack.play();
    }

    if (userData.gender === "female") {
      await dispatch(initialCounterFemale());
      await dispatch(enterCall());
    }
  };
};

// *TODO // FUNCION QUE MUTEA Y DESMUTEA EL AUDIO
//
export const audioHandleMuted = () => {
  return async (dispatch, getState) => {
    const { muted, audioTracks } = getState().agora;
    if (muted) {
      dispatch(handleMuted());
      await audioTracks.setMuted(true);
    } else {
      dispatch(handleMuted());
      await audioTracks.setMuted(false);
    }
  };
};
