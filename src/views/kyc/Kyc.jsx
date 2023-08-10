import React from "react";
import {
  AppVerification,
  AppVerificationProcess,
  TextTitle,
  TextDescription,
  AppVerificationImage,
  AppVerificationImageUser,
  AppVerificationBottom,
} from "./index";

const Kyc = ({ setShowVerification }) => {
  return (
    <AppVerification>
      <AppVerificationProcess>
        <TextTitle>Verificación de cuenta personal</TextTitle>
        <TextDescription>
          Para la verificación, necesitaras mostrar sus documentos de identidad
        </TextDescription>
        <AppVerificationImage>
          <AppVerificationImageUser></AppVerificationImageUser>
        </AppVerificationImage>
      </AppVerificationProcess>
      <AppVerificationBottom
        onClick={() => {
          setShowVerification(true);
        }}
      >
        Comenzar verificación
      </AppVerificationBottom>
    </AppVerification>
  );
};

export default Kyc;
