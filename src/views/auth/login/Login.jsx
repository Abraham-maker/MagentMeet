import React, { useState } from "react";
import {
  FormSection,
  FormCard,
  FormTitle,
  FormWrapper,
  ContainerInput,
  FormLabel,
  FormInput,
  FormButton,
  TextHandleTab,
  FormMessage,
} from "../index";
import { validateFormLogin } from "../ValidateAuth";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { authLogin } from "../../../store/actions/auth";
import { LoadingSpinner } from "../../../components/Loading";

const Login = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [credential, setCredential] = useState({ email: "", password: "" });
  const [errorAuth, setErrorAuth] = useState({
    emailError: "",
    passwordError: "",
  });

  const messageVariants = {
    hidden: { y: 30, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { delay: 0.1, duration: 0.2 } },
  };

  const formData = [
    {
      label: "Email:",
      name: "email",
      type: "email",
      value: credential.email,
      error: errorAuth.emailError,
      onChange: (e) => handleOnChange(e),
      onFocus: () =>
        setErrorAuth(() => ({
          emailError: "",
          passwordError: "",
        })),
    },
    {
      label: "Contraseña:",
      name: "password",
      type: "password",
      value: credential.password,
      error: errorAuth.passwordError,
      onChange: (e) => handleOnChange(e),
      onFocus: () =>
        setErrorAuth(() => ({
          emailError: "",
          passwordError: "",
        })),
    },
  ];

  const handleOnChange = ({ target }) => {
    const { name, value } = target;
    setCredential((state) => ({ ...state, [name]: value }));
  };

  const handleLogin = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    const isValid = validateFormLogin(
      credential.email,
      credential.password,
      setErrorAuth
    );

    if (isValid) {
      const response = await dispatch(
        authLogin(credential.email, credential.password)
      );
      if (response.status === "Success") {
        setSuccess(true);
        setErrorAuth(() => ({
          emailError: "",
          passwordError: "",
        }));
        setCredential(() => ({
          email: "",
          password: "",
        }));
        setTimeout(() => {
          setSuccess(false);
        }, 3000);
      } else {
        if (response.message === "El email no existe") {
          setErrorAuth((state) => ({
            ...state,
            emailError: "El email no existe",
          }));
        } else if (response.message === "La contraseña es incorrecta") {
          setErrorAuth((state) => ({
            ...state,
            passwordError: "La contraseña es incorrecta",
          }));
        }
      }
    }
    setIsLoading(false);
  };

  return (
    <FormSection>
      <FormCard
        as={motion.div}
        variants={messageVariants}
        initial="hidden"
        animate="animate"
      >
        <FormWrapper onSubmit={handleLogin}>
          <FormTitle>iniciar sesión</FormTitle>
          {formData.map((prev, index) => {
            return (
              <ContainerInput key={index}>
                <FormLabel>{prev.label}</FormLabel>
                <FormInput
                  onChange={prev.onChange}
                  onFocus={prev.onFocus}
                  type={prev.type}
                  name={prev.name}
                  border={
                    errorAuth.emailError !== "" ||
                    errorAuth.passwordError !== ""
                      ? "rgb(255, 51, 51)"
                      : "#cfcfcf"
                  }
                  value={prev.value}
                />
                {errorAuth.emailError !== "" ||
                errorAuth.passwordError !== "" ? (
                  <FormMessage
                    $error
                    as={motion.div}
                    variants={messageVariants}
                    initial="hidden"
                    animate="animate"
                  >
                    {prev.error}
                  </FormMessage>
                ) : (
                  false
                )}
              </ContainerInput>
            );
          })}
          <FormButton
            disabled={isLoading}
            margintop="20px"
            border={"#4bafe1"}
            color={"#fff"}
            height="45px"
            width="100%"
            fontSize="16px"
          >
            {isLoading ? (
              <LoadingSpinner
                width="30px"
                height="30px"
                color={"#fff"}
                background={"#4bafe1"}
              />
            ) : (
              <span>Continuar</span>
            )}
          </FormButton>
        </FormWrapper>
        <TextHandleTab
          color={"rgba(8, 42, 62, 0.75)"}
          fontSize="16px"
          selected="none"
          marginbottom="20px"
        >
          ¿No Tienes Cuenta?,{" "}
          <TextHandleTab color={"rgba(57, 128, 192,1)"}>
            Registrate
          </TextHandleTab>
        </TextHandleTab>
        {success && (
          <FormMessage
            as={motion.div}
            variants={messageVariants}
            initial="hidden"
            animate="animate"
          >
            Inicio de sesión exitoso
          </FormMessage>
        )}
      </FormCard>
    </FormSection>
  );
};

export default Login;
