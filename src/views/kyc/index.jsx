import { styled, css, keyframes } from "styled-components";

export const AppVerification = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  padding: 25px 20px 20px;
`;

export const AppVerificationProcess = styled.div`
  padding-top: 15px;
`;

export const TextTitle = styled.div`
  color: #182337;
  text-align: center;
  font-size: 22px;
  line-height: 27px;
`;

export const TextDescription = styled.div`
  max-width: 390px;
  margin-right: auto;
  margin-left: auto;
  color: #182337;
  font-size: 14px;
  margin-top: 20px;
  line-height: 17px;
  text-align: center;
`;

export const AppVerificationImage = styled.div`
  width: calc(100% - 16px);
  max-width: 390px;
  height: 216px;
  margin-right: auto;
  margin-left: auto;
  padding: 8px;
  margin-top: 45px;
  background-image: url(../assets/svg/bg-top-left-corner.svg),
    url(../assets/svg/bg-top-right-corner.svg),
    url(../assets/svg/bg-bottom-right-corner.svg),
    url(../assets/svg/bg-bottom-left-corner.svg);
  background-repeat: no-repeat;
  background-position: 0 0, 100% 0, 100% 100%, 0 100%;

  @media screen and (max-width: 699px) {
    height: 177px;
  }
`;

export const AppVerificationImageUser = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: cover;
  background-image: url(../assets/svg/user-verification.svg);
`;

export const AppVerificationBottom = styled.button`
  margin-top: 45px;
  max-width: 390px;
  height: 46px;
  display: inline-flex;
  padding: 0 20px;
  user-select: none;
  margin-right: auto;
  white-space: nowrap;
  text-align: center;
  border: 1px solid transparent;
  box-sizing: border-box;
  width: 100%;
  border-radius: 3px;
  align-items: center;
  outline: none;
  justify-content: center;
  cursor: pointer;
  margin-left: auto;
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  background: #f55280;

  &&:hover {
    background: #d2456d;
  }
`;

export const VerificationLayout = styled.div`
  position: absolute;
  background: #182337;
  width: 100%;
  height: 100%;
  z-index: 5555;
`;

export const AppVerificationFemaleRecord = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const AppVerificationNavigation = styled.div`
  box-sizing: border-box;
  display: flex;
  width: 100%;
  align-items: center;
  height: 50px;
  text-align: center;
  padding: 11px 30px;
  color: #182337;
  gap: 10px;
  justify-content: space-between;
  font-size: 15px;
  line-height: 22px;
  text-align: center;
  background: #fff;

  @media screen and (max-width: 699px) {
    height: 60px;
    font-size: 14px;
  }
`;

export const ContainerStep = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  width: 100%;
  font-weight: bold;
  height: 100%;
  color: ${(props) => (props.step === "true" ? "#f55280" : "#182337")};
  @media screen and (max-width: 699px) {
    font-size: 13px;
  }
`;

export const AppVerificationBody = styled.div`
  position: relative;
  top: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

export const ContainerBody = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 350px;
  height: 350px;
  padding: 10px;
  border: 4px dashed #ccc;
  align-items: center;

  @media screen and (max-height: 900px) {
    width: 400px;
    height: 300px;
  }

  img {
    width: 100%;
    height: 90%;
  }

  video {
    width: 100%;
    height: 100%;
  }
`;

export const ContainerActions = styled.div`
  position: absolute;
  bottom: 0%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  box-sizing: border-box;
  width: 100%;
  max-width: 400px;
  padding: 0 20px;
`;

export const GroupButtons = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const AppVerificationBottomPhoto = styled.button`
  margin-top: 45px;
  max-width: 180px;
  height: 46px;
  display: inline-flex;
  padding: 0 20px;
  user-select: none;
  white-space: nowrap;
  text-align: center;
  border: 1px solid transparent;
  box-sizing: border-box;
  width: 100%;
  border-radius: 3px;
  align-items: center;
  outline: none;
  justify-content: center;
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;

  ${(props) => {
    switch (props.$state) {
      case "init":
        return css`
          color: #fff;
          background: #f55280;

          &&:hover {
            background: #d2456d;
          }
        `;
      case "cancel":
        return css`
          color: #f55280;
          background: #fff;

          &&:hover {
            color: #d2456d;
            border-radius: 3px;
            border: 1px solid #d2456d;
          }
        `;
      default:
        return;
    }
  }}
`;

export const CameraContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledButton = styled.button`
  margin-top: 10px;
`;

export const ImagePreview = styled.img`
  margin-top: 10px;
  max-width: 300px;
`;

export const MessageSuccess = styled.div`
  color: rgb(34, 187, 51);
  font-size: 16px;
  font-weght: bold;
  margin-top: 20px;
`;

export const TextFinaly = styled.p`
  text-align: center;
  color: #fff;
  font-size: ${(props) => props.fontsize};
  width: 70%;
  position: relative;
  top: 50px;
`;
