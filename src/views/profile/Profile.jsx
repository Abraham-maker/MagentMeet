import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ProfileContainer,
  ContainerName,
  ParagraphName,
  ContainerIconEdit,
  ContainerPhoto,
  ContainerLogout,
  ButtonLogout,
  ContentPhoto,
  TextContentPhoto,
  InputChange,
  BottomProfile,
  ContainerBottoms,
  Message,
} from "./index";
import {
  uploadPhotoProfile,
  deletePhotoProfile,
  logout,
} from "../../store/actions/auth";
import { motion } from "framer-motion";
import { LoadingSpinner } from "../../components/Loading";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.auth.userData);
  const uploadPhoto = useSelector((state) => state.auth.uploadPhoto);
  const [selectedFile, setSelectedFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const messageVariants = {
    hidden: { y: 30, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { delay: 0.1, duration: 0.2 } },
  };

  const onFilePreview = ({ target }) => {
    const { files } = target;
    setSelectedFile(files[0]);
  };

  const onFileUpload = async () => {
    setIsLoading(true);
    dispatch(uploadPhotoProfile(selectedFile, setIsLoading, setSelectedFile));
  };

  const deletePhotoProfiles = async () => {
    setIsLoading(true);
    dispatch(deletePhotoProfile(setIsLoading));
  };

  return (
    <ProfileContainer>
      <ContainerName>
        <ParagraphName>{userData.name}</ParagraphName>
        <ContainerIconEdit>
          <img src="/assets/svg/edit.svg" alt="" />
        </ContainerIconEdit>
      </ContainerName>
      <ContainerPhoto>
        {userData.profile_photo_path === null && selectedFile === null && (
          <ContentPhoto>
            {isLoading && (
              <LoadingSpinner
                width="30px"
                height="30px"
                color={userData.gender === "male" ? "#fff" : "#e83e8c"}
                background={userData.gender === "male" ? "#1ca5fc" : "#fff"}
                style={{ position: "absolute" }}
              />
            )}
            <InputChange
              type="file"
              accept="image/*"
              onChange={onFilePreview}
            />
            <img src="/assets/svg/user.svg" alt="img" />
            <TextContentPhoto>Sube tu foto</TextContentPhoto>
          </ContentPhoto>
        )}
        {userData.profile_photo_path !== null && selectedFile === null && (
          <ContentPhoto>
            {isLoading && (
              <LoadingSpinner
                width="30px"
                height="30px"
                color={userData.gender === "male" ? "#fff" : "#e83e8c"}
                background={userData.gender === "male" ? "#1ca5fc" : "#fff"}
                style={{ position: "absolute" }}
              />
            )}
            <img
              src={userData.profile_photo_path}
              alt="img"
              style={{ height: "288px", width: "288px" }}
            />
            <ContainerBottoms>
              <BottomProfile>
                <InputChange
                  disabled={isLoading}
                  type="file"
                  accept="image/*"
                  onChange={onFilePreview}
                />
                <img src="/assets/svg/upload.svg" alt="" />
              </BottomProfile>
              <BottomProfile
                onClick={() => {
                  if (!isLoading) {
                    deletePhotoProfiles();
                  }
                }}
              >
                <img src="/assets/svg/delete2.svg" alt="" />
              </BottomProfile>
            </ContainerBottoms>
          </ContentPhoto>
        )}
        {selectedFile !== null && (
          <ContentPhoto>
            {isLoading && (
              <LoadingSpinner
                width="30px"
                height="30px"
                color={userData.gender === "male" ? "#fff" : "#e83e8c"}
                background={userData.gender === "male" ? "#1ca5fc" : "#fff"}
                style={{ position: "absolute" }}
              />
            )}
            <img
              src={URL.createObjectURL(selectedFile)}
              alt=""
              style={{ height: "288px", width: "288px" }}
            />
            <ContainerBottoms>
              <BottomProfile
                onClick={() => {
                  if (!isLoading) {
                    onFileUpload();
                  }
                }}
              >
                <img src="/assets/svg/done.svg" alt="" />
              </BottomProfile>
              <BottomProfile
                onClick={() => {
                  setSelectedFile(null);
                }}
              >
                <img src="/assets/svg/delete.svg" alt="" />
              </BottomProfile>
            </ContainerBottoms>
          </ContentPhoto>
        )}
      </ContainerPhoto>
      {Object.entries(uploadPhoto).length !== 0 &&
        uploadPhoto.message ===
          "La foto de perfil no debe tener más de 1024kb" && (
          <Message
            $error
            as={motion.div}
            variants={messageVariants}
            initial="hidden"
            animate="animate"
          >
            {uploadPhoto.message}
          </Message>
        )}
      {Object.entries(uploadPhoto).length !== 0 &&
        uploadPhoto.status === "Success" && (
          <Message
            as={motion.div}
            variants={messageVariants}
            initial="hidden"
            animate="animate"
          >
            ¡Foto de perfil actualizada!
          </Message>
        )}
      <ContainerLogout>
        <ButtonLogout
          onClick={() => {
            navigate("/login");
            dispatch(logout());
          }}
        >
          <img src="/assets/svg/logout.svg" alt="img" />
        </ButtonLogout>
      </ContainerLogout>
    </ProfileContainer>
  );
};

export default Profile;
