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
    background-color: #27a93c;
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
