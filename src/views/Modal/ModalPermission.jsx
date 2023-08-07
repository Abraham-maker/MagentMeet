import React from "react";
import {
  ModalGlobal,
  ModalGlobalContainer,
  CardModal,
  CardHeader,
  CardBody,
  Text,
} from "./index";
import { motion } from "framer-motion";

const Modal = () => {
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
            <Text fontSize="22px" color="#182337" lineheight="27px">
              Permite el acceso a tu cámara y micrófono
            </Text>
          </CardHeader>
          <CardBody>
            <Text fontSize="14px" color="#182337" lineheight="20px">
              Esta aplicación requiere acceso a tu cámara y micrófono para que
              otras personas puedan verte y oírte. Solicitaremos acceso por
              separado para cada navegador y ordenador que utilices.
            </Text>
          </CardBody>
        </CardModal>
      </ModalGlobalContainer>
    </ModalGlobal>
  );
};

export default Modal;
