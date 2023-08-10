import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRanking } from "../../store/actions/auth";
import LayoutWrapper from "../../layout/LayoutWrapper";
import { LoadingSpinner } from "../../components/Loading";
import {
  RankingContainer,
  TitleRanking,
  ContainerBodyRanking,
  ContentBody,
  TabItemHeader,
  ButtonTabsHeader,
  ContentRankingInfo,
  TextCountDown,
  ListHeader,
  TextPlace,
  TextName,
  TextPoints,
  ListFooter,
  FooterInfo,
  FooterName,
  ListBody,
  ListContent,
  SpanPlace,
  SpanDirection,
  SpanName,
  SpanPoints,
  ContainerHint,
} from "./index";

const Ranking = () => {
  const dispatch = useDispatch();
  const listRanking = useSelector((state) => state.auth.rankingList);
  const [tabActive, setTabActive] = useState(0);

  useEffect(() => {
    dispatch(getRanking());
  }, []);

  if (Object.entries(listRanking).length === 0) {
    return (
      <LayoutWrapper>
        <div
          style={{
            position: "absolute",
            top: "45%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <LoadingSpinner
            width="30px"
            height="30px"
            color={"#fff"}
            background={"#4bafe1"}
          />
        </div>
      </LayoutWrapper>
    );
  }

  return (
    <RankingContainer>
      <TitleRanking>Top Usuarios MagentMeet</TitleRanking>
      <ContainerBodyRanking>
        <ContentBody>
          <TabItemHeader $active={tabActive === 0 ? "true" : "false"}>
            <ButtonTabsHeader
              $active={tabActive === 0 ? "true" : "false"}
              onClick={() => {
                setTabActive(0);
              }}
            >
              Día
            </ButtonTabsHeader>
          </TabItemHeader>
          <TabItemHeader $active={tabActive === 1 ? "true" : "false"}>
            <ButtonTabsHeader
              $active={tabActive === 1 ? "true" : "false"}
              onClick={() => {
                setTabActive(1);
              }}
            >
              Semana
            </ButtonTabsHeader>
          </TabItemHeader>
          <TabItemHeader $active={tabActive === 2 ? "true" : "false"}>
            <ButtonTabsHeader
              $active={tabActive === 2 ? "true" : "false"}
              onClick={() => {
                setTabActive(2);
              }}
            >
              Mes
            </ButtonTabsHeader>
          </TabItemHeader>
          <ContentRankingInfo>
            <TextCountDown>
              Termina en 20 horas 3 min 47 seg ¡Date prisa y consigue más
              puntos!
            </TextCountDown>
            <ListHeader>
              <TextPlace>Posición</TextPlace>
              <TextName>Nombre</TextName>
              <TextPoints>Bonus</TextPoints>
            </ListHeader>{" "}
            {listRanking.slice(0, 8).map((item, index) => {
              return (
                <ListBody key={item.id}>
                  <ListContent>
                    <SpanPlace>{index + 1}</SpanPlace>
                    <SpanDirection />
                    <SpanName>{item.name}</SpanName>
                    <SpanPoints>+{item.points}</SpanPoints>
                  </ListContent>
                </ListBody>
              );
            })}
            <ListFooter>
              <FooterName>Tu</FooterName>
              <FooterInfo>
                Necesitas 4358 puntos más para subir al puesto #8
              </FooterInfo>
            </ListFooter>
          </ContentRankingInfo>
        </ContentBody>
      </ContainerBodyRanking>
      <ContainerHint>
        <span>
          Las posiciones están calculadas con los puntos conseguidos esta
          semana.
        </span>
        <br />
        <span>Los regalos y bonus no cuentan.</span>
      </ContainerHint>
    </RankingContainer>
  );
};

export default Ranking;
