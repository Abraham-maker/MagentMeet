import React from "react";
import {
  ModalGlobal,
  ModalGlobalContainer,
  CardModal,
  CardHeader,
  CardBody,
  Text,
  CardFooter,
  FooterBtn,
} from "./index";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { handleModalBloqued } from "../../store/actions/modals";

const ModalBloquedPermission = () => {
  const dispatch = useDispatch();

  const variants = {
    hidden: { y: 30, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { delay: 0.1, duration: 0.2 } },
  };

  return (
    <ModalGlobal>
      <ModalGlobalContainer>
        <CardModal
          as={motion.div}
          variants={variants}
          initial="hidden"
          animate="animate"
        >
          <CardHeader>
            <img
              src="/assets/svg/video-error.svg"
              alt="video"
              style={{ height: "100px", width: "100px", marginBottom: "10px" }}
            />

            <Text fontSize="20px" color="#182337" lineheight="27px">
              Acceso a la cámara bloqueado o la cámara no está disponible.
            </Text>
          </CardHeader>

          <CardBody>
            <li
              style={{
                paddingLeft: "5px",
                display: "flex",
                justifyContent: "flex-start",
                textAlign: "start",
              }}
            >
              <Text fontSize="14px" color="#182337" lineheight="27px">
                <Text fontSize="16px" color="#27a93c" lineheight="27px">
                  Permitir el acceso
                </Text>{" "}
                a la cámara en su navegador. Para ello, haga clic en el botón
                <Text>
                  <img
                    src="/assets/svg/camera-icon.svg"
                    alt="camera"
                    style={{ width: "20px", height: "15px" }}
                  />
                </Text>{" "}
                o el icono de la{" "}
                <Text>
                  <img
                    src="/assets/svg/lock-icon.svg"
                    alt="camera"
                    style={{ width: "20px", height: "15px" }}
                  />
                </Text>
                en la ventana del navegador y seleccione Permitir en el menú
                desplegable.
              </Text>
            </li>
            <Text fontSize="14px" color="#182337" lineheight="27px">
              Cierre todos los programas que puedan estar utilizando la cámara.
              Si el problema persiste con la cámara externa, desconecte el cable
              del del ordenador, espere unos segundos y, a continuación, vuelva
              a conectar firmemente el firmemente el cable.
            </Text>
          </CardBody>
          <CardFooter>
            <FooterBtn
              onClick={() => {
                dispatch(handleModalBloqued());
              }}
            >
              Volver a intentar
            </FooterBtn>
          </CardFooter>
        </CardModal>
      </ModalGlobalContainer>
    </ModalGlobal>
  );
};

export default ModalBloquedPermission;
