import React from "react";
import { Gift, GiftContainer, IconGift } from "../../styles/Video";
import { useDispatch, useSelector } from "react-redux";
import { handleMessageGift } from "../../store/actions/agoraRTM";

const GiftList = ({ setShowGift, showGift, userData }) => {
  const dispatch = useDispatch();
  const listGift = useSelector((state) => state.functionAgora.listGift);

  const handleSendGift = async (id, points) => {
    await dispatch(handleMessageGift(id, points));
  };

  return (
    <>
      {userData.gender === "male" && (
        <Gift
          $showGift={showGift.toString() === "true" ? "true" : "false"}
          onMouseOver={() => {
            setShowGift(true);
          }}
          onMouseLeave={() => {
            setShowGift(false);
          }}
        >
          <GiftContainer
            $showGift={showGift.toString() === "true" ? "true" : "false"}
          >
            {!showGift && <img src="/assets/svg/gift.svg" alt="" />}
            {showGift && (
              <>
                {listGift.map(({ id, name, image, points }) => {
                  return (
                    <IconGift
                      key={id}
                      onClick={() => {
                        handleSendGift(id, points);
                      }}
                    >
                      <img src={image} alt="gift" />
                    </IconGift>
                  );
                })}
              </>
            )}
          </GiftContainer>
        </Gift>
      )}
    </>
  );
};

export default GiftList;
