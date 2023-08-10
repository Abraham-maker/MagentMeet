import { styled } from "styled-components";

export const UploadContainerLayout = styled.div`
  position: absolute;
  background: #fff;
  width: 100%;
  height: 100%;
  z-index: 5555;
`;

export const UploadContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const UploadContainerHeader = styled.div`
  position: absolute;
  top: 0;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 100%;
  color: #e83e8c;
  background-color: #fff;
  box-shadow: 0 2px 5px -10px rgba(24, 35, 55, 0.06),
    0 1px 4px rgba(24, 35, 55, 0.04), 0 2px 6px rgba(24, 35, 55, 0.5);
`;

export const UploadContainerBody = styled.div`
  width: 70%;
  height: 400px;
  margin-top: 70px;
  border-radius: 5px;
  border: 4px dashed #ccc;
  padding: 10px;

  @media screen and (max-height: 900px) {
    width: 50%;
    height: 60%;
  }

  @media screen and (max-width: 699px) {
    width: 90%;
    padding: 0px;
    height: 50%;
  }

  video {
    height: 100%;
    width: 100%;
  }
`;

export const UploadContainerFooter = styled.div`
  width: 70%;
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  align-items: center;

  @media screen and (max-height: 900px) {
    width: 50%;
  }

  @media screen and (max-width: 699px) {
    width: 90%;
  }
`;

export const ButtonStories = styled.button`
  width: 100%;
  display: flex;
  color: ${(props) => (props.$type === "cancel" ? "#e83e8c" : "#fff")};
  height: 50px;
  background: ${(props) =>
    props.$type === "cancel" ? "transparent" : "#e83e8c"};
  border: 1px solid #e83e8c;
  white-space: nowrap;
  text-align: center;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  cursor: pointer;
  user-select: none;
  font-weight: 700;
  font-size: 18px;

  &&:hover {
    background: ${(props) =>
      props.$type === "cancel" ? "#e83e8c" : "#d2456d"};
    color: #fff;
  }
`;
