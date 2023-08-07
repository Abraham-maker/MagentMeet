import {
  channelMessage,
  handleGiftMessage,
  handleMemberJoined,
  handleMemberLeft,
} from "./eventsAgora";
import {
  saveClientRTM,
  saveChannel,
  saveMembersChannel,
  saveMessages,
} from "./agora";
import AgoraRTM from "agora-rtm-sdk";

export const initAgoraRTM = () => {
  return async (dispatch, getState) => {
    await dispatch(createRTMClient());
    await dispatch(createRTMChannel());
    const { clientRtm, channel } = await getState().agora;
    await dispatch(loginRTMClient());
    await dispatch(joinRTMChannel());
    await dispatch(addOrUpdateLocalUserAttributes());
    await dispatch(getChannelMembers());

    await channel.on("ChannelMessage", (data, senderId) => {
      dispatch(channelMessage(data, senderId));
    });

    await channel.on("MemberJoined", async (memberId) => {
      dispatch(handleMemberJoined(memberId));
    });

    // await clientRtm.on("MessageFromPeer", async (message, senderId) => {
    //   handleGiftMessage(message, senderId);
    // });

    // await channel.on("MemberLeft", async (memberId) => {
    //   handleMemberLeft(memberId);
    // });
  };
};

export const createRTMClient = () => {
  return async (dispatch, getState) => {
    const { appID } = getState().agora;
    try {
      const clientRtm = AgoraRTM.createInstance(appID);
      dispatch(saveClientRTM(clientRtm));
    } catch (err) {
      console.log("Error al crear instancia de Agora RTM:", err);
    }
  };
};

export const createRTMChannel = () => {
  return async (dispatch, getState) => {
    const { host, clientRtm } = getState().agora;
    try {
      const channel = clientRtm.createChannel(host);
      dispatch(saveChannel(channel));
    } catch (err) {
      console.log("Error al crear el canal RTM:", err);
    }
  };
};

export const loginRTMClient = () => {
  return async (dispatch, getState) => {
    const { rtmUid, token, clientRtm } = getState().agora;
    try {
      await clientRtm.login({ uid: rtmUid, token: token });
    } catch (err) {
      console.log("Error al iniciar sesión en Agora RTM:", err.code);
    }
  };
};

export const joinRTMChannel = () => {
  return async (dispatch, getState) => {
    const { channel } = getState().agora;
    try {
      await channel.join();
    } catch (err) {
      if (err) {
        console.log("Error al unirse al canal RTM:", err.code);
      }
    }
  };
};

export const addOrUpdateLocalUserAttributes = () => {
  return async (dispatch, getState) => {
    const { userData } = getState().auth;
    const { clientRtm, rtcUid } = getState().agora;
    try {
      await clientRtm.addOrUpdateLocalUserAttributes({
        name: userData.name,
        userRtcUid: rtcUid.toString(),
      });
    } catch (err) {
      console.log(
        "Error al agregar o actualizar los atributos del usuario local:",
        err.code
      );
    }
  };
};

export const getChannelMembers = () => {
  return async (dispatch, getState) => {
    const { clientRtm, channel } = getState().agora;
    try {
      const members = await channel.getMembers();
      await Promise.all(
        members.map(async (member) => {
          const { name, userRtcUid } = await clientRtm.getUserAttributesByKeys(
            member,
            ["name", "userRtcUid"]
          );
          await dispatch(saveMembersChannel(member, name, userRtcUid));
        })
      );
    } catch (err) {
      console.log("Error al obtener los miembros del canal: LOCAL", err);
    }
  };
};

export const handleSendMessage = (message) => {
  return async (dispatch, getState) => {
    const { channel, rtmUid } = getState().agora;
    await channel.sendMessage({ text: message });
    await dispatch(saveMessages({ text: message }, rtmUid));
  };
};

// export const handleMessageGift = () => {
//   return async () => {
//     const { memberId } = membersChannel.find((m) => m.memberId !== rtmUid);
//     const response = await sendGiftToFemale(id, userIDRemote, giftID);
//     if (response.status === "Success") {
//       clientRtm.sendMessageToPeer(
//         { text: ` Te han enviado ${points} Pts ${giftID}` },
//         memberId
//       );
//       setReceivedPoints((prev) => [
//         ...prev,
//         {
//           text: `Has enviado un regalo de ${points} Pts ${giftID}`,
//           sender: rtmUid,
//         },
//       ]);
//     }
//   };
// };
