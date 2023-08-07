import React from "react";
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
} from "../../styles/Messages";

const Messages = () => {
  return (
    <MessagesLayout>
      <MessagesContainer $view="sidebar">
        <ContainerSideBar>
          <FilterContainer>
            <ButtonFilter>
              <ButtonFilterText>Recientes</ButtonFilterText>
            </ButtonFilter>
            <ContainerIconsFilter>
              <ButtonFilter>
                <ButtonFilterText>Icon</ButtonFilterText>
              </ButtonFilter>
              <ButtonFilter>
                <ButtonFilterText>Icon</ButtonFilterText>
              </ButtonFilter>
            </ContainerIconsFilter>
          </FilterContainer>
          <ContentSideBar>
            <ScrollSideBar>
              <ContainerMessage>
                <PhotoContainerMessage>
                  <PhotoProfileMessage
                    src="/assets/images/no-user.png"
                    alt="soport"
                  />
                </PhotoContainerMessage>
                <ContainerDetailMessage>
                  <ContentMessage>
                    <TextMessages weight="700" fontSize="14px" color="#182337">
                      Abraham Moreno
                    </TextMessages>
                    <TextMessages
                      fontSize="12px"
                      color="#182337"
                      lineheight="16px"
                    >
                      morenoabraham.j@gmail.com
                    </TextMessages>
                    <TextMessages
                      fontSize="12px"
                      color="#182337"
                      lineheight="15px"
                      margintop="5px"
                    >
                      05/06/2003
                    </TextMessages>
                  </ContentMessage>
                </ContainerDetailMessage>
              </ContainerMessage>
            </ScrollSideBar>
          </ContentSideBar>
        </ContainerSideBar>
      </MessagesContainer>

      <MessagesContainer $view="messages"></MessagesContainer>
    </MessagesLayout>
  );
};

export default Messages;
