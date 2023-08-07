import React, { useState } from "react";
import {
  TabsMenuLeftContainer,
  ContentLeft,
  ButtonLeft,
  ButtonSettings,
  ContainerIconSetting,
  TabsMenuRightContainer,
  ContentRight,
  ButtonSubHeader,
  ButtonMinutesHeader,
  ButtonPremiumHeader,
  ContainerAvatarAccount,
  ButtonAvatarAccount,
  AvatarSpan,
  ListGroup,
  ButtonGroupOne,
  TextButtonOneGroup,
  ButtonGroupTwo,
  TextButtonTwoGroup,
  ButtonPorcentage,
  TextButtonPorcentage,
  MobileRankingTab,
  TextButtonRankingMobile,
  MobileContainerTab,
  MobileMessageTab,
  MobileSettingTab,
  MobileBackTab,
} from "../styles/TabsMenu";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTab } from "../store/actions/tabs";

export const ListTabsMale = () => {
  const [showMinutes, setShowMinutes] = useState(false);
  const counterMale = useSelector((state) => state.auth.counterMale);

  return (
    <>
      <li>
        <ButtonSubHeader />
      </li>
      <li
        onMouseOver={() => {
          setShowMinutes(true);
        }}
        onMouseLeave={() => {
          setShowMinutes(false);
        }}
      >
        {showMinutes ? (
          <ButtonMinutesHeader>{`minutes: ${parseInt(
            counterMale / 60
          )}`}</ButtonMinutesHeader>
        ) : (
          <ButtonMinutesHeader>
            <img src="/assets/svg/clock.svg" alt="" />
          </ButtonMinutesHeader>
        )}
      </li>
      <li>
        <ButtonPremiumHeader>Get Premium</ButtonPremiumHeader>
      </li>
    </>
  );
};

export const ListTabsFemale = ({ points, handleTabs }) => {
  return (
    <>
      <li>
        <ListGroup>
          <ButtonGroupOne>
            <TextButtonOneGroup>{points}</TextButtonOneGroup>
          </ButtonGroupOne>
          <ButtonGroupTwo>
            <TextButtonTwoGroup>C</TextButtonTwoGroup>
          </ButtonGroupTwo>
        </ListGroup>
      </li>
      <li style={{ marginLeft: "10px" }}>
        <ButtonPorcentage>
          <TextButtonPorcentage>+10%</TextButtonPorcentage>
        </ButtonPorcentage>
      </li>
      <li style={{ marginLeft: "10px" }}>
        <MobileRankingTab
          onClick={() => {
            handleTabs(2);
          }}
        >
          <TextButtonRankingMobile>TOP</TextButtonRankingMobile>
        </MobileRankingTab>
      </li>
    </>
  );
};

const TabsMobile = ({ handleTabs }) => {
  const activeTab = useSelector((state) => state.tabs.activeTab);
  return (
    <>
      <MobileContainerTab>
        {activeTab === 0 ? (
          <MobileMessageTab
            onClick={() => {
              handleTabs(1);
            }}
          ></MobileMessageTab>
        ) : (
          <MobileBackTab
            onClick={() => {
              handleTabs(0);
            }}
          ></MobileBackTab>
        )}
      </MobileContainerTab>
      <MobileContainerTab>
        <MobileSettingTab>
          <img src="/assets/svg/setting.svg" alt="setting" />
        </MobileSettingTab>
      </MobileContainerTab>
    </>
  );
};

const TabsMenu = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.auth.userData);
  const activeTab = useSelector((state) => state.tabs.activeTab);

  const handleTabs = (num) => {
    dispatch(setActiveTab(num));
  };

  return (
    <>
      <TabsMenuLeftContainer>
        <ContentLeft>
          <TabsMobile handleTabs={handleTabs} />
          <ButtonLeft
            $gender={userData.gender}
            $active={activeTab.toString() == "0"}
            onClick={() => {
              handleTabs(0);
            }}
          >
            Video chat
          </ButtonLeft>
          <ButtonLeft
            $gender={userData.gender}
            $active={activeTab.toString() == "1"}
            onClick={() => {
              handleTabs(1);
            }}
          >
            Usuarios
          </ButtonLeft>
          {userData.gender === "female" && (
            <ButtonLeft
              $gender={userData.gender}
              $active={activeTab.toString() == "2"}
              onClick={() => {
                handleTabs(2);
              }}
            >
              Ranking
            </ButtonLeft>
          )}
          <ButtonSettings>
            <ContainerIconSetting>
              <img src="/assets/svg/setting.svg" alt="setting" />
            </ContainerIconSetting>
          </ButtonSettings>
        </ContentLeft>
      </TabsMenuLeftContainer>
      <TabsMenuRightContainer>
        <ContentRight>
          {userData.gender === "male" && <ListTabsMale />}
          {userData.gender === "female" && (
            <ListTabsFemale points={userData.points} handleTabs={handleTabs} />
          )}
        </ContentRight>
        <ContainerAvatarAccount
          onClick={() => {
            handleTabs(3);
          }}
        >
          <ButtonAvatarAccount>
            <AvatarSpan>
              <img
                id="3"
                src={
                  userData.profile_photo_path !== null
                    ? userData.profile_photo_path
                    : "assets/images/no-user.png"
                }
                alt="user"
                style={{ width: "100%", height: "100%", borderRadius: "100%" }}
              />
            </AvatarSpan>
          </ButtonAvatarAccount>
        </ContainerAvatarAccount>
      </TabsMenuRightContainer>
    </>
  );
};

export default TabsMenu;
