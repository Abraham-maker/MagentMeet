import React from "react";
import {
  HeaderContainerMessages,
  HeaderContentMessages,
  LayoutContent,
  InfoContact,
  AvatarContact,
  ButtonAvatarContact,
  ContactInfoNames,
  NameContact,
  ContainerActionContact,
  OnlineContact,
  ContainerBodyMessage,
  ContentBodyMessage,
  TextCreatedAt,
  AvatarBodyContent,
  ButtonDeleteUser,
} from "../../styles/Messages";
import { initAgoraMessage } from "../../store/actions/agora";
import { setActiveTab } from "../../store/actions/tabs";
import { useDispatch, useSelector } from "react-redux";
import { handleModalMinutes } from "../../store/actions/modals";

const ContentMessages = ({ user, gender, listUsers }) => {
  const dispatch = useDispatch();
  const counterMale = useSelector((state) => state.auth.counterMale);
  const findUser = listUsers.find((prev) => prev.id === user);
  const formatDate = (dateStr) => {
    const months = [
      "enero",
      "febrero",
      "marzo",
      "abril",
      "mayo",
      "junio",
      "julio",
      "agosto",
      "septiembre",
      "octubre",
      "noviembre",
      "diciembre",
    ];
    const weekdays = [
      "domingo",
      "lunes",
      "martes",
      "miércoles",
      "jueves",
      "viernes",
      "sábado",
    ];

    const date = new Date(dateStr);
    const dayOfWeek = weekdays[date.getDay()];
    const month = months[date.getMonth()];
    const dayOfMonth = date.getDate();
    const year = date.getFullYear();

    return `${dayOfWeek}, ${month} ${dayOfMonth}, ${year}`;
  };
  console.log(counterMale);
  return (
    <LayoutContent>
      <HeaderContainerMessages>
        <HeaderContentMessages>
          <div>
            <InfoContact>
              <AvatarContact>
                <ButtonAvatarContact>
                  <img
                    src="/assets/images/no-user.png"
                    alt="soport"
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "100%",
                    }}
                  />
                </ButtonAvatarContact>
              </AvatarContact>
              <ContactInfoNames>
                <NameContact>{findUser.name}</NameContact>
                <OnlineContact onlines={findUser.is_active}>
                  {findUser.is_active === 1 ? "Online" : "Offline"}
                </OnlineContact>
              </ContactInfoNames>
            </InfoContact>
          </div>

          {gender === "male" && (
            <ContainerActionContact
              host={findUser.host}
              in_call={findUser.in_call}
              disabled={findUser.host === null || findUser.in_call === 1}
              onClick={() => {
                if (counterMale === 0) {
                  dispatch(handleModalMinutes());
                } else {
                  dispatch(initAgoraMessage(findUser.host, findUser.id));
                }
                dispatch(setActiveTab(0));
              }}
            >
              {/* <ToolTip
                show={1}
                text={
                  findUser.host !== null && findUser.in_call !== 1
                    ? "Iniciar llamada"
                    : findUser.host !== null && findUser.in_call === 1
                    ? "El usuario en llamada"
                    : "Videollamada no disponible. El usuario está desconectado."
                }
              > */}
              {findUser.host !== null && findUser.in_call !== 1 ? (
                <img src="/assets/images/call.svg" alt="" />
              ) : findUser.host !== null && findUser.in_call === 1 ? (
                <img src="/assets/images/in-call.svg" alt="" />
              ) : (
                <img src="/assets/images/call-disabled.svg" alt="" />
              )}
              {/* </ToolTip> */}
            </ContainerActionContact>
          )}
        </HeaderContentMessages>
      </HeaderContainerMessages>

      <ContainerBodyMessage>
        <ContentBodyMessage>
          <TextCreatedAt>{formatDate(findUser.created_at)}</TextCreatedAt>
          <AvatarBodyContent>
            <img
              src="assets/images/no-user.png"
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "100%",
                objectFit: "cover",
              }}
              alt="nouser"
            />
          </AvatarBodyContent>
          <ButtonDeleteUser>Delete contact</ButtonDeleteUser>
        </ContentBodyMessage>
      </ContainerBodyMessage>
    </LayoutContent>
  );
};

export default ContentMessages;
