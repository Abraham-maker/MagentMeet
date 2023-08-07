import { styled, css } from "styled-components";

export const ModalGlobal = styled.div`
  position: absolute;
  z-index: 5555;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
`;

export const ModalGlobalContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  color: #fff;
`;

export const CardModal = styled.div`
  background-color: #fff;
  border-radius: 4px;
  padding: 30px;
  position: relative;
  flex-wrap: wrap;
  max-width: 70%;

  @media screen and (max-width: 699px) {
    max-width: 100%;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  ${(props) => {
    switch (props.$img) {
      case props.$img:
        return css`
          height: 20%;
          width: 100%;
          img {
            height: 100%;
            width: 60%;
          }
        `;
      default:
        break;
    }
  }}
`;

export const CardBody = styled.div`
  text-align: center;
`;

export const CardFooter = styled.div``;

export const FooterBtn = styled.button`
  margin-top: 25px;
  color: #fff;
  background: #1ca5fc;
  border: 0;
  border-radius: 4px;
  padding: 5px;
  width: 100%;
  height: 50px;
  cursor: pointer;
  font-size: 17px;
  font-weight: bold;

  &&:hover {
    background: #1987cd;
  }
`;

export const Text = styled.span`
  word-break: break-word;
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
  line-height: ${(props) => props.lineheight};
`;

export const IconCloseContainer = styled.div`
  position: absolute;
  height: 50px;
  right: 0px;
  top: 0px;
  width: 50px;
  z-index: 666;
`;

export const IconClose = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
