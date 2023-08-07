import React, { useEffect } from "react";
import {
  ContainerHome,
  Text,
  ContainerContentHome,
  ButtonStart,
  DividerMale,
  CouncilContainer,
  CouncilContent,
  CouncilIConDiv,
  CouncilICon,
  CouncilText,
  ContainerHistory,
  ContentHistory,
  Content,
  ButtonHistory,
  TextTitle,
  TextSub,
  SpanPlusContainer,
  SpanPlusContent,
} from "../../styles/StartHome";
import { useDispatch, useSelector } from "react-redux";
import {
  generateHost,
  getChannelActive,
  getHost,
} from "../../store/actions/functionsAgora";
import { setLoading } from "../../store/actions/agora";
import { initAgoraRTC } from "../../store/actions/agoraRTC";
import { initAgoraRTM } from "../../store/actions/agoraRTM";
import { handleModalChannel } from "../../store/actions/modals";

const StartHome = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.auth.userData);
  const channel = useSelector((state) => state.functionAgora.channelActive);
  const isLoading = useSelector((state) => state.agora.isLoading);

  useEffect(() => {
    if (userData.gender === "male") {
      const intervalId = setInterval(() => {
        dispatch(getChannelActive());
      }, 5000);
      return () => clearInterval(intervalId);
    }
  }, [userData]);

  const startVideoChat = async () => {
    switch (userData.gender) {
      case "male":
        const initMale = async () => {
          if (channel.length > 0) {
            await dispatch(setLoading());
            await dispatch(getHost());
            await dispatch(initAgoraRTM());
            await dispatch(initAgoraRTC());
          } else {
            await dispatch(handleModalChannel());
          }
        };
        initMale();
        break;
      case "female":
        const initFemale = async () => {
          await dispatch(setLoading());
          await dispatch(generateHost());
          await dispatch(initAgoraRTM());
          await dispatch(initAgoraRTC());
        };
        initFemale();
        break;
      default:
        break;
    }
  };

  return (
    <ContainerHome $gender={userData.gender}>
      {userData.gender === "female" && (
        <ContainerHistory>
          <Content>
            <img src="/assets/images/wrapper.jpeg" alt="" />
          </Content>
          <ContentHistory>
            <ButtonHistory>
              <TextTitle>Sube un video</TextTitle>
              <SpanPlusContainer>
                <SpanPlusContent>
                  <img src="/assets/svg/plus.svg" alt="" />
                </SpanPlusContent>
              </SpanPlusContainer>
              <TextSub>✨ ¡Puntos por cada Me gusta!</TextSub>
            </ButtonHistory>
          </ContentHistory>
        </ContainerHistory>
      )}
      <Text $gender={userData.gender}>
        {userData.gender === "male"
          ? "El #1 para chatear con chicas online"
          : "¿Quieres encontrar un chico con quien chatear?"}
      </Text>
      <ContainerContentHome $gender={userData.gender}>
        {userData.gender === "male" && (
          <ButtonStart $gender={userData.gender}>Ver Historias</ButtonStart>
        )}
        {userData.gender === "male" && <DividerMale>or</DividerMale>}
        <ButtonStart
          $gender={userData.gender}
          onClick={() => {
            if (!isLoading) {
              startVideoChat();
            }
          }}
        >
          {userData.gender === "female" ? (
            <>{isLoading ? "LOADING..." : "Start video chat"}</>
          ) : (
            <>{isLoading ? "LOADING..." : "Video Chat"}</>
          )}
        </ButtonStart>
        <CouncilContainer>
          <CouncilContent>
            <CouncilIConDiv>
              <CouncilICon>
                <img src="/assets/svg/camera.svg" alt="camera" />
              </CouncilICon>
            </CouncilIConDiv>
            <CouncilText>Activate your camera to start searching</CouncilText>
          </CouncilContent>
        </CouncilContainer>
      </ContainerContentHome>
    </ContainerHome>
  );
};

export default StartHome;
