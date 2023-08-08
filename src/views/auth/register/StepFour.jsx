import React, { useEffect, useState } from "react";
import {
  ContainerInput,
  FormButton,
  FormLabel,
  FormInput,
  ViewPassword,
  FormMessage,
  ViewPasswordContainer,
} from "../index";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import {
  codeVerification,
  sendCodeVerification,
} from "../../../store/actions/auth";
import { LoadingSpinner } from "../../../components/Loading";

const StepFour = ({
  handleOnChange,
  credential,
  errorRegister,
  setStep,
  setErrorRegister,
  setCredential,
  step,
  handleRegister,
}) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingSend, setIsLoadingSend] = useState(false);
  const [intervalID, setIntervalID] = useState(null);
  const [contador, setContador] = useState(5 * 60);
  const [tiempoRestante, setTiempoRestante] = useState(contador);
  const [success, setSuccess] = useState(false);

  const minutos = Math.floor(tiempoRestante / 60);
  const segundos = tiempoRestante % 60;

  const messageVariants = {
    hidden: { y: 30, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { delay: 0.1, duration: 0.2 } },
  };

  useEffect(() => {
    if (step === 3) {
      const interval = setInterval(() => {
        setTiempoRestante((tiempoRestante) => tiempoRestante - 1);
      }, 1000);
      setIntervalID(interval);
    }
  }, []);

  if (segundos === 0 && minutos === 0) {
    clearInterval(intervalID);
  }

  const reloadCounter = () => {
    setIsLoading(true);
    handleCode();
    setTiempoRestante(0.1 * 60);
    const interval = setInterval(() => {
      setTiempoRestante((tiempoRestante) => tiempoRestante - 1);
    }, 1000);
    setIntervalID(interval);
  };

  const handleCode = async () => {
    setIsLoading(true);
    dispatch(sendCodeVerification(credential.email, setIsLoading, setSuccess));
  };

  const handleVerificationCode = () => {
    setIsLoadingSend(true);
    let isValid = true;
    if (credential.otp.length === 0) {
      isValid = false;
      setErrorRegister((state) => ({
        ...state,
        errorOtp: "Complete este campo",
      }));
      setIsLoadingSend(false);
    } else if (credential.otp.length < 4) {
      isValid = false;
      setErrorRegister((state) => ({
        ...state,
        errorOtp: "Código incompleto",
      }));
      setIsLoadingSend(false);
    }

    if (isValid) {
      dispatch(
        codeVerification(
          credential.email,
          credential.otp,
          setErrorRegister,
          setIsLoadingSend,
          setSuccess
        )
      );
    }
  };

  useEffect(() => {
    if (success.message === "Código de verificado con éxito") {
      handleRegister(setIsLoading);
    }
  }, [success]);

  useEffect(() => {
    if (success.message === "Código de verificación enviado con éxito") {
      setTimeout(() => {
        setSuccess("");
      }, 2500);
    }
  }, [success]);

  return (
    <>
      <FormLabel style={{ marginTop: "20px", fontSize: "18px" }}>
        *Ingrese el codigo de verificación para continuar*
      </FormLabel>

      <ContainerInput>
        <FormLabel>Código:</FormLabel>
        <FormInput
          placeholder="Ingrese el código de verificación"
          maxLength={4}
          type={"text"}
          name={"otp"}
          onChange={(e) => handleOnChange(e)}
          onFocus={() => {
            setErrorRegister((state) => ({ ...state, errorOtp: "" }));
          }}
          border={
            errorRegister.errorOtp !== "" ? "rgb(255, 51, 51)" : "#cfcfcf"
          }
          value={credential.otp}
        />
        {errorRegister.errorOtp !== "" ? (
          <FormMessage
            $error
            as={motion.div}
            variants={messageVariants}
            initial="hidden"
            animate="animate"
          >
            {errorRegister.errorOtp}
          </FormMessage>
        ) : (
          false
        )}
      </ContainerInput>

      <FormButton
        disabled={tiempoRestante !== 0}
        onClick={reloadCounter}
        margintop="20px"
        border={tiempoRestante !== 0 ? "#ccc" : "#4bafe1"}
        color={"#fff"}
        height="45px"
        width="100%"
        fontSize="16px"
        style={{ cursor: tiempoRestante !== 0 ? "default" : "pointer" }}
      >
        {isLoading ? (
          <LoadingSpinner
            width="30px"
            height="30px"
            color={"#fff"}
            background={"#4bafe1"}
          />
        ) : (
          <span>
            Reenviar código{" "}
            {tiempoRestante !== 0 && (
              <>
                <span>{minutos < 10 ? `0${minutos}` : minutos}</span>:
                <span>{segundos < 10 ? `0${segundos}` : segundos}</span>
              </>
            )}
          </span>
        )}
      </FormButton>
      <FormButton
        onClick={handleVerificationCode}
        margintop="20px"
        border={"#4bafe1"}
        color={"#fff"}
        height="45px"
        width="100%"
        fontSize="16px"
      >
        {isLoadingSend ? (
          <LoadingSpinner
            width="30px"
            height="30px"
            color={"#fff"}
            background={"#4bafe1"}
          />
        ) : (
          <span>Validar</span>
        )}
      </FormButton>

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
    </>
  );
};

export default StepFour;
