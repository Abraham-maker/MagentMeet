import { styled } from "styled-components";

export const TabsMenuLeftContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

export const ContentLeft = styled.div`
  display: flex;
  height: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
  position: relative;

  @media screen and (max-width: 699px) {
    padding-left: 9px;
  }
`;

export const ButtonLeft = styled.button`
  position: relative;
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  padding: 18px 30px 14px 30px;
  margin: 0;
  border: none;
  outline: none;
  box-sizing: border-box;
  overflow: hidden;
  white-space: nowrap;
  text-decoration: none;
  text-overflow: ellipsis;
  cursor: ${({ $active }) => ($active ? "default" : "pointer")};
  background-color: ${({ $active, $gender }) => {
    if ($gender === "male") {
      return $active ? "#182337" : "transparent";
    } else if ($gender === "female") {
      return $active ? "#e83e8c" : "transparent";
    }
  }};
  color: ${({ $active }) => ($active ? "#fff" : "#000")};

  &:hover {
    background-color: ${({ $active, $gender }) => {
      if ($gender === "male") {
        return $active ? "#182337" : "#f7f9fb";
      } else if ($gender === "female") {
        return $active ? "#e83e8c" : "#f7f9fb";
      }
    }};
    color: ${({ $active, $gender }) => {
      if ($gender === "male") {
        return $active && $gender === "male" ? "#fff" : "#1987cd";
      } else if ($gender === "female") {
        return $active ? "#fff" : "#e83e8c";
      }
    }};
  }

  &::after {
    position: absolute;
    top: 50%;
    right: 0;
    display: block;
    width: 1px;
    height: 20px;
    background: #e5ebf1;
    transform: translateY(-50%);
    content: "";
  }

  @media screen and (max-width: 699px) {
    display: none;
  }
`;

export const ButtonSettings = styled.button`
  position: relative;
  height: 100%;
  margin: 0;
  padding: 0 25px;
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  user-select: none;

  &&:after {
    position: absolute;
    top: 50%;
    right: 0;
    display: block;
    width: 1px;
    height: 20px;
    background: #e5ebf1;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    content: "";
  }

  &&:hover {
    background-color: #f7f9fb;
    color: #182337;
  }
  @media screen and (max-width: 699px) {
    display: none;
  }
`;

export const ContainerIconSetting = styled.span`
  box-sizing: border-box;
  width: 1em;
  height: 1em;
  display: block;
  color: #182337;
`;

export const TabsMenuRightContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ContentRight = styled.div`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const ButtonSubHeader = styled.button`
  width: 20px;
  height: 20px;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  touch-action: manipulation;
  background-size: contain;
  border: none;
  outline: none;
  cursor: pointer;
  background: transparent url(/assets/images/sub.png);
`;

export const ButtonMinutesHeader = styled.button`
  padding: 5px;
  margin-left: 10px;
  color: #fff;
  border: none;
  font-weight: 700;
  font-size: 13px;
  background-color: #27a93c;
  border-radius: 2px;
  overflow: hidden;
  white-space: nowrap;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export const ButtonPremiumHeader = styled.button`
  margin-left: 5px;
  padding: 4px 8px;
  color: #fff;
  font-weight: 700;
  font-size: 12px;
  line-height: 12px;
  background-color: #e30002;
  border: none;
  cursor: pointer;
`;

export const ContainerAvatarAccount = styled.div`
  margin: 0px 10px;
  width: 30px;
  height: 30px;
`;

export const ButtonAvatarAccount = styled.button`
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  text-align: center;
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  user-select: none;
`;

export const AvatarSpan = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid #e6e6e6;
  position: relative;
  text-align: center;
  display: block;
  box-sizing: border-box;
  border-radius: 50%;
`;

export const ListGroup = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  margin-left: -1px;
`;

export const ButtonGroupOne = styled.button`
  padding: 3px 7px 2px;
  color: #fdab42;
  font-weight: 700;
  font-size: 11px;
  line-height: 13px;
  background-color: #fff;
  border: 1px solid #e5ebf1;
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
  min-width: 48px;
  cursor: pointer;
  overflow: hidden;
  text-align: center;
`;

export const TextButtonOneGroup = styled.span`
  display: block;
  font-weight: 700;
  font-size: 11px;
  line-height: 13px;
  font-family: "Be Vietnam Pro";
  white-space: nowrap;
`;

export const ButtonGroupTwo = styled.button`
  padding: 4px 8px 3px;
  color: #fff;
  font-weight: 700;
  font-size: 11px;
  line-height: 13px;
  background-color: #fdab42;
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
  min-width: 48px;
  cursor: pointer;
  overflow: hidden;
  text-align: center;
  border: none;
`;

export const TextButtonTwoGroup = styled.span`
  display: block;
  font-weight: 700;
  font-size: 11px;
  line-height: 13px;
  font-family: "Be Vietnam Pro";
  white-space: nowrap;
`;

export const ButtonPorcentage = styled.button`
  padding: 4px 8px 3px;
  color: #fff;
  font-weight: 700;
  font-size: 11px;
  line-height: 13px;
  background-color: #fdab42;
  border-radius: 2px;
  position: relative;
  cursor: pointer;
  display: block;
  box-sizing: border-box;
  margin: 0;
  overflow: hidden;
  text-align: center;
  border: none;
`;

export const TextButtonPorcentage = styled.span`
  display: block;
  font-weight: 700;
  font-size: 11px;
  line-height: 13px;
  font-family: "Be Vietnam Pro";
  white-space: nowrap;
`;

export const MobileRankingTab = styled.div`
  display: none;

  @media screen and (max-width: 699px) {
    display: flex;
    padding: 4px 8px 3px;
    color: #fff;
    font-weight: 700;
    font-size: 11px;
    line-height: 13px;
    background-color: #fdab42;
    border-radius: 2px;
    position: relative;
    cursor: pointer;
    display: block;
    box-sizing: border-box;
    margin: 0;
    overflow: hidden;
    user-select: none;
    text-align: center;
    border: none;
  }
`;

export const TextButtonRankingMobile = styled.span`
  display: block;
  font-weight: 700;
  font-size: 11px;
  line-height: 13px;
  font-family: "Be Vietnam Pro";
  white-space: nowrap;
`;

export const MobileMessageTab = styled.button`
  background-image: url(/assets/svg/message.svg);
  background-color: transparent;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  position: relative;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  color: #182337;
  padding: 0 5px;
  box-sizing: border-box;
  height: 100%;
  margin: 0;
  overflow: hidden;
  white-space: nowrap;
  text-decoration: none;
  text-overflow: ellipsis;
  border: none;
  font-size: 24px;
  outline: none;
  cursor: pointer;
`;

export const MobileBackTab = styled.button`
  background-image: url("/assets/svg/back.svg");
  background-color: transparent;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  position: relative;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  color: #182337;
  padding: 0 5px;
  box-sizing: border-box;
  height: 100%;
  margin: 0;
  overflow: hidden;
  white-space: nowrap;
  text-decoration: none;
  text-overflow: ellipsis;
  border: none;
  font-size: 24px;
  outline: none;
  cursor: pointer;
`;

export const MobileContainerTab = styled.li`
  display: none;
  @media screen and (max-width: 699px) {
    display: flex;
    position: relative;
    height: calc(100% - 1px);
    width: 50px;
  }
`;

export const MobileSettingTab = styled.button`
  display: flex;
  padding: 0 15px;
  position: relative;
  height: 100%;
  margin: 0;
  align-items: center;
  font-size: 24px;
  background: transparent;
  border: none;
  outline: none;
  user-select: none;
  cursor: pointer;
`;
