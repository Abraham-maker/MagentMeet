import { styled } from "styled-components";

export const LoadingSpinner = styled.div`
  display: inline-block;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border: 4px solid ${(props) => props.background};
  border-top: 4px solid ${(props) => props.color};

  border-radius: 50%;
  animation: rotate 1s linear infinite;
  z-index: 999;

  @keyframes rotate {
    to {
      transform: rotate(360deg);
    }
  }
`;
