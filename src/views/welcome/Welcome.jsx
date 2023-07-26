import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  HeroWrapper,
  HeroContent,
  Paragraph,
  WelcomeBottom,
  OptionsClient,
  CardOptions,
  IconCardOptions,
  ContainerClient,
  ContainerContentClient,
} from "./index";

const Welcome = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  const boxVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
    hidden: { opacity: 0, scale: 0 },
  };

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <>
      <HeroWrapper>
        <HeroContent>
          <motion.div whileInView={{ scale: 1.1 }} initial={{ scale: 0.3 }}>
            <div>
              <Paragraph size="48" color="#000" lineheight="45">
                Bienvenido a{" "}
                <Paragraph size="48" color="#ff00ff">
                  Magent
                </Paragraph>
                <Paragraph size="48" color="#3cdfff">
                  Meet
                </Paragraph>
              </Paragraph>
            </div>

            <Paragraph size="24" color="#000" lineheight="25">
              El #1 para conocer y chatear con chicas online
            </Paragraph>

            <motion.div
              whileTap={{ scale: 1.1 }}
              whileHover={{ scale: 0.9 }}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <WelcomeBottom
                background="linear-gradient(
      270deg,
      rgba(270, 255, 256, 0.5) 0%,
      rgba(255, 255, 255, 0.2) 100%
    ),
    #ff00ff"
                color="#fff"
              >
                Empezar ahora
              </WelcomeBottom>
            </motion.div>
          </motion.div>
        </HeroContent>
      </HeroWrapper>

      <OptionsClient
        ref={ref}
        as={motion.div}
        variants={boxVariant}
        initial="hidden"
        animate={control}
      >
        <CardOptions
          background="linear-gradient(270deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.5) 100%), #FFE4DA"
          color="#BF9E90"
        >
          <IconCardOptions img="/assets/svg/video-home.svg" />
          Video chat de alta calidad
        </CardOptions>

        <CardOptions
          background="linear-gradient(270deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 100%), #DAF4FF"
          color="#78A3B5"
        >
          <IconCardOptions img="/assets/svg/user-home.svg" />
          Conoce gente nueva
        </CardOptions>
        <CardOptions
          background="linear-gradient(
      270deg,
      rgba(255, 255, 255, 0.5) 0%,
      rgba(255, 255, 255, 0) 100%
    ),
    #ffdee7"
          color="#C28898"
        >
          <IconCardOptions img="/assets/svg/corazon-home.svg" />
          La mejor experiencia
        </CardOptions>
        <CardOptions
          background="linear-gradient(270deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.5) 100%), #E9E6FF"
          color="#9993BD"
        >
          <IconCardOptions img="/assets/svg/monitor-home.svg" />A la mejor
          resolución
        </CardOptions>
      </OptionsClient>

      <ContainerClient background="linear-gradient(0deg, rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.85)), linear-gradient(252.44deg, #1CA5FC 0%, #F55280 100%);">
        <Paragraph
          margin="30"
          color="#686e7e"
          size="30"
          ref={ref}
          as={motion.div}
          variants={boxVariant}
          initial="hidden"
          animate={control}
        >
          Unete a nuestra comunidad segura
        </Paragraph>
        <Paragraph
          color="#686e7e"
          size="20"
          ref={ref}
          as={motion.div}
          variants={boxVariant}
          initial="hidden"
          animate={control}
        >
          Todo es posible no pierdas mas tiempo y comienza ya a usar nuestra
          plataforma, muchas personas esperando para conocerte.
        </Paragraph>
        <ContainerContentClient>
          <motion.img
            ref={ref}
            variants={boxVariant}
            initial="hidden"
            animate={control}
            src="/assets/images/phone.png"
            alt=""
          />
        </ContainerContentClient>
      </ContainerClient>
    </>
  );
};

export default Welcome;
