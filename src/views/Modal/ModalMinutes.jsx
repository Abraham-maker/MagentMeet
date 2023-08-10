import React from "react";
import {
  ModalGlobal,
  ModalGlobalContainer,
  CardModal,
  CardHeader,
  CardBody,
  Text,
  IconCloseContainer,
  IconClose,
} from "./index";
import { handleModalMinutes } from "../../store/actions/modals";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";

const ModalMinutes = () => {
  const dispatch = useDispatch();
  const counterMale = useSelector((state) => state.auth.counterMale);

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
          <IconCloseContainer>
            <IconClose
              onClick={() => {
                dispatch(handleModalMinutes());
              }}
            >
              <img src="/assets/svg/close.svg" alt="close" />
            </IconClose>
          </IconCloseContainer>

          <CardHeader $img>
            <img src="/assets/images/no-channel.png" alt="" />
          </CardHeader>

          <CardBody>
            <Text fontSize="20px" color="#1d90dc" lineheight="27px">
              Balance: {counterMale} minutos
            </Text>
            <br />
            <Text fontSize="18px" color="#182337" lineheight="27px">
              Hazte Premium para usar tus minutos
            </Text>
            <br />
            <Text fontSize="16px" color="#182337" lineheight="27px">
              Al pasar 5 min de espera su balance sera de 6 min
            </Text>
          </CardBody>
        </CardModal>
      </ModalGlobalContainer>
    </ModalGlobal>
  );
};

export default ModalMinutes;
