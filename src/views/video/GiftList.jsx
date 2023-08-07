import React from "react";
import { Gift, GiftContainer, IconGift } from "../../styles/Video";
import { useSelector } from "react-redux";

const GiftList = ({ setShowGift, showGift, userData }) => {
  const listGift = useSelector((state) => state.agora.listGift);
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
                {listGift.map(({ id, name, image }) => {
                  return (
                    <IconGift key={id}>
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
