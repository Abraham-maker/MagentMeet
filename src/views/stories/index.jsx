import { styled, css } from "styled-components";

export const StoriesLayout = styled.div`
  position: absolute;
  background: #182337;
  width: 100%;
  height: 100%;
  z-index: 9999;
`;

export const StoriesLayoutContent = styled.div`
  display: flex;
  -webkit-box-flex: 1;
  flex-grow: 1;
  position: relative;
`;

export const StoriesContainer = styled.div`
  -webkit-box-flex: 1;
  display: flex;
  flex-grow: 1;
  box-sizing: border-box;
  padding: 10px;
  height: 100%;
  width: 100%;

  @media screen and (max-width: 699px) {
    padding-right: 0;
    padding-left: 0;
  }
`;

export const ContainerClose = styled.div`
  position: absolute;
  top: 8px;
  right: 10px;
  z-index: 1;
  line-height: 0;
`;

export const ButtonClose = styled.button`
  color: #929eb1;
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  width: 100%;
  height: 100%;
  user-select: none;
`;

export const SpanClose = styled.span`
  font-size: 40px;
  display: block;
  box-sizing: border-box;
  width: 1em;
  height: 1em;
`;

export const ContainerNavigationPrev = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 20px;
`;

export const ContainerNavigationNext = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 20px;
`;

export const ContainerButtonNavigation = styled.button`
  width: 36px;
  height: 36px;
  font-size: 15px;
  color: #fff;
  background: rgba(0, 0, 0, 0.8);
  border-radius: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  border: 1px solid transparent;
  cursor: pointer;
  opacity: 0.8;

  &&:hover {
    background: rgba(28, 165, 252, 0.8);
  }
`;

export const ContentButtonNavigation = styled.span`
  display: block;
  box-sizing: border-box;
  width: 1em;
  height: 1em;
`;

export const ContainerVolume = styled.div`
  position: absolute;
  right: 20px;
  bottom: 25px;
  opacity: 0.5;
`;

export const ButtonVolume = styled.button`
  width: 36px;
  height: 36px;
  font-size: 15px;
  color: #fff;
  background: rgba(0, 0, 0, 0.8);
  border-radius: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  white-space: nowrap;
  text-align: center;
  border: 1px solid transparent;
  cursor: pointer;

  &&:hover {
    background: rgba(28, 165, 252, 0.8);
  }
`;

export const ContentButtonVolume = styled.span`
  font-size: 20px;
  display: block;
  box-sizing: border-box;
  width: 1em;
  height: 1em;
`;

export const ContainerAbuse = styled.div`
  position: absolute;
  left: 20px;
  bottom: 25px;
  opacity: 0.5;
`;

export const ButtonAbuse = styled.button`
  width: 36px;
  height: 36px;
  font-size: 15px;
  color: #fff;
  background: rgba(0, 0, 0, 0.8);
  border-radius: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  white-space: nowrap;
  text-align: center;
  border: 1px solid transparent;
  cursor: pointer;

  &&:hover {
    background: rgba(28, 165, 252, 0.8);
  }
`;

export const ContentButtonAbuse = styled.span`
  font-size: 20px;
  display: block;
  box-sizing: border-box;
  width: 1em;
  height: 1em;
`;

export const ContainerActions = styled.div`
  position: absolute;
  bottom: 25px;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
`;

export const ListContentActions = styled.ul`
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  -webkit-box-align: center;
`;

export const ButtonActions = styled.button`
  ${(props) => {
    switch (props.$type) {
      case "heart":
        return css`
          background: ${(props) =>
            props.$active === "true" ? "#f55280" : "rgba(0, 0, 0, 0.8)"};
        `;
      case "friends":
        return css`
          background: rgba(0, 0, 0, 0.8);
        `;
      default:
        return;
    }
  }}
  width: 50px;
  height: 50px;
  font-size: 24px;
  color: #fff;
  border-radius: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  white-space: nowrap;
  text-align: center;
  border: 1px solid transparent;
  cursor: pointer;

  &&:hover {
    ${(props) => {
      switch (props.$type) {
        case "heart":
          return css`
            background: #f55280;
          `;
        case "friends":
          return css`
            background: rgba(28, 165, 252, 0.8);
          `;
        default:
          return;
      }
    }}
  }
`;

export const ContentButtonActions = styled.span`
  font-size: 30px;
  display: block;
  box-sizing: border-box;
  width: 1em;
  height: 1em;
`;

export const ContainerVideo = styled.div`
  display: flex;
  -webkit-box-flex: 1;
  flex-grow: 1;
`;

export const ContentVideo = styled.div`
  position: relative;
  display: flex;
  -webkit-box-flex: 1;
  flex-grow: 1;
  height: 100%;
`;

export const VideoStories = styled.video`
  opacity: 1;
  -webkit-box-flex: 1;
  flex-grow: 1;
  width: 100%;
  height: 100%;
  outline: none;
`;

export const ContainerPlayVideo = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  color: #fff;
  font-size: 52px;
  transform: translate(-50%, -50%);
  opacity: 0.5;
  pointer-events: none;
`;

export const ContentPlayVideo = styled.span`
  box-sizing: border-box;
  width: 1em;
  height: 1em;
  display: block;
  color: #fff;
  font-size: 52px;
  pointer-events: none;
`;

export const ContainerDetailsInfo = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  display: flex;
`;

export const DetailsAvatar = styled.div`
  position: relative;
  flex-shrink: 0;
  width: 35px;
  height: 35px;

  &:after {
    position: absolute;
    right: 1px;
    bottom: 1px;
    width: 6px;
    height: 6px;
    background-color: #27a93c;
    border: 1px solid #e5ebf1;
    border-radius: 50%;
    content: "";
  }
`;

export const DetailsAvatarContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: block;
  box-sizing: border-box;
  border-radius: 50%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`;

export const DetailsTextInfo = styled.div`
  margin-left: 10px;
  z-index: 9999;
`;

export const DetailsTextInfoName = styled.div`
  color: #fff;
  font-size: 14px;
  line-height: 17px;
`;

export const DetailsTextInfoDate = styled.div`
  margin-top: 3px;
  color: #fff;
  font-size: 12px;
  line-height: 15px;
  opacity: 0.6;
`;
