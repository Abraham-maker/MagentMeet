import React, { useState, useEffect } from "react";
import {
  EditProfile,
  EditProfileButton,
  BlackOut,
  ContentConfigContainer,
  ListContainersEdit,
  ItemEdit,
  ItemEditHeader,
  Span,
  ProfileBottomSetting,
  ProfileBottomSettingGroup,
  Button,
  EditBody,
  ButtonGroupItem,
  ContainerBodyPersonal,
  ContainerBodyPassword,
} from "./index";
import { useDispatch, useSelector } from "react-redux";
import {
  ContainerInput,
  FormInput,
  FormLabel,
  FormMessage,
} from "../auth/index";
import { motion } from "framer-motion";

const EditUser = ({
  handleOnChange,
  infoUser,
  handleEditProfile,
  errors,
  handleUpdatePassword,
  setErrors,
}) => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.auth.userData);
  const [showConfig, setShowConfig] = useState(false);
  const [showEditPersonal, setShowEditPersonal] = useState(false);
  const [showEditPassword, setShowEditPasswrod] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingPass, setIsLoadingPass] = useState(false);
  const [success, setSuccess] = useState(false);
  const [successPass, setSuccessPass] = useState(false);

  const messageVariants = {
    hidden: { y: 30, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { delay: 0.1, duration: 0.2 } },
  };

  useEffect(() => {
    if (success.status === 200) {
      setTimeout(() => {
        setSuccess(false);
      }, 2500);
    }
  }, [success]);

  useEffect(() => {
    if (successPass.status === 200) {
      setTimeout(() => {
        setSuccessPass(false);
      }, 2500);
    }
  }, [successPass]);

  return (
    <>
      <BlackOut showConfig={showConfig} />
      <EditProfile>
        <EditProfileButton
          onClick={() => {
            setShowConfig(!showConfig);
            setShowEditPasswrod(false);
            setShowEditPersonal(false);
          }}
        >
          {showConfig ? (
            <>
              <img src="/assets/svg/arrow-down-profile.svg" alt="" />
            </>
          ) : (
            <>
              <img src="/assets/svg/config-profile.svg" alt="" />
            </>
          )}
        </EditProfileButton>

        {showConfig ? (
          <ContentConfigContainer>
            <ListContainersEdit>
              <ItemEdit>
                <ItemEditHeader
                  onClick={() => {
                    setShowEditPasswrod(false);
                    setShowEditPersonal(!showEditPersonal);
                  }}
                  hover={userData.gender === "male" ? "#1987cd" : "#"}
                  color={
                    showEditPersonal
                      ? userData.gender === "male"
                        ? "#1987cd"
                        : "#e83e8c"
                      : "#182337"
                  }
                >
                  <Span>
                    <img src="/assets/svg/personal-profile.svg" alt="" />
                  </Span>
                  <Span marginLeft="16px">Información personal</Span>
                  {showEditPersonal ? (
                    <img
                      src="/assets/svg/arrow-up-profile.svg"
                      alt=""
                      style={{ marginLeft: "20px" }}
                    />
                  ) : (
                    <img
                      src="/assets/svg/arrow-down-profile.svg"
                      alt=""
                      style={{ marginLeft: "20px" }}
                    />
                  )}
                </ItemEditHeader>
              </ItemEdit>
              {showEditPersonal && (
                <EditBody>
                  <ContainerBodyPersonal>
                    <ContainerInput>
                      <FormLabel>Email:</FormLabel>
                      <FormInput
                        onFocus={() => {
                          setErrors((state) => ({
                            ...state,
                            errorEmail: "",
                          }));
                        }}
                        onChange={handleOnChange}
                        placeholder="Cambiar de email"
                        type={"email"}
                        name={"email"}
                        border={"#cfcfcf"}
                        value={infoUser.email}
                      />
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
                      {errors.errorEmail !== "" ? (
                        <FormMessage
                          $error
                          as={motion.div}
                          variants={messageVariants}
                          initial="hidden"
                          animate="animate"
                        >
                          {errors.errorEmail}
                        </FormMessage>
                      ) : (
                        false
                      )}
                    </ContainerInput>
                  </ContainerBodyPersonal>
                </EditBody>
              )}
              <ItemEdit style={{ marginTop: "20px" }}>
                <ItemEditHeader
                  onClick={() => {
                    setShowEditPasswrod(!showEditPassword);
                    setShowEditPersonal(false);
                  }}
                  color={
                    showEditPassword
                      ? userData.gender === "male"
                        ? "#1987cd"
                        : "#e83e8c"
                      : "#182337"
                  }
                  hover={userData.gender === "male" ? "#1987cd" : "#e83e8c"}
                >
                  <Span>
                    <img src="/assets/svg/huella-profile.svg" alt="" />
                  </Span>
                  <Span marginLeft="16px">Cambiar contraseña</Span>
                  {showEditPassword ? (
                    <img
                      src="/assets/svg/arrow-up-profile.svg"
                      alt=""
                      style={{ marginLeft: "20px" }}
                    />
                  ) : (
                    <img
                      src="/assets/svg/arrow-down-profile.svg"
                      alt=""
                      style={{ marginLeft: "20px" }}
                    />
                  )}
                </ItemEditHeader>
              </ItemEdit>
              {showEditPassword && (
                <EditBody>
                  <ContainerBodyPassword>
                    <ContainerInput>
                      <FormLabel>Contraseña:</FormLabel>
                      <FormInput
                        placeholder="Contraseña Actual"
                        type={"password"}
                        onChange={handleOnChange}
                        name={"password_old"}
                        border={"#cfcfcf"}
                      />
                    </ContainerInput>
                    <ContainerInput>
                      <FormLabel>Nueva contraseña:</FormLabel>
                      <FormInput
                        onFocus={() => {
                          setErrors((state) => ({
                            ...state,
                            errorPassword: "",
                          }));
                        }}
                        placeholder="Nueva contraseña"
                        type={"password"}
                        onChange={handleOnChange}
                        name={"password"}
                        border={"#cfcfcf"}
                      />
                      {errors.errorPassword !== "" ? (
                        <FormMessage
                          $error
                          as={motion.div}
                          variants={messageVariants}
                          initial="hidden"
                          animate="animate"
                        >
                          {errors.errorPassword}
                        </FormMessage>
                      ) : (
                        false
                      )}
                    </ContainerInput>
                    <ContainerInput>
                      <FormLabel>Confirmar contraseña:</FormLabel>
                      <FormInput
                        onFocus={() => {
                          setErrors((state) => ({
                            ...state,
                            errorPasswordConfirm: "",
                          }));
                        }}
                        placeholder="Confirmar contraseña"
                        type={"password"}
                        onChange={handleOnChange}
                        name={"password_confirmation"}
                        border={"#cfcfcf"}
                      />
                      {errors.errorPasswordConfirm !== "" ? (
                        <FormMessage
                          $error
                          as={motion.div}
                          variants={messageVariants}
                          initial="hidden"
                          animate="animate"
                        >
                          {errors.errorPasswordConfirm}
                        </FormMessage>
                      ) : (
                        false
                      )}
                    </ContainerInput>
                    {successPass.status === 200 && (
                      <FormMessage
                        as={motion.div}
                        variants={messageVariants}
                        initial="hidden"
                        animate="animate"
                      >
                        {successPass.message}
                      </FormMessage>
                    )}
                  </ContainerBodyPassword>
                </EditBody>
              )}
            </ListContainersEdit>

            <ProfileBottomSetting>
              <ProfileBottomSettingGroup>
                {showEditPersonal && userData.email !== "" && (
                  <>
                    <ButtonGroupItem>
                      <Button
                        disabled={isLoading}
                        onClick={() => {
                          setIsLoading(true);
                          handleEditProfile(setIsLoading, setSuccess);
                        }}
                        $type="save"
                        color={userData.gender === "male" ? "#fff" : "#e83e8c"}
                        background={
                          userData.gender === "male" ? "#1ca5fc" : "#fff"
                        }
                      >
                        {isLoading ? "LOADING..." : "Guardar"}
                      </Button>
                    </ButtonGroupItem>
                    <ButtonGroupItem style={{ marginLeft: "20px" }}>
                      <Button
                        onClick={() => {
                          setShowEditPersonal(false);
                        }}
                        $type="cancel"
                        color={
                          userData.gender === "male" ? "#1ca5fc" : "#e83e8c"
                        }
                        background={"transparent"}
                      >
                        Cancelar
                      </Button>
                    </ButtonGroupItem>
                  </>
                )}
                {showEditPassword && infoUser.password_old !== "" && (
                  <>
                    <ButtonGroupItem>
                      <Button
                        disabled={isLoadingPass}
                        onClick={() => {
                          setIsLoadingPass(true);
                          handleUpdatePassword(
                            setIsLoadingPass,
                            setSuccessPass
                          );
                        }}
                        $type="save"
                        color={userData.gender === "male" ? "#fff" : "#e83e8c"}
                        background={
                          userData.gender === "male" ? "#1ca5fc" : "#fff"
                        }
                      >
                        Guardar
                      </Button>
                    </ButtonGroupItem>
                    <ButtonGroupItem style={{ marginLeft: "20px" }}>
                      <Button
                        $type="cancel"
                        color={
                          userData.gender === "male" ? "#1ca5fc" : "#e83e8c"
                        }
                        background={"transparent"}
                      >
                        Cancelar
                      </Button>
                    </ButtonGroupItem>
                  </>
                )}
              </ProfileBottomSettingGroup>
            </ProfileBottomSetting>
          </ContentConfigContainer>
        ) : (
          false
        )}
      </EditProfile>
    </>
  );
};

export default EditUser;
