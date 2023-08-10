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
import {
  handleModalChannel,
  handleModalMinutes,
} from "../../store/actions/modals";

const StartHome = ({ setShowStories, setShowUploadStorie }) => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.auth.userData);
  const myHistory = useSelector((state) => state.auth.myHistory);
  const channel = useSelector((state) => state.functionAgora.channelActive);
  const isLoading = useSelector((state) => state.agora.isLoading);
  const counterMale = useSelector((state) => state.auth.counterMale);

  useEffect(() => {
    if (userData.gender === "male") {
      const intervalId = setInterval(() => {
        dispatch(getChannelActive());
      }, 2000);
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
          <ContentHistory
            onClick={() => {
              if (myHistory === false) {
                setShowUploadStorie(true);
              }
            }}
          >
            <ButtonHistory active={myHistory === false ? "false" : "true"}>
              <TextTitle>
                {!myHistory ? "Sube un video" : "No puedes subir un video"}
              </TextTitle>
              <SpanPlusContainer>
                <SpanPlusContent>
                  <img src="/assets/svg/plus.svg" alt="" />
                </SpanPlusContent>
              </SpanPlusContainer>
              {myHistory === false && (
                <TextSub>✨ ¡Puntos por cada Me gusta!</TextSub>
              )}
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
          <ButtonStart
            $gender={userData.gender}
            onClick={() => {
              setShowStories(true);
            }}
          >
            Ver Historias
          </ButtonStart>
        )}
        {userData.gender === "male" && <DividerMale>or</DividerMale>}
        <ButtonStart
          $gender={userData.gender}
          onClick={() => {
            if (counterMale === 0) {
              dispatch(handleModalMinutes());
            } else {
              if (!isLoading) {
                startVideoChat();
              }
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
