import React, { useState, useEffect } from "react";
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
  BottomEditName,
} from "./index";
import {
  uploadPhotoProfile,
  deletePhotoProfile,
  logout,
  editProfile,
  editPassword,
} from "../../store/actions/auth";
import { motion } from "framer-motion";
import { LoadingSpinner } from "../../components/Loading";
import { useNavigate } from "react-router-dom";
import EditUser from "./EditUser";
import { emailRegex } from "../../environment/constans";
import { ContainerInput, FormInputName, FormMessage } from "../auth";

const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.auth.userData);
  const uploadPhoto = useSelector((state) => state.auth.uploadPhoto);
  const [selectedFile, setSelectedFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingName, setIsLoadingName] = useState(false);
  const [success, setSuccess] = useState(false);
  const [editName, setEditName] = useState(false);
  const [errors, setErrors] = useState({
    errorEmail: "",
    errorName: "",
    errorPassword: "",
    errorPasswordConfirm: "",
  });
  const [infoUser, setInfoUser] = useState({
    name: userData.name,
    email: userData.email,
    password_old: "",
    password: "",
    password_confirmation: "",
  });

  const handleOnChange = ({ target }) => {
    const { name, value } = target;
    setInfoUser((state) => ({ ...state, [name]: value }));
  };

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

  useEffect(() => {
    if (success.status === 200) {
      setTimeout(() => {
        setSuccess(false);
      }, 2500);
    }
  }, [success]);

  const handleEditProfile = async (setIsLoading, setSuccess) => {
    let isValid = true;

    if (infoUser.email.length === 0) {
      isValid = false;
      setErrors((prevState) => ({
        ...prevState,
        errorEmail: "Campo requerido",
      }));
      setIsLoading(false);
    } else if (infoUser.email.length < 3) {
      isValid = false;
      setErrors((prevState) => ({
        ...prevState,
        errorEmail: "El min de caracteres es de 3",
      }));
      setIsLoading(false);
    }

    if (!emailRegex.test(infoUser.email) && infoUser.email.length > 0) {
      isValid = false;
      setErrors((prevState) => ({
        ...prevState,
        errorEmail: "Ingrese un email valido",
      }));
      setIsLoading(false);
    }

    if (infoUser.name.length === 0) {
      isValid = false;
      setErrors((state) => ({ ...state, errorName: "Campo requerido" }));
      setIsLoading(false);
    } else if (infoUser.name.length < 3) {
      isValid = false;
      setErrors((state) => ({
        ...state,
        errorName: "El min de caracteres es de 3",
      }));
      setIsLoading(false);
    }

    if (isValid) {
      await dispatch(
        editProfile(infoUser.name, infoUser.email, setIsLoading, setSuccess)
      );
      setEditName(false);
    }
  };

  const handleUpdatePassword = (setIsLoadingPass, setSuccessPass) => {
    let isValid = true;
    if (infoUser.password.length === 0) {
      isValid = false;
      setErrors((state) => ({
        ...state,
        errorPassword: "Campo requerido",
      }));
      setIsLoadingPass(false);
    } else if (infoUser.password.length < 6) {
      isValid = false;
      setErrors((state) => ({
        ...state,
        errorPassword: "El min de caracteres es de 6",
      }));
      setIsLoadingPass(false);
    }

    if (infoUser.password_confirmation.length === 0) {
      isValid = false;
      setErrors((state) => ({
        ...state,
        errorPasswordConfirm: "Campo requerido",
      }));
      setIsLoadingPass(false);
    } else if (infoUser.password_confirmation.length < 6) {
      isValid = false;
      setErrors((state) => ({
        ...state,
        errorPasswordConfirm: "El min de caracteres es de 6",
      }));
      setIsLoadingPass(false);
    }

    if (infoUser.password.trim() !== infoUser.password_confirmation.trim()) {
      isValid = false;
      setErrors((state) => ({
        ...state,
        errorPassword: "Las contraseñas no coinciden",
      }));
      setIsLoadingPass(false);
    }

    if (isValid) {
      dispatch(
        editPassword(
          infoUser.password_old,
          infoUser.password,
          infoUser.password_confirmation,
          setIsLoadingPass,
          setSuccessPass
        )
      );
    }
  };

  return (
    <ProfileContainer>
      <ContainerName>
        {editName ? (
          <ContainerInput>
            <FormInputName
              placeholder="Nuevo Nombre"
              type={"text"}
              onChange={handleOnChange}
              name={"name"}
              border={"#000"}
            />
            <BottomEditName
              onClick={() => {
                setIsLoadingName(true);
                handleEditProfile(setIsLoadingName, setSuccess);
              }}
              color="#fff"
              background={userData.gender === "male" ? "#1ca5fc" : "#e83e8c"}
            >
              {isLoadingName ? "LOADING" : "Guardar"}
            </BottomEditName>
            {success.status === 200 && (
              <FormMessage
                as={motion.div}
                variants={messageVariants}
                initial="hidden"
                animate="animate"
              >
                {success.message}
              </FormMessage>
            )}
            {errors.errorName !== "" ? (
              <FormMessage
                $error
                as={motion.div}
                variants={messageVariants}
                initial="hidden"
                animate="animate"
              >
                {errors.errorName}
              </FormMessage>
            ) : (
              false
            )}
          </ContainerInput>
        ) : (
          <>
            {" "}
            <ParagraphName>{userData.name}</ParagraphName>{" "}
          </>
        )}
        <ContainerIconEdit
          onClick={() => {
            setEditName(!editName);
          }}
        >
          {editName ? (
            <img src="/assets/svg/close.svg" alt="" />
          ) : (
            <img src="/assets/svg/edit.svg" alt="" />
          )}
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

      <EditUser
        handleOnChange={handleOnChange}
        infoUser={infoUser}
        handleEditProfile={handleEditProfile}
        errors={errors}
        handleUpdatePassword={handleUpdatePassword}
        setErrors={setErrors}
      />
    </ProfileContainer>
  );
};

export default Profile;
