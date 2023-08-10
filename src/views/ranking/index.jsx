import { styled } from "styled-components";

export const RankingContainer = styled.div`
  padding: 18px 12.85% 27px;
`;

export const TitleRanking = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 18px;
  line-height: 22px;
  font-weight: 400;
  text-align: center;
`;

export const ContainerBodyRanking = styled.div`
  margin-top: 12px;
`;

export const ContentBody = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: flex-end;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const TabItemHeader = styled.div`
  position: ${(props) => (props.$active === "true" ? "relative" : "")};
  margin-bottom: -1px;
  order: 1;
  display: block;
`;

export const ButtonTabsHeader = styled.button`
  display: block;
  width: 100%;
  margin: 0;
  padding: 5px 20px;
  font-size: 15px;
  line-height: 18px;
  white-space: nowrap;
  text-align: center;
  text-overflow: ellipsis;
  cursor: pointer;
  background-color: transparent;
  border: none;
  color: ${(props) => (props.$active === "true" ? "#182337" : "#d2456d")};
  border-bottom: 1px solid
    ${(props) => (props.$active === "true" ? "#182337" : "transparent")};
`;

export const ContentRankingInfo = styled.div`
  padding-top: 10px;
  order: 2;
  width: 100%;
  border-top: 1px solid #e5ebf1;
`;

export const TextCountDown = styled.div`
  display: block;
  color: #929eb1;
  font-size: 12px;
  line-height: 25px;
  text-align: center;
`;

export const ListHeader = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  padding: 8px 15px 7px;
  color: #929eb1;
  font-size: 12px;
  line-height: 15px;
  background-color: #f7f9fb;
  @media screen and (max-width: 699px) {
    padding-top: 11px;
    padding-bottom: 10px;
  }
`;

export const TextPlace = styled.span`
  width: 50px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #929eb1;
  font-size: 12px;
  line-height: 15px;
`;
export const TextName = styled.span`
  margin-left: 20px;
  flex-grow: 1;
  color: #929eb1;
  font-size: 12px;
  line-height: 15px;
`;
export const TextPoints = styled.span`
  margin-left: 20px;
  color: #929eb1;
  font-size: 12px;
  line-height: 15px;
  text-align: right;
`;

export const ListBody = styled.ul`
  display: block;
  margin: 0;
  padding: 0;
  list-style: none;
  height: 40%;
  overflow: auto;
`;

export const ListContent = styled.li`
  display: flex;
  align-items: center;
  height: 34px;
  padding-right: 15px;
  padding-left: 15px;
  color: #182337;
  font-size: 14px;

  line-height: 17px;
`;

export const SpanPlace = styled.span`
  display: block;
  width: 18px;
  height: 18px;
  line-height: 18px;
  text-align: center;
  background-size: 100% 100%;
`;
export const SpanDirection = styled.span`
  background-image: url(https://iframe.coomeet.com/img/icon-arrow-up-pink.b1a7a511.svg);
  margin-left: 20px;
  display: block;
  width: 12px;
  height: 12px;
  background-size: 100% 100%;
`;
export const SpanName = styled.span`
  margin-left: 20px;
  display: block;
  flex-grow: 1;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
export const SpanPoints = styled.span`
  margin-left: 20px;
  display: block;
  min-width: 35px;
  max-width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-align: right;
  text-overflow: ellipsis;
`;

export const ListFooter = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 8px 15px 8px 85px;
  color: #182337;
  font-size: 14px;
  line-height: 17px;
  background-color: #f7f9fb;
`;

export const FooterName = styled.div`
  color: #182337;
  font-size: 14px;
  line-height: 17px;
`;

export const FooterInfo = styled.div`
  margin-left: 20px;
  color: #182337;
  font-size: 14px;
  line-height: 17px;
  it-box-flex: 1;
  flex-grow: 1;
  text-align: right;
`;

export const ContainerHint = styled.div`
  @media screen and (max-width: 699px) {
    margin-top: 15px;
  }
  color: #929eb1;
  font-size: 12px;
  line-height: 15px;
  text-align: center;
  margin-top: 12px;
`;
