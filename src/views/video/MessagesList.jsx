import React, { useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Chat,
  Conversation,
  ConversationContainer,
  Message,
  Text,
  Span,
} from "../../styles/Video";
import { useSelector } from "react-redux";

const MessagesList = ({ showMessages, showControls }) => {
  const userData = useSelector((state) => state.auth.userData);
  const messages = useSelector((state) => state.agora.messages);
  const membersChannel = useSelector((state) => state.agora.membersChannel);
  const messageContainerRef = useRef(null);

  useEffect(() => {
    if (messages.length !== 0) {
      messageContainerRef.current.scrollTop =
        messageContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const messageVariants = {
    hidden: { y: 30, opacity: 0, transition: { delay: 0.1, duration: 0.2 } },
    animate: { y: 0, opacity: 1, transition: { delay: 0.1, duration: 0.2 } },
  };

  return (
    <>
      {showMessages && (
        <AnimatePresence>
          <Chat
            variants={messageVariants}
            $showControls={showControls}
            initial="hidden"
            animate="animate"
          >
            <Conversation>
              <ConversationContainer ref={messageContainerRef}>
                {userData.gender === "male" ? (
                  <>
                    {messages.map((item, index) => {
                      const member = membersChannel.find(
                        (m) => m.memberId === item.sender
                      );
                      const senderName = member.name;
                      return (
                        <Message
                          background={"#fff"}
                          key={index}
                          as={motion.div}
                          variants={messageVariants}
                          initial="hidden"
                          animate="animate"
                          exit="hidden"
                        >
                          <Text fontSize="13px" color={"#000"}>
                            <Span
                              fontSize="13px"
                              color={
                                member.name === userData.name
                                  ? "#1987cd"
                                  : "#e83e8c  "
                              }
                              fontWeight="600"
                            >
                              {userData.name === senderName ? "Me" : senderName}
                              :
                            </Span>{" "}
                            {item.text}
                          </Text>
                          <Text fontSize="12px" color="" fontWeight="400">
                            Traduccion
                          </Text>
                        </Message>
                      );
                    })}
                  </>
                ) : (
                  <>
                    {messages.map((item, index) => {
                      const member = membersChannel.find(
                        (m) => m.memberId === item.sender
                      );
                      const senderName = member.name;
                      return (
                        <Message
                          background={"#fff"}
                          key={index}
                          as={motion.div}
                          variants={messageVariants}
                          initial="hidden"
                          animate="animate"
                          exit="hidden"
                        >
                          <Text fontSize="13px" color={"#000"}>
                            <Span
                              fontSize="13px"
                              color={
                                member.name === userData.name
                                  ? "#e83e8c"
                                  : "#1987cd"
                              }
                              fontWeight="600"
                            >
                              {userData.name === senderName ? "Me" : senderName}
                              :
                            </Span>{" "}
                            {item.text}
                          </Text>
                          <Text fontSize="12px" color="" fontWeight="400">
                            Traduccion
                          </Text>
                        </Message>
                      );
                    })}
                  </>
                )}
              </ConversationContainer>
            </Conversation>
          </Chat>
        </AnimatePresence>
      )}
    </>
  );
};

export default MessagesList;
