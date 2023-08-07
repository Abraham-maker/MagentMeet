import { motion } from "framer-motion";
import { styled, css } from "styled-components";

export const ContainerVideo = styled.div`
  background: #182337;
  width: 100%;
  height: 100%;
  position: relative;
  display: ${(props) => (props.show === "true" ? "flex" : "none")};
  z-index: ${(props) => (props.show === "true" ? "1" : "-1")};
  flex-direction: column;
`;

export const ContainerVideoLocal = styled.div`
  position: absolute;
  right: 0rem;
  top: 0rem;
  width: 200px;
  height: 150px;
  overflow: hidden;
  background: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5555;
  align-content: center;
  align-self: center;

  @media screen and (max-width: 699px) {
    width: 150px;
    height: 150px;
  }
`;

export const ContainerVideoRemote = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const VideoRunning = styled.div`
  height: 100%;
  width: 100%;
`;

export const Controls = styled.div`
  position: absolute;
  bottom: 60px;
  width: 100%;
  height: 55px;
  display: flex;
  align-items: center;
  z-index: 999;

  @media screen and (max-width: 699px) {
    bottom: 85px;
  }
`;

export const ControlsContainer = styled.div`
  width: 100%;
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ContainerFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  @media screen and (max-width: 699px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: ${(props) => (props.$flex ? "column" : "row")};
  }
`;

export const ContainerIcons = styled.div`
  height: ${(props) => (props.$addfiend ? "50px" : "40px")};
  width: ${(props) => (props.$addfiend ? "50px" : "40px")};
  background-color: #000;
  border-radius: 100%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  transition: 0.3s;

  @media screen and (max-width: 699px) {
    height: ${(props) => (props.$addfiend ? "50px" : "45px")};
    width: ${(props) => (props.$addfiend ? "50px" : "45px")};
  }

  img: {
    width: 100%;
    height: 100%;
  }

  &&:hover {
    background-color: ${(props) =>
      props.$gender === "male" ? "#1ca5fc" : "#e83e8c"};
    opacity: 1;
  }
`;

export const ContentControls = styled.div`
  background-color: #000;
  height: 30px;
  width: ${(props) => (props.$controls ? "110px" : "100px")};
  border-radius: 50px;
  font-size: 14px;
  font-weight: 500;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  cursor: pointer;
  transition: 0.3s;
  opacity: ${(props) => (props.$showMessage === "false" ? "0" : "1")};

  @media screen and (max-width: 699px) {
    height: 30px;
    width: ${(props) => (props.$controls ? "110px" : "90px")};
    font-size: 13px;
  }

  img: {
    width: 100%;
    height: 100%;
  }

  &&:hover {
    background-color: ${(props) =>
      props.$gender === "male" ? "#1ca5fc" : "#e83e8c"};
    opacity: 1;
  }
`;

export const Chat = styled(motion.div)`
  position: absolute;
  top: ${(props) => (!props.$showControls ? "43%" : "36%")};
  max-width: 50%;
  height: 270px;
  user-select: none;

  @media screen and (max-width: 699px) {
    top: ${(props) => (!props.$showControls ? "57%" : "45%")};
  }

  @media (max-height: 900px) {
    height: 200px;
    top: ${(props) => (!props.$showControls ? "40%" : "35%")};
  }
`;

export const Conversation = styled.div`
  height: 100%;
  position: relative;
  z-index: 0;
  display: flex;
  flex-direction: column-reverse;

  &::-webkit-scrollbar {
    transition: all 0.5s;
    width: 5px;
    height: 1px;
    z-index: 10;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: #b3ada7;
  }
`;

export const ConversationContainer = styled.div`
  height: 100%;
  overflow-x: hidden;
  padding: 0 16px;
  margin-bottom: 5px;

  &&:after {
    content: "";
    display: table;
    clear: both;
  }
`;

export const Messages = styled.div`
  color: #000;
  clear: both;
  line-height: 18px;
  font-size: 15px;
  padding: 8px;
  position: relative;
  margin: 8px 0;
  max-width: 90%;
  word-wrap: break-word;
  z-index: -1;

  &&:after {
    position: absolute;
    content: "";
    width: 0;
    height: 0;
    border-style: solid;
  }
`;

export const Message = styled(Messages)`
  background: ${(props) => props.background};
  border-radius: 0px 5px 5px 5px;
  float: left;
  &&:after {
    border-width: 0px 10px 10px 0;
    border-color: transparent ${(props) => props.background} transparent
      transparent;
    top: 0;
    left: -10px;
  }
`;

export const Text = styled.p`
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  line-height: 18px;
  margin: 2px;
`;

export const Span = styled.span`
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
`;

export const TextArea = styled.div`
  position: relative;
  width: 100%;
  height: 55px;
  background-color: #fff;
`;

export const Input = styled.input`
  float: left;
  width: 85%;
  margin-left: 5px;
  margin-top: 5px;
  height: 60%;
  @media screen and (max-width: 699px) {
    width: 78%;
  }
`;

export const ButtonSend = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  float: right;
  width: 10%;
  margin-right: 5px;
  margin-top: 5px;
  height: 70%;
  border: none;
  border-radius: 4px;

  background-color: ${({ $gender }) => {
    return $gender === "male" ? "#1ca5fc" : "#e83e8c";
  }}}
   

  cursor: pointer;
  @media screen and (max-width: 699px) {
    width: 15%;
  }
`;

export const ControledControls = styled.div`
  position: absolute;
  height: 50px;
  width: 100%;
  bottom: ${(props) => (!props.$showControls ? "60px" : "110px")};
  width: 100%;
  display: flex;
  align-items: center;
  z-index: 999;

  @media screen and (max-width: 699px) {
    bottom: ${(props) => (!props.$showControls ? "60px" : "160px")};
  }
`;

export const TimerFemaleContainer = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  color: #ccc;
  top: 4%;
  left: 4%;
  width: 80px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;

  @media screen and (max-width: 699px) {
    left: 8%;
  }
`;

export const Gift = styled.div`
  position: absolute;
  background-color: ${(props) =>
    props.$showGift === "true" ? "rgba(0,0,0,0.5)" : "#000"};
  width: ${(props) => (props.$showGift === "true" ? "320px" : "50px")};
  height: ${(props) => (props.$showGift === "true" ? "120px" : "50px")};
  border-radius: ${(props) => (props.$showGift === "true" ? "10px" : "100%")};
  top: 3%;
  left: 2%;
  z-index: 9999;
  transition: 0.3s;
  padding: ${(props) => (props.$showGift === "true" ? "10px" : "0")};
`;

export const GiftContainer = styled.div`
  width: 100%;
  height: 100%;
  ${(props) => {
    switch (props.$showGift) {
      case "true":
        return css`
          display: flex;
          flex-wrap: wrap;
          align-items: flex-start;
          justify-content: center;
          gap: 20px;
        `;
      case "false":
        return css`
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
        `;
      default:
        return;
    }
  }}
`;

export const IconGift = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  border-radius: 100%;
  cursor: pointer;
  transition: 0.3s;
  img {
    width: 90%;
    height: 90%;
  }

  &&:hover {
    background-color: #1ca5fc;
    opacity: 0.8;
  }
`;

export const SendGift = styled.div`
  position: absolute;
  right: 1rem;
  top: 10em;
  width: calc(120px - 1rem);
  height: 30px;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 15px;
  user-select: none;
  @media screen and (max-width: 699px) {
    width: calc(120px - 1rem);
    height: 30px;
  }
`;

export const SendGiftContainer = styled.div`
  cursor: pointer;
  display: flex;
  user-select: none;
  width: 100%;
  height: 100%;
  align-items: center;
  font-weight: 500;
  font-size: 14px;
  justify-content: center;
  color: #fff;
  &&:hover {
    background-color: ${(props) =>
      props.$gender === "male" ? "#1ca5fc" : "#e83e8c"};
  }
`;

export const ReceivedAndSend = styled.div`
  position: absolute;
  right: 1rem;
  top: 13em;
  width: calc(200px - 1rem);
  max-height: 280px;
  min-height: 30px;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.5);
  overflow-y: auto;
  border-radius: 5px;
  user-select: none;

  @media screen and (max-width: 699px) {
    width: calc(150px - 1rem);
    min-height: 30px;
    max-height: 300px;
  }

  @media screen and (max-height: 900px) {
    width: calc(300px - 1rem);
    height: 150px;
  }
`;

export const ReceivedAndSendContainer = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 20px;
`;
