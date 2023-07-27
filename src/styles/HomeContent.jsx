import { styled } from "styled-components";

export const HeaderContent = styled.div`
  height: 50px;
  @media screen and (max-width: 669px) {
    height: 56px;
  }
`;

export const ContainerHeader = styled.div`
  display: flex;
  position: relative;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
  border-bottom: 1px solid #f4f4f4;
  background: #fff;
`;

export const BodyContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;
