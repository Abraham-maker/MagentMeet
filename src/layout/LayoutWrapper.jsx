import React from "react";
import {
  ContainerLayout,
  ContentLayout,
  Layout,
} from "../styles/LayoutWrapper";
import { motion } from "framer-motion";

const LayoutWrapper = ({ children }) => {
  const messageVariants = {
    hidden: { y: 30, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { delay: 0.1, duration: 0.2 } },
  };

  return (
    <ContainerLayout>
      <ContentLayout
        as={motion.div}
        variants={messageVariants}
        initial="hidden"
        animate="animate"
      >
        <Layout>{children}</Layout>
      </ContentLayout>
    </ContainerLayout>
  );
};

export default LayoutWrapper;
