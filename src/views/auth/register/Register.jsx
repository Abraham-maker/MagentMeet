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
  Select,
  Option,
} from "../index";
import { validateFormRegister } from "../ValidateAuth";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { authRegister } from "../../../store/actions/auth";
import { LoadingSpinner } from "../../../components/Loading";

const Register = () => {
  const dispatch = useDispatch();
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorRegister, setErrorRegister] = useState({
    errorGender: "",
    errorName: "",
    errorEmail: "",
    errorPassword: "",
    errorConfirmPassword: "",
  });

  const [credential, setCredential] = useState({
    email: "",
    password: "",
    gender: "",
    name: "",
    password_confirmation: "",
    terms: 0,
  });

  const messageVariants = {
    hidden: { y: 30, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { delay: 0.1, duration: 0.2 } },
  };

  const handleOnChange = ({ target }) => {
    const { name, value } = target;
    setCredential((state) => ({ ...state, [name]: value }));
  };

  const formData = [
    {
      label: "Email:",
      name: "email",
      type: "email",
      value: credential.email,
      error: errorRegister.errorEmail,
      onChange: (e) => handleOnChange(e),
    },
    {
      label: "Nombre:",
      name: "name",
      type: "text",
      value: credential.name,
      error: errorRegister.errorName,
      onChange: (e) => handleOnChange(e),
    },
    {
      label: "Contraseña:",
      name: "password",
      type: "password",
      value: credential.password,
      error: errorRegister.errorPassword,
      onChange: (e) => handleOnChange(e),
    },
    {
      label: "Confirmar contraseña:",
      name: "password_confirmation",
      type: "password",
      value: credential.password_confirmation,
      error: errorRegister.errorConfirmPassword,
      onChange: (e) => handleOnChange(e),
    },
  ];

  const handleRegister = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    const isValid = validateFormRegister(
      credential.email,
      credential.password,
      credential.password_confirmation,
      credential.name,
      credential.gender,
      setErrorRegister
    );

    if (isValid) {
      const response = await dispatch(
        authRegister(
          credential.email,
          credential.gender,
          credential.name,
          credential.password,
          credential.password_confirmation
        )
      );
      if (response.status === "Success") {
        setSuccess(true);
        setCredential({
          email: "",
          password: "",
          gender: "",
          name: "",
          password_confirmation: "",
          terms: 0,
        });
        setErrorRegister({
          errorGender: "",
          errorName: "",
          errorEmail: "",
          errorPassword: "",
          errorConfirmPassword: "",
        });
        setTimeout(() => {
          setSuccess(false);
        }, 3000);
      } else {
        if (response.message === "El email ya se encuentra registrado") {
          setErrorRegister((prev) => ({
            ...prev,
            errorEmail: "El email ya se encuentra registrado",
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
        <FormWrapper onSubmit={handleRegister}>
          <FormTitle>Registrate</FormTitle>
          {formData.map((prev, index) => {
            return (
              <ContainerInput key={index}>
                <FormLabel>{prev.label}</FormLabel>
                <FormInput
                  onChange={prev.onChange}
                  onFocus={() => {
                    setErrorRegister({
                      errorGender: "",
                      errorName: "",
                      errorEmail: "",
                      errorPassword: "",
                      errorConfirmPassword: "",
                    });
                  }}
                  type={prev.type}
                  name={prev.name}
                  border={
                    errorRegister.errorEmail !== "" ||
                    errorRegister.errorPassword !== "" ||
                    errorRegister.errorName !== "" ||
                    errorRegister.errorConfirmPassword !== ""
                      ? "rgb(255, 51, 51)"
                      : "#cfcfcf"
                  }
                  value={prev.value}
                />
                {errorRegister.errorEmail !== "" ||
                errorRegister.errorPassword !== "" ||
                errorRegister.errorName !== "" ||
                errorRegister.errorConfirmPassword !== "" ? (
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
          <div style={{ width: "100%", marginTop: "20px" }}>
            <FormLabel>Género:</FormLabel>
            <Select
              name="gender"
              marginbottom="10px"
              border={"#cfcfcf"}
              name="gender"
              onChange={handleOnChange}
              defaultValue={credential.gender}
              onFocus={() => {
                setErrorRegister({
                  errorGender: "",
                  errorName: "",
                  errorEmail: "",
                  errorPassword: "",
                  errorConfirmPassword: "",
                });
              }}
            >
              <Option value="">Género</Option>
              <Option value="male">Hombre</Option>
              <Option value="female">Mujer</Option>
            </Select>
            {errorRegister.errorGender !== "" ? (
              <FormMessage
                $error
                as={motion.div}
                variants={messageVariants}
                initial="hidden"
                animate="animate"
              >
                {errorRegister.errorGender}
              </FormMessage>
            ) : (
              false
            )}
          </div>
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
          ¿Ya Tienes Cuenta?,{" "}
          <TextHandleTab color={"rgba(57, 128, 192,1)"}>
            Inicia sesión
          </TextHandleTab>
        </TextHandleTab>
        {success && (
          <FormMessage
            as={motion.div}
            variants={messageVariants}
            initial="hidden"
            animate="animate"
          >
            Su registro fue exitoso
          </FormMessage>
        )}
      </FormCard>
    </FormSection>
  );
};

export default Register;
