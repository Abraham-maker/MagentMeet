import React, { useEffect } from "react";
import LayoutWrapper from "../../layout/LayoutWrapper";
import {
  HeaderContent,
  ContainerHeader,
  BodyContent,
} from "../../styles/HomeContent";
import TabsMenu from "../../components/TabsMenu";
import { useDispatch, useSelector } from "react-redux";
import { getUserData } from "../../store/actions/auth";
import { LoadingSpinner } from "../../components/Loading";
import Profile from "../profile/Profile";

const HomeContent = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.auth.userData);
  const activeTab = useSelector((state) => state.tabs.activeTab);

  useEffect(() => {
    dispatch(getUserData());
  }, []);

  if (Object.entries(userData).length === 0) {
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
    <LayoutWrapper>
      <HeaderContent>
        <ContainerHeader>
          <TabsMenu />
        </ContainerHeader>
      </HeaderContent>
      <BodyContent>
        {activeTab === 0 && <>HOME</>}
        {activeTab === 1 && <>MESSAGES</>}
        {activeTab === 2 && <>RANKING</>}
        {activeTab === 3 && <Profile />}
      </BodyContent>
    </LayoutWrapper>
  );
};

export default HomeContent;
