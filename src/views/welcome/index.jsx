import { styled } from "styled-components";
import { media } from "../../styles/mediaQueries";

export const HeroWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  background: url("/assets/images/hero-bg.jpg") center;
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;

  &&:before {
    content: "";
    background: rgba(255, 255, 255, 0.2);
    position: absolute;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
  }
`;

export const HeroContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${media.sm`
  top: 45%;
`}
`;

export const Paragraph = styled.span`
  font-size: ${(props) => props.size}px;
  color: ${(props) => props.color};
  text-align: center;
  height: 50px;

  ${media.xs`
  font-size: ${(props) => props.size - "10"}px;
  margin-bottom: ${(props) => props.margin}px;
`} ${media.sm`
  font-size: ${(props) => props.size - "5"}px;
`};
`;

export const WelcomeBottom = styled.div`
  display: flex;
  width: 250px;
  height: 55px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: ${(props) => props.background};
  color: ${(props) => props.color};
  font-weight: 500;
  border-radius: 5px;
  margin-top: 50px;
  user-select: none;

  ${media.sm`
  width: 280px;
  height: 50px;
`}
`;

export const OptionsClient = styled.div`
  padding: 30px 0px 30px 0px;
  width: 100%;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  ${media.md`
  flex-direction:column;
  gap:20px;
  `}
`;

export const CardOptions = styled.div`
  background: ${(props) => props.background};
  color: ${(props) => props.color};
  width: 200px;
  height: 150px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  cursor: pointer;
  padding: 5px;
  transition: 0.2s;
  user-select: none;

  ${media.md`
  flex-direction: row;
  width: 95%;
  height: 50px;
  align-items: center;
  justify-content: center;
  `}

  &&:hover {
    opacity: 0.7;
  }
`;

export const IconCardOptions = styled.div`
  width: 50px;
  height: 50px;
  background: url(${(props) => props.img}) center;
  background-repeat: no-repeat;
`;

export const ContainerClient = styled.div`
  height: 80vh;
  width: 100%;
  background: ${(props) => props.background};
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 40px;
  padding-bottom: 60px;
`;

export const ContainerContentClient = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    padding-top: 80px;
    width: 400px;
    height: 500px;

    ${media.xs`
    width: 250px;
    height: 350px;
    `}
  }
`;
