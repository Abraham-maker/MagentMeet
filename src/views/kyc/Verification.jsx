import React, { useState, useRef, useEffect } from "react";
import {
  VerificationLayout,
  AppVerificationFemaleRecord,
  AppVerificationNavigation,
  AppVerificationBody,
  AppVerificationBottom,
  GroupButtons,
  AppVerificationBottomPhoto,
  ContainerBody,
  ContainerActions,
  ContainerStep,
  MessageSuccess,
  TextFinaly,
} from "./index";
import { useDispatch } from "react-redux";
import {
  handleModalPermission,
  handleModalBloqued,
} from "../../store/actions/modals";
import {
  uploadDocumentUser,
  uploadDocumentUserPassport,
  getUserData,
} from "../../store/actions/auth";
import { motion } from "framer-motion";

const Verification = ({ setShowVerification }) => {
  const dispatch = useDispatch();
  const [verification, setVerification] = useState(false);
  const [step, setStep] = useState(0);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [photoURL, setPhotoURL] = useState(null);
  const [fileImage, setFileImage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [succes, setSuccess] = useState(false);

  const messageVariants = {
    hidden: { y: 30, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { delay: 0.1, duration: 0.2 } },
  };

  const handleVerification = async () => {
    try {
      await dispatch(handleModalPermission());
      setPhotoURL(null);
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
      setVerification(true);
      await dispatch(handleModalPermission());
    } catch (error) {
      await dispatch(handleModalPermission());
      console.log("Error accessing camera:", error);
      if (error.code === 0) {
        dispatch(handleModalBloqued());
      }
    }
  };

  const takePhoto = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;

    const context = canvas.getContext("2d");
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    const photoDataURL = canvas.toDataURL("image/jpeg");
    setPhotoURL(photoDataURL);

    canvas.toBlob((blob) => {
      const file = new File([blob], "photo.jpg", { type: "image/jpeg" });
      setFileImage(file);
    }, "image/jpeg");
  };

  const handleUploadPhoto = async () => {
    if (step === 0) {
      setIsLoading(true);
      const response = await dispatch(uploadDocumentUser(fileImage));
      if (response.status === "Success") {
        setSuccess({ status: 200, message: response.message });
        setPhotoURL(null);
        setFileImage(false);
        setTimeout(() => {
          setSuccess(false);
          setStep(1);
        }, 2500);
      }
    } else if (step === 1) {
      setIsLoading(true);
      const response = await dispatch(uploadDocumentUserPassport(fileImage));
      if (response.status === "Success") {
        setSuccess({ status: 200, message: response.message });
        setPhotoURL(null);
        setFileImage(false);
        setTimeout(() => {
          setSuccess(false);
          setStep(2);
        }, 2500);
      }
    }
    setIsLoading(false);
  };

  useEffect(() => {
    if (step === 2) {
      dispatch(getUserData());
    }
  }, [step]);

  return (
    <VerificationLayout>
      <AppVerificationFemaleRecord>
        <AppVerificationNavigation>
          {verification ? (
            <>
              <ContainerStep step={step === 0 ? "true" : "false"}>
                (1) Sube comprobande del documento
              </ContainerStep>
              <ContainerStep step={step === 1 ? "true" : "false"}>
                (2) Sube foto de su rostro con el documento
              </ContainerStep>
              <ContainerStep step={step === 2 ? "true" : "false"}>
                (3) Finalizamos el proceso
              </ContainerStep>
            </>
          ) : (
            "Ten tu documento de identidad preparado y asegúrate de que tu cara se ve bien y con suficiente luz"
          )}
        </AppVerificationNavigation>

        {step === 0 && (
          <AppVerificationBody
            as={motion.div}
            variants={messageVariants}
            initial="hidden"
            animate="animate"
          >
            <ContainerBody>
              <video
                ref={videoRef}
                autoPlay
                muted
                style={{ display: !photoURL ? "flex" : "none" }}
              />
              <img
                src={photoURL}
                alt="Preview"
                style={{ display: photoURL ? "flex" : "none" }}
              />
              <canvas ref={canvasRef} style={{ display: "none" }} />
            </ContainerBody>
            {succes && (
              <MessageSuccess
                as={motion.div}
                variants={messageVariants}
                initial="hidden"
                animate="animate"
              >
                {succes.message}
              </MessageSuccess>
            )}
          </AppVerificationBody>
        )}

        {step === 1 && (
          <AppVerificationBody
            as={motion.div}
            variants={messageVariants}
            initial="hidden"
            animate="animate"
          >
            <ContainerBody>
              <video
                ref={videoRef}
                autoPlay
                muted
                style={{ display: !photoURL ? "flex" : "none" }}
              />
              <img
                src={photoURL}
                alt="Preview"
                style={{ display: photoURL ? "flex" : "none" }}
              />
              <canvas ref={canvasRef} style={{ display: "none" }} />
            </ContainerBody>
            {succes && (
              <MessageSuccess
                as={motion.div}
                variants={messageVariants}
                initial="hidden"
                animate="animate"
              >
                {succes.message}
              </MessageSuccess>
            )}
          </AppVerificationBody>
        )}

        {step === 2 && (
          <AppVerificationBody
            as={motion.div}
            variants={messageVariants}
            initial="hidden"
            animate="animate"
          >
            {" "}
            <TextFinaly fontsize="24px">Datos cargados con exito</TextFinaly>
            <TextFinaly fontsize="16px">
              Todos sus datos fueron cargados con exito, Estaremos haciendo la
              validacion de los datos en un tiempo aproximado de 24 horas, Luego
              de la revicion podra disfrutar de nuestros servicios
            </TextFinaly>
            <AppVerificationBottomPhoto
              $state="init"
              style={{ marginTop: "70px" }}
              onClick={() => {
                setShowVerification(false);
              }}
            >
              Continuar
            </AppVerificationBottomPhoto>
          </AppVerificationBody>
        )}

        {step !== 2 && (
          <ContainerActions>
            {verification ? (
              <GroupButtons>
                {!photoURL ? (
                  <>
                    <AppVerificationBottomPhoto
                      $state="cancel"
                      onClick={() => {
                        setShowVerification(false);
                      }}
                    >
                      Cancelar
                    </AppVerificationBottomPhoto>
                    <AppVerificationBottomPhoto
                      $state="init"
                      onClick={takePhoto}
                    >
                      Tomar foto
                    </AppVerificationBottomPhoto>
                  </>
                ) : (
                  <>
                    <AppVerificationBottomPhoto
                      $state="cancel"
                      onClick={handleVerification}
                    >
                      Repetir
                    </AppVerificationBottomPhoto>
                    <AppVerificationBottomPhoto
                      $state="init"
                      onClick={handleUploadPhoto}
                    >
                      Subir Foto
                    </AppVerificationBottomPhoto>
                  </>
                )}
              </GroupButtons>
            ) : (
              <AppVerificationBottom onClick={handleVerification}>
                Comenzar
              </AppVerificationBottom>
            )}
          </ContainerActions>
        )}
      </AppVerificationFemaleRecord>
    </VerificationLayout>
  );
};

export default Verification;
