import React, { useEffect, useState } from "react";
import {
  FormSection,
  FormCard,
  FormTitle,
  FormWrapper,
  TextHandleTab,
} from "../index";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { authRegister, getListCountri } from "../../../store/actions/auth";
import { useNavigate } from "react-router-dom";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
import StepFive from "./StepFive";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [step, setStep] = useState(0);
  const [codePhone, setCodePhone] = useState(false);
  const [errorRegister, setErrorRegister] = useState({
    errorGender: "",
    errorName: "",
    errorEmail: "",
    errorPassword: "",
    errorConfirmPassword: "",
    errorPhone: "",
    errorCountry: "",
    errorTerms: "",
    errorBirthdate: "",
    errorOtp: "",
  });

  const [credential, setCredential] = useState({
    email: "",
    password: "",
    password_confirmation: "",
    name: "",
    gender: "",
    phone: "",
    country_id: "",
    birthdate: "",
    otp: "",
    terms: false,
  });

  const messageVariants = {
    hidden: { y: 30, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { delay: 0.1, duration: 0.2 } },
  };

  const handleOnChange = ({ target }) => {
    const { name, value } = target;
    setCredential((state) => ({ ...state, [name]: value }));
  };

  useEffect(() => {
    dispatch(getListCountri());
  }, []);

  const handleRegister = async (setIsLoading) => {
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
      setStep(4);
      setCredential({
        email: "",
        password: "",
        password_confirmation: "",
        name: "",
        gender: "",
        phone: "",
        country_id: "",
        birthdate: "",
        otp: "",
        terms: false,
      });
      setErrorRegister({
        errorGender: "",
        errorName: "",
        errorEmail: "",
        errorPassword: "",
        errorConfirmPassword: "",
        errorPhone: "",
        errorCountry: "",
        errorTerms: "",
        errorBirthdate: "",
        errorOtp: "",
      });
    } else {
      if (response.message === "El email ya se encuentra registrado") {
        setStep(0);
        setErrorRegister((prev) => ({
          ...prev,
          errorEmail: "El email ya se encuentra registrado",
        }));
      }
    }
    setIsLoading(false);
  };

  return (
    <FormSection>
      <FormCard>
        <FormWrapper
          as={motion.div}
          variants={messageVariants}
          initial="hidden"
          animate="animate"
        >
          {step === 0 ? (
            <FormTitle>Registrate</FormTitle>
          ) : step === 1 ? (
            <FormTitle>Presentate</FormTitle>
          ) : step === 4 ? (
            <FormTitle>Registro éxitoso</FormTitle>
          ) : (
            <FormTitle>Verificación</FormTitle>
          )}
          {step === 0 && (
            <StepOne
              handleOnChange={handleOnChange}
              credential={credential}
              errorRegister={errorRegister}
              setStep={setStep}
              setErrorRegister={setErrorRegister}
            />
          )}
          {step === 1 && (
            <StepTwo
              handleOnChange={handleOnChange}
              credential={credential}
              errorRegister={errorRegister}
              setStep={setStep}
              setErrorRegister={setErrorRegister}
              setCredential={setCredential}
              codePhone={codePhone}
              setCodePhone={setCodePhone}
            />
          )}

          {step === 2 && (
            <StepThree
              handleOnChange={handleOnChange}
              credential={credential}
              errorRegister={errorRegister}
              setStep={setStep}
              setErrorRegister={setErrorRegister}
              setCredential={setCredential}
            />
          )}

          {step === 3 && (
            <StepFour
              handleOnChange={handleOnChange}
              credential={credential}
              errorRegister={errorRegister}
              setStep={setStep}
              setErrorRegister={setErrorRegister}
              setCredential={setCredential}
              step={step}
              handleRegister={handleRegister}
            />
          )}

          {step === 4 && <StepFive />}
        </FormWrapper>

        {step === 0 && (
          <TextHandleTab
            onClick={() => {
              navigate("/login");
            }}
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
        )}
      </FormCard>
    </FormSection>
  );
};

export default Register;
