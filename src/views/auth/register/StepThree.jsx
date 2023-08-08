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
import { sendCodeVerification } from "../../../store/actions/auth";
import { LoadingSpinner } from "../../../components/Loading";

const StepThree = ({
  handleOnChange,
  credential,
  errorRegister,
  setStep,
  setErrorRegister,
  setCredential,
}) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const messageVariants = {
    hidden: { y: 30, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { delay: 0.1, duration: 0.2 } },
  };

  const handleCode = async () => {
    setIsLoading(true);
    dispatch(sendCodeVerification(credential.email, setIsLoading, setSuccess));
  };

  useEffect(() => {
    if (success.status === 200) {
      setTimeout(() => {
        setSuccess("");
        setStep(3);
      }, 2500);
    }
  }, [success]);

  return (
    <>
      <FormLabel style={{ marginTop: "20px", fontSize: "18px" }}>
        *Enviaremos un código de verificación a tu correo electrónico*
      </FormLabel>
      <FormLabel
        style={{
          marginTop: "20px",
          fontSize: "16px",
          width: "80%",
          textAlign: "center",
        }}
      >
        Una vez haya enviado su código tendrá unos 5 minutos antes de que expire
      </FormLabel>
      <FormButton
        onClick={handleCode}
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
          <span>Enviar codigo</span>
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

export default StepThree;
