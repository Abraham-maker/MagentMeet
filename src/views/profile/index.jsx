import { styled } from "styled-components";
import { media } from "../../styles/mediaQueries";

export const ProfileContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px 0px;
`;

export const ContainerName = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 50px;
  gap: 20px;
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
