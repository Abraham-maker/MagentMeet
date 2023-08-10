import React, { useState, useRef, useEffect } from "react";
import { IoIosClose } from "react-icons/io";
import { FaArrowRight, FaArrowLeft, FaUserPlus } from "react-icons/fa";
import { BiSolidVolumeFull, BiSolidVolumeMute } from "react-icons/bi";
import { AiOutlineExclamationCircle, AiFillHeart } from "react-icons/ai";
import { FaPlay } from "react-icons/fa";
import {
  StoriesLayout,
  ContainerClose,
  ButtonClose,
  SpanClose,
  ContainerNavigationPrev,
  ContainerNavigationNext,
  ContainerButtonNavigation,
  ContentButtonNavigation,
  ContainerVolume,
  ButtonVolume,
  ContentButtonVolume,
  ContainerAbuse,
  ButtonAbuse,
  ContentButtonAbuse,
  ContainerActions,
  ListContentActions,
  ButtonActions,
  ContentButtonActions,
  ContainerVideo,
  ContentVideo,
  VideoStories,
  StoriesContainer,
  ContainerPlayVideo,
  ContentPlayVideo,
  ContainerDetailsInfo,
  DetailsAvatar,
  DetailsAvatarContainer,
  DetailsTextInfo,
  DetailsTextInfoName,
  DetailsTextInfoDate,
} from "./index";
import { useDispatch, useSelector } from "react-redux";
import { getStories, handleLike } from "../../store/actions/auth";

const Stories = ({ showStories }) => {
  const dispatch = useDispatch();
  const stories = useSelector((state) => state.auth.stories);
  const [currentVideo, setCurrentVideo] = useState(0);
  const [showIcon, setShowIcon] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    dispatch(getStories());
  }, []);

  const handlePrev = () => {
    setCurrentVideo((prev) => (prev === 0 ? stories.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentVideo((prev) => (prev === stories.length - 1 ? 0 : prev + 1));
  };

  const handleVideoPlay = ({ target }) => {
    if (target.paused === true) {
      target.play();
      setShowIcon(false);
    } else {
      target.pause();
      setShowIcon(true);
    }
  };

  const handleAudio = () => {
    setIsMuted((prev) => !prev);
  };

  const formatDate = (dateStr) => {
    const months = [
      "enero",
      "febrero",
      "marzo",
      "abril",
      "mayo",
      "junio",
      "julio",
      "agosto",
      "septiembre",
      "octubre",
      "noviembre",
      "diciembre",
    ];
    const weekdays = [
      "domingo",
      "lunes",
      "martes",
      "miércoles",
      "jueves",
      "viernes",
      "sábado",
    ];

    const date = new Date(dateStr);
    const dayOfWeek = weekdays[date.getDay()];
    const month = months[date.getMonth()];
    const dayOfMonth = date.getDate();
    const year = date.getFullYear();

    return `${dayOfWeek}, ${month} ${dayOfMonth}, ${year}`;
  };
  console.log(stories?.[currentVideo]);
  return (
    <StoriesLayout>
      <StoriesContainer>
        <ContainerDetailsInfo>
          <DetailsAvatar>
            <DetailsAvatarContainer>
              <img
                src={stories?.[currentVideo]?.user?.profile_photo_path}
                alt="img"
              />
            </DetailsAvatarContainer>
          </DetailsAvatar>

          <DetailsTextInfo>
            <DetailsTextInfoName>
              {stories?.[currentVideo]?.user?.name}
            </DetailsTextInfoName>
            <DetailsTextInfoDate>
              {formatDate(stories?.[currentVideo]?.date_history)}
            </DetailsTextInfoDate>
          </DetailsTextInfo>
        </ContainerDetailsInfo>

        <ContainerVideo>
          <ContentVideo>
            <VideoStories
              autoPlay
              src={stories?.[currentVideo]?.url}
              onClick={(e) => {
                handleVideoPlay(e);
              }}
              muted={isMuted}
            />
            <ContainerPlayVideo>
              <ContentPlayVideo>{showIcon && <FaPlay />}</ContentPlayVideo>
            </ContainerPlayVideo>
          </ContentVideo>
        </ContainerVideo>

        <ContainerClose>
          <ButtonClose
            onClick={() => {
              showStories(false);
            }}
          >
            <SpanClose>
              <IoIosClose />
            </SpanClose>
          </ButtonClose>
        </ContainerClose>

        <ContainerNavigationPrev onClick={handlePrev}>
          <ContainerButtonNavigation>
            <ContentButtonNavigation>
              <FaArrowLeft />
            </ContentButtonNavigation>
          </ContainerButtonNavigation>
        </ContainerNavigationPrev>

        <ContainerNavigationNext onClick={handleNext}>
          <ContainerButtonNavigation>
            <ContentButtonNavigation>
              <FaArrowRight />
            </ContentButtonNavigation>
          </ContainerButtonNavigation>
        </ContainerNavigationNext>

        <ContainerVolume onClick={handleAudio}>
          <ButtonVolume>
            <ContentButtonVolume>
              {isMuted ? <BiSolidVolumeMute /> : <BiSolidVolumeFull />}
            </ContentButtonVolume>
          </ButtonVolume>
        </ContainerVolume>

        <ContainerAbuse>
          <ButtonAbuse>
            <ContentButtonAbuse>
              <AiOutlineExclamationCircle />
            </ContentButtonAbuse>
          </ButtonAbuse>
        </ContainerAbuse>

        <ContainerActions>
          <ListContentActions>
            <li style={{ listStyle: "none" }}>
              <ButtonActions
                $type="heart"
                $active={
                  stories?.[currentVideo]?.like_user !== null ? "true" : "false"
                }
                onClick={() => {
                  dispatch(handleLike(stories?.[currentVideo]?.id));
                }}
              >
                <ContentButtonActions>
                  <AiFillHeart />
                </ContentButtonActions>
              </ButtonActions>
            </li>
            <li style={{ listStyle: "none", marginLeft: "20px" }}>
              <ButtonActions $type="friends">
                <ContentButtonActions>
                  <FaUserPlus />
                </ContentButtonActions>
              </ButtonActions>
            </li>
          </ListContentActions>
        </ContainerActions>
      </StoriesContainer>
    </StoriesLayout>
  );
};

export default Stories;
