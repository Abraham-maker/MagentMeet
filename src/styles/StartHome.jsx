import { styled, css } from "styled-components";

export const ContainerHome = styled.div`
  overflow: hidden;
  height: 100%;
  ${(props) => {
    switch (props.$gender) {
      case "male":
        return css`
          position: relative;
          display: grid;
          grid-template-columns: 100%;
          align-content: center;
          justify-content: center;
          box-sizing: border-box;
          padding-bottom: 58px;
          background: url("/assets/images/background.png") 0 0 repeat,
            url("/assets/svg/background-top-left.svg") left 30px top 30px
              no-repeat,
            url("/assets/svg/background-top-right.svg") right 30px top 30px
              no-repeat,
            url("/assets/svg/background-bottom-left.svg") left 30px bottom 68px
              no-repeat,
            url("assets/svg/background-bottom-right.svg") right 30px bottom 68px
              no-repeat,
            #000;
        `;
      case "female":
        return css`
          display: flex;
          flex-direction: column;
          background-color: #fff;
          @media screen and (max-width: 699px) {
            box-sizing: border-box;
            min-height: 570px;
          }
        `;
      default:
        return;
    }
  }}
`;

export const Text = styled.div`
  font-size: 28px;
  text-align: center;
  line-height: 34px;
  ${(props) => {
    switch (props.$gender) {
      case "male":
        return css`
          width: 280px;
          margin: 0 auto;
          color: #fff;
        `;
      case "female":
        return css`
          margin-top: 25px;
          color: #182337;
        `;
      default:
        break;
    }
  }}
`;

export const ContainerContentHome = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  ${(props) => {
    switch (props.$gender) {
      case "male":
        return css`
          margin-top: 30px;
          width: 280px;
          margin-right: auto;
          margin-left: auto;
        `;
      case "female":
        return css`
          margin-top: 20px;
          width: 100%;
        `;
      default:
        break;
    }
  }}
`;

export const ButtonStart = styled.div`
  ${(props) => {
    switch (props.$gender) {
      case "male":
        return css`
          padding: 14px 20px;
          color: #fff;
          background-color: rgba(28, 165, 252, 0.4);
          border-radius: 12px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          box-sizing: border-box;
          width: 100%;
          margin: 0;
          white-space: nowrap;
          text-align: center;
          border: 1px solid transparent;
          outline: none;
          cursor: pointer;
          user-select: none;
          touch-action: manipulation;
          font-size: 16px;
          line-height: 20p;
          margin-top: 8px;

          &:hover {
            background-color: #1987cd;
          }
        `;
      case "female":
        return css`
          width: 340px;
          position: relative;
          display: flex;
          flex-direction: row;
          box-sizing: border-box;
          color: #fff;
          height: 56px;
          padding: 0 20px;
          background: #e83e8c;
          white-space: nowrap;
          text-align: center;
          border: 1px solid transparent;
          align-items: center;
          justify-content: center;
          border-radius: 3px;
          outline: none;
          cursor: pointer;
          user-select: none;
          font-weight: 700;
          font-size: 20px;

          &&:hover {
            background: #d2456d;
          }
        `;

      default:
        break;
    }
  }}
`;

export const DividerMale = styled.span`
  margin-top: 8px;
  color: #929eb1;
  font-size: 15px;
  line-height: 18p;
  font-family: "Be Vietnam Pro";
  text-align: center;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const CouncilContainer = styled.div`
  margin-top: 23px;
`;

export const CouncilContent = styled.div`
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  flex-direction: row;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  color: #929eb1;
  font-size: 13px;
  line-height: 17px;
`;

export const CouncilIConDiv = styled.div`
  font-size: 20px;
`;

export const CouncilICon = styled.span`
  box-sizing: border-box;
  width: 1em;
  height: 1em;
  display: block;
`;

export const CouncilText = styled.span`
  margin-left: 5px;
  font-family: "Be Vietnam Pro";
`;

export const ContainerHistory = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 280px;
`;

export const ContentHistory = styled.div`
  margin-right: 5px;
  width: 40%;
  height: 280px;
`;

export const ButtonHistory = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background: ${(props) =>
    props.active !== "false"
      ? "linear-gradient(160deg, #F4F4F4, #ccc)"
      : "linear-gradient(160deg, #1ca5fc, #9f6095)"};
  border: none;
  border-radius: 4px;
  outline: none;
  flex-direction: column;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

export const TextTitle = styled.span`
  position: absolute;
  text-align: center;
  top: 30px;
  right: 15px;
  left: 15px;
  overflow: hidden;
  color: #fff;
  font-size: 18px;
`;

export const TextSub = styled.span`
  position: absolute;
  right: 15px;
  left: 15px;
  overflow: hidden;
  bottom: 24px;
  color: #fff;
  white-space: nowrap;
  text-align: center;
  font-size: 15px;
  text-overflow: ellipsis;
`;

export const Content = styled.div`
  margin-left: 5px;
  width: 60%;
  height: 280px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const SpanPlusContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 132px;
  height: 112px;
  color: #fff;
  font-size: 20px;
  background: transparent url(/assets/svg/fondo-plus.svg) 50% no-repeat;
  background-size: auto;
  background-size: contain;
  transform: translate(-50%, -50%);

  &:before {
    background-color: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: -1;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    content: "";
  }
`;

export const SpanPlusContent = styled.div`
  color: #fff;
  font-size: 20px;
  position: relative;
  top: 2px;
`;
