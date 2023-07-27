import { styled } from "styled-components";
import { media } from "./mediaQueries";

export const ContainerLayout = styled.div`
  background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.85),
      rgba(255, 255, 255, 0.85)
    ),
    linear-gradient(252.44deg, #1ca5fc 0%, #f55280 100%);
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContentLayout = styled.div`
  position: relative;
  padding: 0;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 24px 50px -10px rgba(24, 35, 55, 0.06),
    0 1px 4px rgba(24, 35, 55, 0.04), 0 20px 60px rgba(24, 35, 55, 0.5);
  z-index: 55;
  background: #fff;
  width: calc(100vw - 520px) !important;
  height: calc(100vh - 220px) !important;
  min-width: 700px;
  max-width: 1480px;
  min-height: 580px;
  max-height: 1100px;

  ${media.md`
  border-radius: 0;
  padding: 0;
  overflow: visible;
  min-width: 100%;
  min-height: auto;
  margin: 0;
  order: 2;
  height: calc(var(--vh, 1vh) * 100) !important;
  `}

  @media screen and (max-width: 1220px) {
    width: calc(100vw - 240px) !important;
  }
`;

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
