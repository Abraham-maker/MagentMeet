import React, { useState, useEffect } from "react";
import {
  ContainerVideo,
  ContainerVideoLocal,
  ContainerVideoRemote,
  VideoRunning,
  TextArea,
  Input,
  ButtonSend,
  TimerFemaleContainer,
} from "../../styles/Video";
import { useDispatch, useSelector } from "react-redux";
import { getChannelActive } from "../../store/actions/functionsAgora";
import MessagesList from "./MessagesList";
import GiftList from "./GiftList";
import Controles from "./Controls";
import RegalosList from "./RegalosList";
import { handleSendMessage } from "../../store/actions/agoraRTM";
import { getGiftUser } from "../../store/actions/functionsAgora";

const Index = ({ show }) => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.auth.userData);
  const seconds = useSelector((state) => state.auth.seconds);
  const minutes = useSelector((state) => state.auth.minutes);
  const membersChannel = useSelector((state) => state.agora.membersChannel);

  const [intervalId, setIntervalId] = useState(null);
  const [showControls, setShowControls] = useState(false);
  const [showMessages, setShowMessages] = useState(true);
  const [showGift, setShowGift] = useState(false);
  const [showRegalos, setRegalos] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (userData.gender === "male") {
      dispatch(getGiftUser());
      const intervalId = setInterval(() => {
        dispatch(getChannelActive());
      }, 5000);
      return () => clearInterval(intervalId);
    }
  }, [userData]);

  return (
    <ContainerVideo show={show}>
      {userData.gender === "female" && (
        <TimerFemaleContainer>
          {minutes.toString()}:{seconds.toString().padStart(2, "0")}
        </TimerFemaleContainer>
      )}

      <ContainerVideoLocal>
        <VideoRunning id="video-local" />
      </ContainerVideoLocal>
      <ContainerVideoRemote>
        <VideoRunning id="video-remote" />
      </ContainerVideoRemote>

      <MessagesList showMessages={showMessages} showControls={showControls} />

      {/* <GiftList
        setShowGift={setShowGift}
        showGift={showGift}
        userData={userData}
      /> */}

      <Controles
        userData={userData}
        showMessages={showMessages}
        setShowMessages={setShowMessages}
        showControls={showControls}
        setShowControls={setShowControls}
      />

      {/* 
      <RegalosList
        userData={userData}
        showRegalos={showRegalos}
        setRegalos={setRegalos}
      /> */}

      <TextArea>
        <Input
          disabled={membersChannel.length < 2}
          placeholder="Escriba un mensaje..."
          onChange={({ target: { value } }) => {
            setMessage(value);
          }}
          type="text"
          value={message}
          onKeyPress={() => {
            if (event.key === "Enter" && message !== "") {
              dispatch(handleSendMessage(message));
              setMessage("");
            }
          }}
        />
        <ButtonSend
          disabled={membersChannel.length < 2}
          $gender={userData.gender}
          onClick={() => {
            if (message !== "") {
              dispatch(handleSendMessage(message));
              setMessage("");
            }
          }}
        >
          <img src="/assets/svg/send-message.svg" alt="send" />
        </ButtonSend>
      </TextArea>
    </ContainerVideo>
  );
};

export default Index;
