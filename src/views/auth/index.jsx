import { styled } from "styled-components";
import { media } from "../../styles/mediaQueries";

export const FormSection = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.85),
      rgba(255, 255, 255, 0.85)
    ),
    linear-gradient(252.44deg, #1ca5fc 0%, #f55280 100%);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormCard = styled.div`
  position: relative;
  background: #ffffff;
  min-width: 450px;
  max-height: 668px;
  padding: 50px;
  display: flex;
  align-items: center;
  border-radius: 10px;
  flex-direction: column;
  overflow: auto;

  ${media.sm`
  width: 100%;
  min-width: 0;
  height:100%;
  padding: 150px 10px 50px 10px;
  `}
`;

export const FormTitle = styled.span`
  font-size: 28px;
  color: #686e7e;

  ${media.sm`
  margin-bottom: 30px;
`}
`;

export const FormWrapper = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  ${media.sm`
    position:relative;
    top:-50px;
  `}
`;

export const ContainerInput = styled.div`
  width: 100%;
  margin-top: 20px;
`;

export const FormLabel = styled.label`
  display: inline-block;
  font-size: 0.9rem;
  margin-bottom: 0.3rem;
  color: #afafaf;
`;

export const FormInput = styled.input`
  display: block;
  padding-left: 10px;
  outline: none;
  border-radius: 2px;
  height: 40px;
  width: 97%;
  border: none;
  border-bottom: ${(props) => `1px solid ${props.border}`};
  font-size: 1rem;
`;

export const FormButton = styled.button`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  font-size: ${(props) => props.fontSize};
  border: solid 1px ${(props) => props.border};
  background-color: ${(props) => props.border};
  color: ${(props) => props.color};
  margin-top: ${(props) => props.margintop};
  border-radius: 5px;
  font-family: "Be Vietnam Pro";
  letter-spacing: 0.15em;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;

  &:after,
  &:before {
    width: 0%;
    height: 0%;
    content: "";
    position: absolute;
    border-radius: 100%;
  }

  &:after {
    transition: all 0.3s ease;
    background-color: white;
  }

  span {
    z-index: 1;
    transition: all 0.3s ease-out;
  }

  &: {
    background: linear-gradient(90deg);
    color: white;
  }

  &:hover {
    color: ${(props) => props.border};
  }

  &:hover:after,
  &:hover:before {
    width: 100%;
    height: 100%;
    border-radius: 5px;
  }
`;

export const TextHandleTab = styled.span`
  text-align: center;
  font-size: ${(props) => props.fontSize};
  margin-bottom: ${(props) => props.marginbottom};
  color: ${(props) => props.color};
  user-select: none;
  cursor: pointer;
  margin-top: 20px;
`;

export const FormMessage = styled.p`
  color: ${(props) => (props.$error ? "rgb(255, 51, 51)" : "rgb(34,187,51) ")};
  font-weight: 500;
  margin-top: 10px;
`;

export const Select = styled.select`
  background: transparent;
  height: 40px;
  border-radius: 5px;
  border: ${(props) => `1px solid ${props.border}`};
  color: #000;
  width: 100%;
  font-size: 16px;
  padding: 0px 10px;
  font-family: "Be Vietnam Pro";
  margin-bottom: ${(props) => props.marginbottom};
  color: ${(props) => props.color};
  margin-top: 20px;
`;

export const Option = styled.option`
  color: ${(props) => props.color};
`;
