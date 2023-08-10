import React, { useEffect } from "react";
import {
  SendGift,
  SendGiftContainer,
  ReceivedAndSend,
  ReceivedAndSendContainer,
  IconGift,
} from "../../styles/Video";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import Sound from "../../../public/assets/sound.mp3";

const RegalosList = ({ userData, showRegalos, setRegalos }) => {
  const giftReceived = useSelector((state) => state.agora.giftReceived);
  const giftSending = useSelector((state) => state.agora.giftSending);
  const listGift = useSelector((state) => state.functionAgora.listGift);
 
  const messageVariants = {
    hidden: { y: 30, opacity: 0, transition: { delay: 0.1, duration: 0.2 } },
    animate: { y: 0, opacity: 1, transition: { delay: 0.1, duration: 0.2 } },
  };

  const reproducirSonido = () => {
    const audio = new Audio(Sound);
    audio.play();
  };

  useEffect(() => {
    if (giftReceived.length !== 0) {
      reproducirSonido();
    }
  }, [giftReceived]);

  return (
    <>
      {userData.gender === "male" && giftSending.length !== 0 && (
        <SendGift>
          <SendGiftContainer
            $gender={userData.gender}
            onClick={() => {
              setRegalos(!showRegalos);
            }}
          >
            {"Enviado"}
            {!showRegalos ? (
              <img src="/assets/svg/arrow-down.svg" alt="arrow" />
            ) : (
              <img src="/assets/svg/arrow-up.svg" alt="arrow" />
            )}
          </SendGiftContainer>
        </SendGift>
      )}

      {userData.gender === "female" && giftReceived.length !== 0 && (
        <SendGift>
          <SendGiftContainer
            $gender={userData.gender}
            onClick={() => {
              setRegalos(!showRegalos);
            }}
          >
            {"Recibido"}
            {!showRegalos ? (
              <img src="/assets/svg/arrow-down.svg" alt="arrow" />
            ) : (
              <img src="/assets/svg/arrow-up.svg" alt="arrow" />
            )}
          </SendGiftContainer>
        </SendGift>
      )}

      {showRegalos &&
        userData.gender === "male" &&
        giftSending.length !== 0 && (
          <ReceivedAndSend
            $gender={userData.gender}
            as={motion.div}
            variants={messageVariants}
            initial="hidden"
            animate="animate"
            exit="hidden"
          >
            <>
              {giftSending.map(({ text }) => {
                return (
                  <ReceivedAndSendContainer $gender={userData.gender}>
                    <motion.div
                      variants={messageVariants}
                      initial="hidden"
                      animate="animate"
                      exit="hidden"
                    >
                      {text}
                    </motion.div>
                  </ReceivedAndSendContainer>
                );
              })}
            </>
          </ReceivedAndSend>
        )}

      {showRegalos &&
        userData.gender === "female" &&
        giftReceived.length !== 0 && (
          <ReceivedAndSend
            $gender={userData.gender}
            as={motion.div}
            variants={messageVariants}
            initial="hidden"
            animate="animate"
            exit="hidden"
          >
            {userData.gender === "female" && (
              <ReceivedAndSendContainer $gender={userData.gender}>
                {giftReceived.map(({ text }) => {
                  const image = listGift.find((state) => state.points == text);
                  return (
                    <IconGift
                      as={motion.div}
                      variants={messageVariants}
                      initial="hidden"
                      animate="animate"
                      exit="hidden"
                    >
                      <img src={image.image} alt="" />
                    </IconGift>
                  );
                })}
              </ReceivedAndSendContainer>
            )}
          </ReceivedAndSend>
        )}
    </>
  );
};

export default RegalosList;
