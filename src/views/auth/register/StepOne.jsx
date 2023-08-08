import React, { useState } from "react";
import {
  ContainerInput,
  FormButton,
  FormLabel,
  FormInput,
  ViewPassword,
  FormMessage,
  ViewPasswordContainer,
} from "../index";
import { validateFormRegisterOne } from "../ValidateAuth";
import { motion } from "framer-motion";

const StepOne = ({
  handleOnChange,
  credential,
  errorRegister,
  setStep,
  setErrorRegister,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const messageVariants = {
    hidden: { y: 30, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { delay: 0.1, duration: 0.2 } },
  };

  const handleStepOne = () => {
    const isValid = validateFormRegisterOne(
      credential.email,
      credential.password,
      credential.password_confirmation,
      credential.name,
      setErrorRegister
    );
    if (isValid) {
      setErrorRegister((state) => ({
        ...state,
        errorName: "",
        errorEmail: "",
        errorPassword: "",
        errorConfirmPassword: "",
      }));
      setStep((prev) => prev + 1);
    }
  };

  return (
    <>
      <ContainerInput>
        <FormLabel>Nombre:</FormLabel>
        <FormInput
          onChange={(e) => handleOnChange(e)}
          onFocus={() => {
            setErrorRegister((state) => ({ ...state, errorName: "" }));
          }}
          type={"text"}
          name={"name"}
          border={
            errorRegister.errorName !== "" ? "rgb(255, 51, 51)" : "#cfcfcf"
          }
          value={credential.name}
        />

        {errorRegister.errorName !== "" ? (
          <FormMessage
            $error
            as={motion.div}
            variants={messageVariants}
            initial="hidden"
            animate="animate"
          >
            {errorRegister.errorName}
          </FormMessage>
        ) : (
          false
        )}
      </ContainerInput>{" "}
      <ContainerInput>
        <FormLabel>Email:</FormLabel>
        <FormInput
          onChange={(e) => handleOnChange(e)}
          onFocus={() => {
            setErrorRegister((state) => ({ ...state, errorEmail: "" }));
          }}
          type={"email"}
          name={"email"}
          border={
            errorRegister.errorEmail !== "" ? "rgb(255, 51, 51)" : "#cfcfcf"
          }
          value={credential.email}
        />
        {errorRegister.errorEmail !== "" ? (
          <FormMessage
            $error
            as={motion.div}
            variants={messageVariants}
            initial="hidden"
            animate="animate"
          >
            {errorRegister.errorEmail}
          </FormMessage>
        ) : (
          false
        )}
      </ContainerInput>
      <ContainerInput>
        <FormLabel>Contraseña:</FormLabel>
        <ViewPassword>
          <ViewPasswordContainer
            onClick={() => {
              setShowPassword(!showPassword);
            }}
          >
            {showPassword ? (
              <img src="/assets/svg/not-visible.svg" alt="" />
            ) : (
              <img src="/assets/svg/eye-visibility.svg" alt="" />
            )}
          </ViewPasswordContainer>
        </ViewPassword>
        <FormInput
          onChange={(e) => handleOnChange(e)}
          onFocus={() => {
            setErrorRegister((state) => ({ ...state, errorPassword: "" }));
          }}
          type={showPassword ? "text" : "password"}
          name={"password"}
          border={
            errorRegister.errorPassword !== "" ? "rgb(255, 51, 51)" : "#cfcfcf"
          }
          value={credential.password}
        />
        {errorRegister.errorPassword !== "" ? (
          <FormMessage
            $error
            as={motion.div}
            variants={messageVariants}
            initial="hidden"
            animate="animate"
          >
            {errorRegister.errorPassword}
          </FormMessage>
        ) : (
          false
        )}
      </ContainerInput>
      <ContainerInput>
        <FormLabel onChange={(e) => handleOnChange(e)}>
          Confirmar contraseña:
        </FormLabel>
        <FormInput
          onChange={(e) => handleOnChange(e)}
          onFocus={() => {
            setErrorRegister((state) => ({
              ...state,
              errorConfirmPassword: "",
            }));
          }}
          type={showPassword ? "text" : "password"}
          name={"password_confirmation"}
          border={
            errorRegister.errorConfirmPassword !== ""
              ? "rgb(255, 51, 51)"
              : "#cfcfcf"
          }
          value={credential.password_confirmation}
        />
        {errorRegister.errorConfirmPassword !== "" ? (
          <FormMessage
            $error
            as={motion.div}
            variants={messageVariants}
            initial="hidden"
            animate="animate"
          >
            {errorRegister.errorConfirmPassword}
          </FormMessage>
        ) : (
          false
        )}
      </ContainerInput>
      <FormButton
        onClick={handleStepOne}
        margintop="20px"
        border={"#4bafe1"}
        color={"#fff"}
        height="45px"
        width="100%"
        fontSize="16px"
      >
        <span>Continuar</span>
      </FormButton>
    </>
  );
};

export default StepOne;
