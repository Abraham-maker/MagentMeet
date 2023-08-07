import React from "react";
import { motion } from "framer-motion";
import {
  ControledControls,
  ControlsContainer,
  ContentControls,
  Controls,
  ContainerFlex,
  ContainerIcons,
} from "../../styles/Video";
import { useDispatch, useSelector } from "react-redux";
import { audioHandleMuted } from "../../store/actions/agoraRTC";
import { changeForUsers, leave } from "../../store/actions/agora";

const Controles = ({
  userData,
  showMessages,
  setShowMessages,
  showControls,
  setShowControls,
}) => {
  const dispatch = useDispatch();

  const messages = useSelector((state) => state.agora.messages);
  const muted = useSelector((state) => state.agora.muted);

  const messageVariants = {
    hidden: { y: 30, opacity: 0, transition: { delay: 0.1, duration: 0.2 } },
    animate: { y: 0, opacity: 1, transition: { delay: 0.1, duration: 0.2 } },
  };

  return (
    <>
      <ControledControls $showControls={showControls}>
        <ControlsContainer>
          <ContentControls
            $showMessage={messages.length === 0 ? "false" : "true"}
            $controls
            $gender={userData.gender}
            onClick={() => {
              setShowMessages(!showMessages);
            }}
          >
            Mensajes
            {showMessages ? (
              <img src="/assets/svg/arrow-down.svg" alt="arrow" />
            ) : (
              <img src="/assets/svg/arrow-up.svg" alt="arrow" />
            )}
          </ContentControls>
          <ContentControls
            $controls
            $gender={userData.gender}
            onClick={() => {
              setShowControls(!showControls);
            }}
          >
            Controles
            {showControls ? (
              <img src="/assets/svg/arrow-down.svg" alt="arrow" />
            ) : (
              <img src="/assets/svg/arrow-up.svg" alt="arrow" />
            )}
          </ContentControls>
        </ControlsContainer>
      </ControledControls>

      {showControls && (
        <Controls
          as={motion.div}
          variants={messageVariants}
          initial="hidden"
          animate="animate"
          exit="hidden"
        >
          <ControlsContainer>
            <ContainerFlex>
              <ContainerIcons $gender={userData.gender}>
                <img src="/assets/svg/report.svg" alt="report" />
              </ContainerIcons>
            </ContainerFlex>
            <ContainerFlex>
              <ContentControls
                $gender={userData.gender}
                onClick={() => {
                  dispatch(leave());
                }}
              >
                Finalizar
              </ContentControls>
              <ContainerIcons $addfiend $gender={userData.gender}>
                <img src="/assets/svg/add-friend.svg" alt="report" />
              </ContainerIcons>
              <ContentControls
                $gender={userData.gender}
                onClick={() => {
                  if (userData.gender === "male") {
                    dispatch(changeForUsers());
                  }
                }}
              >
                Siguiente
              </ContentControls>
            </ContainerFlex>
            <ContainerFlex $flex>
              <ContainerIcons
                $gender={userData.gender}
                onClick={() => {
                  dispatch(audioHandleMuted());
                }}
              >
                {!muted ? (
                  <img src="/assets/svg/microphone.svg" alt="report" />
                ) : (
                  <img src="/assets/svg/microphone-off.svg" alt="report" />
                )}
              </ContainerIcons>
              <ContainerIcons $gender={userData.gender}>
                <img src="/assets/svg/change-camera.svg" alt="report" />
              </ContainerIcons>
            </ContainerFlex>
          </ControlsContainer>
        </Controls>
      )}
    </>
  );
};

export default Controles;
