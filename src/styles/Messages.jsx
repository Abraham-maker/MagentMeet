import { styled, css } from "styled-components";

export const MessagesLayout = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  box-sizing: border-box;
  min-height: 0;

  @media screen and (max-width: 699px) {
    display: block;
  }
`;

export const MessagesContainer = styled.div`
  ${(props) => {
    switch (props.$view) {
      case "sidebar":
        return css`
          width: 40%;
          min-width: 280px;
          max-width: 360px;
          border-right: 1px solid #e5ebf1;

          @media screen and (max-width: 699px) {
            display: inline;
            width: 100%;
            max-width: none;
            border-right: none;
          }
        `;
      case "messages":
        return css`
          position: relative;
          min-width: 0;
          width: 60%;
          display: flex;
          align-items: center;
          height: 100%;
          justify-content: center;

          @media screen and (max-width: 699px) {
            display: none;
          }
        `;
      default:
        return;
    }
  }}
`;

export const ContainerSideBar = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  height: 100%;
`;

export const ContentSideBar = styled.div`
  position: relative;
  flex: 1 1 auto;
  overflow: hidden;
  background: #fff;
`;

export const ScrollSideBar = styled.div`
  height: 100%;
  margin: 0;
  padding: 0;
  overflow-y: auto;
`;

export const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  background: #fff;
  border-top: 1px solid #e5ebf1;
  border-bottom: 1px solid #e5ebf1;
  justify-content: space-between;
  @media screen and (max-width: 699px) {
    width: 100%;
    padding: 0;
  }
`;

export const ContainerIconsFilter = styled.div`
  display: flex;
  gap: 20px;
  @media screen and (max-width: 699px) {
    gap: 0px;
  }
`;

export const ButtonFilter = styled.button`
  color: #182337;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  background: transparent;
  cursor: pointer;
  border: 0;
  padding: 15px;
`;

export const ButtonFilterText = styled.div`
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 14px;
  line-height: 17px;
`;

export const ContainerMessage = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  height: 80px;
  padding: 10px 20px 7px 18px;
  background: transparent;
  border-left: 2px solid transparent;
  cursor: pointer;
  user-select: none;
  border-bottom: 1px solid #e5ebf1;
  &&:hover {
    background-color: #f7f9fb;
  }
`;

export const PhotoContainerMessage = styled.div`
  position: relative;
  width: 48px;
  height: 48px;
  font-size: 48px;
  border: 1px solid #e6e6e6;
  border-radius: 50%;

  &&:after {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 10px;
    height: 10px;
    background-color: ${(props) =>
      props.is_active === 1 ? "#27a93c" : "#ccc"};
    border: 2px solid #e5ebf1;
    border-radius: 50%;
    content: "";
  }
`;

export const PhotoProfileMessage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 100%;
`;

export const ContainerDetailMessage = styled.div`
  margin-left: 15px;
  flex: 1 1 auto;
  overflow: hidden;
`;

export const ContentMessage = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  align-items: flex-start;
`;

export const TextMessages = styled.div`
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.color};
  font-weight: ${(props) => props.weight};
  line-height: ${(props) => props.lineheight};
  margin-top: ${(props) => props.margintop};
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const LayoutContent = styled.div`
  flex-grow: 1;
  width: 60%;
  height: 100%;

  @media screen and (max-width: 699px) {
    display: ${(props) => (props.chatActive === true ? "none" : "inline")};
    width: 100%;
    max-width: none;
    border-right: none;
  }
`;

export const HeaderContainerMessages = styled.div`
  flex-shrink: 0;
  height: 50px;
  border-bottom: 1px solid #e5ebf1;
`;

export const HeaderContentMessages = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 7px 15px;
`;

export const InfoContact = styled.div`
  position: relative;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
`;

export const AvatarContact = styled.div`
  flex-shrink: 0;
  width: 35px;
  height: 35px;
`;

export const ButtonAvatarContact = styled.div`
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

export const ContactInfoNames = styled.div`
  overflow: hidden;
  font-family: "Be Vietnam Pro";
  color: #000;
  margin-left: 10px;
  font-size: 14px;
  line-height: 17px;
  user-select: none;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const NameContact = styled.div`
  display: flex;
  align-items: center;
  color: #000;
  font-size: 14px;
  line-height: 17px;
`;

export const OnlineContact = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => (props.onlines === 1 ? "#27a93c" : "#929eb1")};
  font-size: 12px;
  line-height: 17px;
`;

export const ContainerActionContact = styled.button`
  margin-right: 16px;
  color: #e5ebf1;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 20px;
  height: 20px;
  margin: 0;
  padding: 0;
  font-size: 18px;
  background: transparent;
  border: none;
  outline: none;
  user-select: none;
  cursor: ${(props) =>
    props.host === null || props.in_call === 1 ? "default" : "pointer"};
`;

export const ContainerBodyMessage = styled.div`
  position: relative;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  box-sizing: border-box;
  padding: 52px 16px;
`;

export const ContentBodyMessage = styled.div`
  width: 100%;
  max-width: 488px;
  margin: auto;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TextCreatedAt = styled.div`
  box-sizing: border-box;
  display: inline-block;
  min-width: 125px;
  padding: 5px 15px 4px;
  color: #182337;
  font-size: 12px;
  line-height: 15px;
  font-family: "Be Vietnam Pro";
  background: #f7f9fb;
  border-radius: 25px;
`;

export const AvatarBodyContent = styled.div`
  margin-top: 15px;
  box-sizing: border-box;
  width: 210px;
  height: 210px;
  margin-right: auto;
  border-radius: 50%;
  margin-left: auto;
  border: 5px solid #fddce6;
  margin-bottom: 20px;
`;

export const ButtonDeleteUser = styled.div`
  color: #e30002;
  background: transparent;
  border: 1px solid #e5ebf1;
  height: 46px;
  padding: 0 20px;
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  box-sizing: border-box;
  width: 100%;
  margin: 0;
  white-space: nowrap;
  border-radius: 3px;
  outline: none;
  user-select: none;
  touch-action: manipulation;
  cursor: pointer;
  text-align: center;
  font-family: "Be Vietnam Pro";

  &&:hover {
    border: 1px solid #e30002;
  }
`;

export const ContainerLayout = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  -webkit-box-flex: 1;
  box-sizing: border-box;
  min-height: 0;

  @media screen and (max-width: 699px) {
    display: block;
  }
`;

export const LayoutSideBar = styled.div`
  width: 40%;
  min-width: 280px;
  max-width: 360px;
  border-right: 1px solid #e5ebf1;

  @media screen and (max-width: 699px) {
    display: ${(props) => (props.chatactive === true ? "none" : "inline")};
    width: 100%;
    max-width: none;
    border-right: none;
  }
`;

export const MessengerContacts = styled.div`
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  box-sizing: border-box;
  height: 100%;
`;

export const MessengerContactContainer = styled.div`
  position: relative;
  -webkit-box-flex: 1;
  flex: 1 1 auto;
  overflow: hidden;
  background: #f7f9fb;
  border-top: 1px solid #e5ebf1;
`;

export const MessagerContactContent = styled.div`
  height: 100%;
  margin: 0;
  padding: 0;
  overflow-y: auto;
`;

export const MessageContainer = styled.div`
  position: relative;
`;

export const Message = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  box-sizing: border-box;
  height: 80px;
  padding: 10px 20px 7px 18px;
  background: transparent;
  border-left: 2px solid transparent;
  cursor: pointer;
  user-select: none;
  &&:hover {
    background-color: #e5ebf1;
  }

  &&:after {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 68px;
    border-bottom: 1px solid #e5ebf1;
    content: "";
  }
`;

export const AppContactAvatar = styled.div`
  position: relative;
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  font-size: 48px;

  &&:after {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 10px;
    height: 10px;
    background-color: ${(props) =>
      props.is_active === 1 ? "#27a93c" : "#ccc"};
    border: 2px solid #e5ebf1;
    border-radius: 50%;
    content: "";
  }
`;

export const SpanAvatar = styled.span`
  width: 48px;
  height: 48px;
  border: 1px solid #e6e6e6;
  position: relative;
  display: block;
  box-sizing: border-box;
  border-radius: 50%;
`;

export const AppContactContent = styled.div`
  margin-left: 15px;
  -webkit-box-flex: 1;
  flex: 1 1 auto;
  min-width: 0;
  overflow: hidden;
`;

export const AppContactContentHeader = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
`;

export const AppContactContentTextHeader = styled.div`
  overflow: hidden;
  color: #182337;
  font-size: 14px;
  font-family: "Be Vietnam Pro";
  line-height: 17px;
  font-weight: 700;
  text-overflow: ellipsis;
`;

export const AppContactContentMessage = styled.div`
  margin-top: 3px;
`;

export const AppContactContentMessageRead = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
`;

export const AppContactContentMessageReadText = styled.span`
  overflow: hidden;
  color: #182337;
  white-space: nowrap;
  font-size: 12px;
  font-family: "Be Vietnam Pro";
  line-height: 16px;
  text-overflow: ellipsis;
`;

export const AppContactContentStatus = styled.div`
  margin-top: 4px;
`;

export const AppContactContentStatusText = styled.span`
  color: #929eb1;
  font-size: 12px;
  font-family: "Be Vietnam Pro";
  line-height: 15px;
  text-overflow: ellipsis;
`;

export const LayoutContentStart = styled.div`
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  align-items: center;
  -webkit-box-pack: center;
  flex-direction: column;
  -webkit-box-align: center;
  justify-content: center;
  position: relative;
`;

export const LayoutContentStartImage = styled.div`
  display: block;
  width: 180px;
  height: 130px;
  background: url("https://iframe.coomeet.com/img/image-messenger-start.d8647dc7.svg")
    50% no-repeat;
`;

export const LayoutContentStartText = styled.div`
  margin-top: 20px;
  text-align: center;
  font-size: 22px;
  font-family: "Be Vietnam Pro";
  line-height: 27px;
`;

export const ContainerCall = styled.div`
  position: absolute;
  top: 25px;
  right: 10px;
  height: 30px;
  width: 30px;
  display: flex;
  border-radius: 100%;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;
