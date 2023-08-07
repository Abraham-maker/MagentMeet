import React, { useEffect } from "react";
import LayoutWrapper from "../../layout/LayoutWrapper";
import {
  HeaderContent,
  ContainerHeader,
  BodyContent,
} from "../../styles/HomeContent";
import TabsMenu from "../../components/TabsMenu";
import { useDispatch, useSelector } from "react-redux";
import { getUserData, updateCounterMale } from "../../store/actions/auth";
import { LoadingSpinner } from "../../components/Loading";
import Profile from "../profile/Profile";
import StartHome from "./StartHome";
import Messages from "../messages/Messages";
import Video from "../video/Index";
import ModalPermission from "../Modal/ModalPermission";
import ModalChannel from "../Modal/ModalChannel";
import ModalBloquedPermission from "../Modal/ModalBloquedPermission";

const HomeContent = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.auth.userData);
  const activeTab = useSelector((state) => state.tabs.activeTab);
  const showVideo = useSelector((state) => state.tabs.showVideo);
  const modalChannel = useSelector((state) => state.modals.modalChannel);
  const modalBloqued = useSelector((state) => state.modals.modalBloqued);
  const modalPermissions = useSelector(
    (state) => state.modals.modalPermissions
  );

  useEffect(() => {
    dispatch(getUserData());
  }, []);

  useEffect(() => {
    dispatch(updateCounterMale(userData.minutes * 60));
  }, [userData]);

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
      {modalPermissions && <ModalPermission />}
      {modalChannel && <ModalChannel />}
      {modalBloqued && <ModalBloquedPermission />}

      <HeaderContent>
        <ContainerHeader>
          <TabsMenu />
        </ContainerHeader>
      </HeaderContent>
      <BodyContent>
        <Video show={showVideo && activeTab === 0 ? "true" : "false"} />
        {activeTab === 0 && !showVideo && <StartHome />}
        {activeTab === 1 && <Messages />}
        {activeTab === 2 && <>RANKING</>}
        {activeTab === 3 && <Profile />}
      </BodyContent>
    </LayoutWrapper>
  );
};

export default HomeContent;
