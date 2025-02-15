import { useState } from "react";
import Description from "./Description";
import MyRewards from "./MyRewards";
import PropTypes from "prop-types";

const Reward = ({ className = "", onClose }) => {
  const [isRewardView, setIsRewardView] = useState(true);
  const [activePopup, setActivePopup] = useState(null); // Tracks which reward card has an open popup

  const openDescriptionPopup = (index) => {
    setActivePopup(index);
  };

  const closeDescriptionPopup = () => {
    setActivePopup(null);
  };

  const toggleView = () => {
    setIsRewardView((prevView) => !prevView);
  };

  return (
    <div className={`w-full relative flex flex-col items-center justify-center gap-2.5 max-h-[90%] overflow-auto text-center text-3xs1 text-darkslategray font-garet ${className}`}>
      <div className="w-[46px] relative rounded bg-white h-[3px]" />
      <div className="self-stretch rounded-t-xl1 rounded-b-none bg-white h-[527px] flex flex-col items-center justify-start pt-7 px-0 pb-[42px] box-border gap-7 w-full max-h-[100%] overflow-auto">
        {/* Tab Switcher */}
        <div className="rounded-62xl bg-gradient-to-r from-[#f5f2ed] via-[#f4f5f0] to-[#edf5f3] flex flex-row items-center justify-center p-[3px]">
          <div
            className={`w-[84px] h-[25px] flex flex-row items-center justify-center cursor-pointer ${isRewardView ? "bg-white shadow-[0px_4px_10px_rgba(10,_19,_8,_0.12)] text-darkslategray" : "text-darkgray-100"}`}
            onClick={toggleView}
          >
            <div className="flex-1 relative tracking-[-0.02em]">Rewards</div>
          </div>
          <div
            className={`w-[84px] h-[25px] flex flex-row items-center justify-center cursor-pointer ${!isRewardView ? "bg-white shadow-[0px_4px_10px_rgba(10,_19,_8,_0.12)] text-darkslategray" : "text-darkgray-100"}`}
            onClick={toggleView}
          >
            <div className="flex-1 relative tracking-[-0.02em]">My Rewards</div>
          </div>
        </div>

        {/* Rewards Grid */}
        {isRewardView ? (
          <div className="self-stretch flex flex-row items-center justify-center flex-wrap content-center gap-[53px] text-left text-xs-4 text-black font-poppins relative">
            {/* Single Reward Card */}
            <div className="w-[270px] shadow-[0px_4px_12.2px_rgba(0,_0,_0,_0.25)] rounded-3xs1 bg-white h-48 flex flex-col items-center justify-start py-4 px-4 box-border relative gap-2.5">
              <img className="w-60 relative rounded-6xs1 h-[130px] object-cover z-[0]" alt="" src="/apple-touch-icon.png" />
              <img
                className="w-6 absolute !m-[0] top-[17px] left-[225px] h-6 cursor-pointer z-[1]"
                alt=""
                src="/frame-1410103886.svg"
                onClick={() => openDescriptionPopup(0)}
              />
              <div className="self-stretch flex flex-col items-start justify-center py-0 px-3.5 relative gap-px z-[2]">
                <div className="flex flex-row items-center justify-center gap-px z-[0]">
                  <div className="w-[125.9px] relative font-medium inline-block shrink-0">Grape Flavoured Latte</div>
                  <div className="w-2.5 relative rounded-sm-41 bg-red border-whitesmoke-200 border-[1px] border-solid box-border h-2.5" />
                </div>
                <div className="relative font-montserrat text-darkgray-200 z-[1]">20 Points</div>
                <img className="w-[21.2px] absolute !m-[0] top-[6px] left-[233px] h-[21.2px] object-contain z-[2]" alt="" src="/reedem-button-arrow.svg" />
              </div>

              {/* Description Popup (Positioned Absolutely inside the Reward Card) */}
              {activePopup === 0 && (
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-white bg-opacity-90 z-50 rounded-3xs1 shadow-lg">
                  <Description onClose={closeDescriptionPopup} />
                </div>
              )}
            </div>
          </div>
        ) : (
          <MyRewards />
        )}
      </div>
    </div>
  );
};

Reward.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
};

export default Reward;
