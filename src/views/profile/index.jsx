import { styled, css } from "styled-components";
import { media } from "../../styles/mediaQueries";

export const ProfileContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const ContainerName = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 300px;
  gap: 20px;
  margin-bottom: 45px;
  margin-top: 10px;
  @media screen and (max-width: 480px) {
    top: 60px;
  }
`;

export const ParagraphName = styled.span`
  font-size: 20px;
  color: #686e7e;
`;

export const ContainerIconEdit = styled.div`
  font-size: 15px;
  width: 25px;
  height: 25px;
  cursor: pointer;
  z-index: 5555;
`;

export const ContainerPhoto = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  border: 1px solid #e5ebf1;
  border-radius: 5px;

  @media screen and (max-width: 480px) {
    top: 60px;
  }
`;

export const ContentPhoto = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const TextContentPhoto = styled.p``;

export const InputChange = styled.input`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
`;

export const ContainerBottoms = styled.div`
  position: absolute;
  bottom: 20px;
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const BottomProfile = styled.div`
  width: 36px;
  height: 36px;
  display: flex;
  font-size: 18px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: #fff;
  border: none;
  color: #fff;
  border-radius: 4px;

  &&:hover {
    background: #929eb1;
  }
`;

export const ContainerLogout = styled.div`
  position: absolute;
  top: 32px;
  right: 20px;
`;

export const ButtonLogout = styled.div`
  margin: 0;
  padding: 0;
  color: #929eb1;
  font-size: 24px;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
`;

export const Message = styled.p`
  color: ${(props) => (props.$error ? "rgb(255, 51, 51)" : "rgb(34,187,51) ")};
  font-weight: 500;
  margin-top: 10px;
`;

export const BlackOut = styled.div`
  position: absolute;
  z-index: 5555;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  z-index: 25;
  display: ${(props) => (props.showConfig ? "flex" : "none")};
`;

export const EditProfile = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 30;
  display: flex;
  width: 100%;
  min-height: 20px;
  max-height: calc(100% - 36px);
  background-color: #fff;
  border-top: 1px solid #e5ebf1;
`;

export const EditProfileButton = styled.div`
  position: absolute;
  top: -20px;
  left: 50%;
  z-index: 5555;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 90px;
  height: 45px;
  padding: 0;
  color: #182337;
  font-size: 18px;
  background: transparent;
  border: 0;
  transform: translateX(-50%);
  cursor: pointer;

  &:before {
    position: absolute;
    left: 0;
    z-index: -1;
    display: block;
    box-sizing: border-box;
    width: 100%;
    height: 90px;
    background-color: #fff;
    content: "";
    top: 0;
    border: 1px solid #e5ebf1;
    border-radius: 50%;
  }

  &:after {
    top: 20px;
    position: absolute;
    left: 0;
    z-index: -1;
    display: block;
    box-sizing: border-box;
    width: 100%;
    height: 90px;
    background-color: #fff;
    content: "";
  }
`;

export const ContentConfigContainer = styled.div`
  display: block;
  position: relative;
  flex-grow: 1;
  max-height: 100%;
  padding: 40px;
  background: #fff;
`;

export const ListContainersEdit = styled.div`
  display: block;
`;

export const ItemEdit = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

export const ItemEditHeader = styled.button`
  flex-shrink: 1;
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  color: ${(props) => props.color};
  background: none;
  border: none;
  outline: none;
  cursor: pointer;

  &&:hover {
    color: ${(props) => props.hover};
  }
`;

export const Span = styled.span`
  margin-left: ${(props) => props.marginLeft};
  font-size: 16px;
`;

export const ProfileBottomSetting = styled.div`
  margin-top: 30px;
  max-width: 480px;
`;

export const ProfileBottomSettingGroup = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  -webkit-box-pack: justify;
`;

export const ButtonGroupItem = styled.div`
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  width: 100%;
`;

export const Button = styled.button`
  height: 46px;
  padding: 0 20px;
  font-weight: 700;
  line-height: 16px;
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  box-sizing: border-box;
  width: 100%;
  white-space: nowrap;
  text-align: center;
  border: 1px solid transparent;
  border-radius: 3px;
  outline: none;
  cursor: pointer;
  user-select: none;
  font-size: 17px;
  margin: 0;
  ${(props) => {
    switch (props.$type) {
      case "save":
        return css`
          color: ${(props) => props.color};
          background: ${(props) => props.background};
        `;
      case "cancel":
        return css`
          color: ${(props) => props.color};
          background: ${(props) => props.background};
          border-color: #e5ebf1;
        `;
      default:
        return;
    }
  }}
`;

export const EditBody = styled.div`
  margin-top: 25px;
  box-sizing: border-box;
  width: 100%;
  padding-left: 40px;
`;

export const ContainerBodyPersonal = styled.div`
  padding: 0;
`;
export const ContainerBodyPassword = styled.div``;

export const BottomEditName = styled.div`
  position: absolute;
  top: 4px;
  right: 0;
  border-radius: 4px;
  background-color: ${(props) => props.background};
  color: ${(props) => props.color};
  font-size: 14px;
  padding: 5px;
  font-weight: bold;
  use-select: none;
  cursor: pointer;

  &&:hover {
    opacity: 0.8;
  }
`;
