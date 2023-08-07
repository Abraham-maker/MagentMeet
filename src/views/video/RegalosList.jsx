import React from "react";
import {
  SendGift,
  SendGiftContainer,
  ReceivedAndSend,
  ReceivedAndSendContainer,
  IconGift,
} from "../../styles/Video";
import { motion } from "framer-motion";

const RegalosList = ({ userData, showRegalos, setRegalos }) => {
  const data = [
    { id: 1, url: "/assets/svg/gift.svg" },
    { id: 2, url: "/assets/svg/gift.svg" },
    { id: 3, url: "/assets/svg/gift.svg" },
    { id: 4, url: "/assets/svg/gift.svg" },
    { id: 5, url: "/assets/svg/gift.svg" },
    { id: 6, url: "/assets/svg/gift.svg" },
    { id: 7, url: "/assets/svg/gift.svg" },
    { id: 8, url: "/assets/svg/gift.svg" },
    { id: 9, url: "/assets/svg/gift.svg" },
    { id: 10, url: "/assets/svg/gift.svg" },
  ];

  const messageVariants = {
    hidden: { y: 30, opacity: 0, transition: { delay: 0.1, duration: 0.2 } },
    animate: { y: 0, opacity: 1, transition: { delay: 0.1, duration: 0.2 } },
  };

  return (
    <>
      <SendGift>
        <SendGiftContainer
          $gender={userData.gender}
          onClick={() => {
            setRegalos(!showRegalos);
          }}
        >
          {userData.gender === "male" ? "Enviado" : "Recibido"}
          {!showRegalos ? (
            <img src="/assets/svg/arrow-down.svg" alt="arrow" />
          ) : (
            <img src="/assets/svg/arrow-up.svg" alt="arrow" />
          )}
        </SendGiftContainer>
      </SendGift>

      {showRegalos && (
        <ReceivedAndSend
          as={motion.div}
          variants={messageVariants}
          initial="hidden"
          animate="animate"
          exit="hidden"
        >
          <ReceivedAndSendContainer>
            {data.map(({ id, url }) => {
              return (
                <IconGift
                  key={id}
                  as={motion.div}
                  variants={messageVariants}
                  initial="hidden"
                  animate="animate"
                  exit="hidden"
                >
                  <img src={url} alt="" />
                </IconGift>
              );
            })}
          </ReceivedAndSendContainer>
        </ReceivedAndSend>
      )}
    </>
  );
};

export default RegalosList;
