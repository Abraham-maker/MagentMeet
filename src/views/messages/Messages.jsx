import React, { useState, useEffect, useCallback } from "react";
import {
  MessagesLayout,
  MessagesContainer,
  ContainerSideBar,
  ContentSideBar,
  ScrollSideBar,
  FilterContainer,
  ButtonFilter,
  ButtonFilterText,
  ContainerIconsFilter,
  ContainerMessage,
  PhotoContainerMessage,
  PhotoProfileMessage,
  ContainerDetailMessage,
  ContentMessage,
  TextMessages,
  LayoutContentStart,
  LayoutContentStartImage,
  LayoutContentStartText,
} from "../../styles/Messages";
import { listUserFilter } from "../../store/actions/auth";
import { useDispatch, useSelector } from "react-redux";
import { LoadingSpinner } from "../../components/Loading";
import ContentMessages from "./ContentMessages";

const Messages = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.auth.userData);

  const [chatActive, setChatActive] = useState(false);
  const [listUsers, setListUsers] = useState(false);
  const [infoUser, setInfoUser] = useState({});

  const handleUserSelection = (user) => {
    setInfoUser(user);
  };

  const getListUsers = useCallback(async () => {
    const filterValue = userData.gender === "male" ? "female" : "male";
    const response = await dispatch(listUserFilter());
    const { data } = response;
    const usersFilter = data.filter(
      (persona) => persona.gender === filterValue
    );
    setListUsers(usersFilter);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      getListUsers();
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  if (!listUsers) {
    return (
      <div
        style={{
          position: "absolute",
          top: "45%",
          left: "50%",
          transform: "translateY(-50%, -50%)",
        }}
      >
        <LoadingSpinner
          width="30px"
          height="30px"
          color={"#fff"}
          background={userData.gender === "male" ? "#4bafe1" : "#e83e8c"}
        />
      </div>
    );
  }

  return (
    <MessagesLayout>
      <MessagesContainer $view="sidebar">
        <ContainerSideBar>
          <FilterContainer>
            {/* <ButtonFilter>
              <ButtonFilterText>Recientes</ButtonFilterText>
            </ButtonFilter>
            <ContainerIconsFilter>
              <ButtonFilter>
                <ButtonFilterText>Icon</ButtonFilterText>
              </ButtonFilter>
              <ButtonFilter>
                <ButtonFilterText>Icon</ButtonFilterText>
              </ButtonFilter>
            </ContainerIconsFilter> */}
          </FilterContainer>
          <ContentSideBar>
            <ScrollSideBar>
              {listUsers.map((item, index) => {
                return (
                  <ContainerMessage
                    key={index}
                    onClick={() => {
                      setChatActive(true);
                      handleUserSelection(item.id);
                    }}
                  >
                    <PhotoContainerMessage is_active={item.is_active}>
                      {item.profile_photo_path !== null ? (
                        <PhotoProfileMessage
                          src={item.profile_photo_path}
                          alt="soport"
                        />
                      ) : (
                        <PhotoProfileMessage
                          src="/assets/images/no-user.png"
                          alt="soport"
                        />
                      )}
                    </PhotoContainerMessage>
                    <ContainerDetailMessage>
                      <ContentMessage>
                        <TextMessages
                          weight="700"
                          fontSize="14px"
                          color="#182337"
                        >
                          {item.name}
                        </TextMessages>
                        <TextMessages
                          fontSize="12px"
                          color="#182337"
                          lineheight="16px"
                        >
                          {item.email}
                        </TextMessages>
                        <TextMessages
                          fontSize="12px"
                          color="#182337"
                          lineheight="15px"
                          margintop="5px"
                        >
                          {item.created_at}
                        </TextMessages>
                      </ContentMessage>
                    </ContainerDetailMessage>
                  </ContainerMessage>
                );
              })}
            </ScrollSideBar>
          </ContentSideBar>
        </ContainerSideBar>
      </MessagesContainer>

      <MessagesContainer $view="messages">
        {chatActive ? (
          <ContentMessages
            user={infoUser}
            gender={userData.gender}
            listUsers={listUsers}
          />
        ) : (
          <LayoutContentStart>
            <LayoutContentStartImage></LayoutContentStartImage>
            <LayoutContentStartText>
              just choose a conversation
              <br />
              To keep chatting,
            </LayoutContentStartText>
          </LayoutContentStart>
        )}
      </MessagesContainer>
    </MessagesLayout>
  );
};

export default Messages;
