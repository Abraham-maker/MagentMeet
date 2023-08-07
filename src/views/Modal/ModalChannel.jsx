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
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { handleModalChannel } from "../../store/actions/modals";

const ModalChannel = () => {
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
          <IconCloseContainer>
            <IconClose
              onClick={() => {
                dispatch(handleModalChannel());
              }}
            >
              <img src="/assets/svg/close.svg" alt="close" />
            </IconClose>
          </IconCloseContainer>
          <CardHeader $img>
            <img src="/assets/images/no-channel.png" alt="" />
          </CardHeader>

          <CardBody>
            <Text fontSize="18px" color="#182337" lineheight="27px">
              Al parecer no hay usuarios conectados en este momento, Intentelo
              mas tarde nuevamente
            </Text>
          </CardBody>
        </CardModal>
      </ModalGlobalContainer>
    </ModalGlobal>
  );
};

export default ModalChannel;
