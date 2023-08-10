import React, { useEffect, useState } from "react";
import LayoutWrapper from "../../layout/LayoutWrapper";
import {
  HeaderContent,
  ContainerHeader,
  BodyContent,
} from "../../styles/HomeContent";
import TabsMenu from "../../components/TabsMenu";
import { useDispatch, useSelector } from "react-redux";
import {
  getMyStories,
  getUserData,
  updateCounterMale,
} from "../../store/actions/auth";
import { LoadingSpinner } from "../../components/Loading";
import Profile from "../profile/Profile";
import StartHome from "./StartHome";
import Messages from "../messages/Messages";
import Video from "../video/Index";
import ModalPermission from "../Modal/ModalPermission";
import ModalChannel from "../Modal/ModalChannel";
import ModalBloquedPermission from "../Modal/ModalBloquedPermission";
import Stories from "../stories/Stories";
import UploadStorie from "../stories/UploadStorie";
import Kyc from "../kyc/Kyc";
import Verification from "../kyc/Verification";
import Ranking from "../ranking/Ranking";
import ModalMinutes from "../Modal/ModalMinutes";

const HomeContent = () => {
  const dispatch = useDispatch();
  const [showStories, setShowStories] = useState(false);
  const [showUploadStorie, setShowUploadStorie] = useState(false);
  const [showVerification, setShowVerification] = useState(false);
  const userData = useSelector((state) => state.auth.userData);
  const activeTab = useSelector((state) => state.tabs.activeTab);
  const showVideo = useSelector((state) => state.tabs.showVideo);
  const modalChannel = useSelector((state) => state.modals.modalChannel);
  const modalBloqued = useSelector((state) => state.modals.modalBloqued);
  const modalMinutes = useSelector((state) => state.modals.modalMinutes);
  const modalPermissions = useSelector(
    (state) => state.modals.modalPermissions
  );

  useEffect(() => {
    dispatch(getUserData());
  }, []);

  useEffect(() => {
    dispatch(updateCounterMale(userData.minutes * 60));
    if (userData.gender === "female") {
      dispatch(getMyStories());
    }
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
      {modalMinutes && <ModalMinutes />}
      {showStories && <Stories showStories={setShowStories} />}
      {showUploadStorie && (
        <UploadStorie setShowUploadStorie={setShowUploadStorie} />
      )}
      {showVerification && (
        <Verification setShowVerification={setShowVerification} />
      )}
      <HeaderContent>
        <ContainerHeader>
          <TabsMenu />
        </ContainerHeader>
      </HeaderContent>
      <BodyContent>
        <Video show={showVideo && activeTab === 0 ? "true" : "false"} />
        {activeTab === 0 && !showVideo && (
          <>
            {/* <Kyc setShowVerification={setShowVerification} /> */}
            <StartHome
              setShowStories={setShowStories}
              setShowUploadStorie={setShowUploadStorie}
            />
          </>
        )}
        {activeTab === 1 && <Messages />}
        {activeTab === 2 && <Ranking />}
        {activeTab === 3 && <Profile />}
      </BodyContent>
    </LayoutWrapper>
  );
};

export default HomeContent;
