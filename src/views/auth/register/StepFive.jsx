import React from "react";
import { FormButton, FormLabel } from "../index";
import { useNavigate } from "react-router-dom";

const StepFive = () => {
  const navigate = useNavigate();
  return (
    <>
      <FormLabel
        style={{
          marginTop: "20px",
          fontSize: "16px",
        }}
      >
        Se ha registrado exitosamente en la plataforma de MagentMeet.
      </FormLabel>
      <FormLabel
        style={{
          fontSize: "16px",
          width: "80%",
          textAlign: "center",
        }}
      >
        Para disfrutar de nuestro servicio de videochat proceda a iniciar sesión
      </FormLabel>
      <FormButton
        onClick={() => {
          navigate("/login");
        }}
        margintop="20px"
        border={"#4bafe1"}
        color={"#fff"}
        height="45px"
        width="100%"
        fontSize="16px"
      >
        <span>Ir al login</span>
      </FormButton>
    </>
  );
};

export default StepFive;
