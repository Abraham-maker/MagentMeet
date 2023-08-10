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
  saveGift,
  saveGiftSending,
  RESET_MESSAGES,
  RESET_GIFT_RECEIVED,
  RESET_GIFT_SENDING,
  setMembersChannel,
} from "./agora";
import AgoraRTM from "agora-rtm-sdk";
import { sendGiftHost, translate } from "./functionsAgora";

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

    await clientRtm.on("MessageFromPeer", async (message, senderId) => {
      await dispatch(saveGift(message, senderId));
    });

    await channel.on("MemberLeft", async (memberId) => {
      await dispatch(handleMemberLeft(memberId));
    });
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
    const response = await dispatch(translate(message, rtmUid));
    if (response.status === "Success") {
      const { data } = response;
      await dispatch(saveMessages(data.text, data.translations, data.senderid));
    }
    await channel.sendMessage({ text: message }, rtmUid);
  };
};

export const handleMessageGift = (giftID, points) => {
  return async (dispatch, getState) => {
    const { membersChannel, rtmUid, clientRtm } = getState().agora;
    const { memberId } = membersChannel.find((m) => m.memberId !== rtmUid);
    const response = await dispatch(sendGiftHost(giftID));
    if (response.status === "Success") {
      const data = { text: `haz enviado un regalo de ${points}pts` };
      await clientRtm.sendMessageToPeer({ text: `${points}` }, memberId);
      dispatch(saveGiftSending(data, rtmUid));
    }
  };
};
