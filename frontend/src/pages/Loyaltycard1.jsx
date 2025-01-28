import { useState, useEffect, useCallback } from "react";
import ViewReward from "../components/ViewReward";
import Reward from "../components/Reward";
import PortalDrawer from "../components/PortalDrawer";
import { useNavigate } from "react-router-dom";
import L1 from "../components/L1";
import L2 from "../components/L2";

const LoyaltyCard = ({
  greetings = ["Namaste!", "Jwojwolapa!", "Sewaro!", "Tashi Delek!"],
  userName = "Shreeyanch",
  points = 3, // Dynamic points
  totalShapes = 7, // Total number of shapes
  shapesConfig = {
    shapeType: "square", // Options: "circle", "square", "custom"
    filledIcon: "/send.svg", // Icon for filled state (optional for custom shapes)
    emptyIcon: "/empty-icon.svg", // Icon for empty state (optional for custom shapes)
    filledColor: "bg-green-500", // Filled color
    emptyColor: "bg-gray-200", // Empty color
  },
  cardStyle = {
    bgColor: "bg-seagreen-100",
    borderColor: "border-whitesmoke-100",
  },
  assets = {
    logo: "/group-1410103762.svg",
    icon1: "/joysticksvgrepocom-1.svg",
    icon2: "/icon1.svg",
    viewRewardIcon: "/vector.svg",
    frameIcon: "/frame-1410103878.svg",
  },
  textConfig = {
    greetingInterval: 2000,
    fontColor: "text-black",
    pointsLabel: "Points",
  },
  navigationPaths = {
    game: "/game",
    reservation: "/reservation",
  },
}) => {
  const [isFrameOpen, setFrameOpen] = useState(false);
  const [greeting, setGreeting] = useState(greetings[0]);
  const navigate = useNavigate();

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % greetings.length;
      setGreeting(greetings[index]);
    }, textConfig.greetingInterval);

    return () => clearInterval(interval);
  }, [greetings, textConfig.greetingInterval]);

  const openFrame = useCallback(() => setFrameOpen(true), []);
  const closeFrame = useCallback(() => setFrameOpen(false), []);
  const handleNavigate = useCallback(
    (path) => () => navigate(path),
    [navigate]
  );

  return (
    <>
      <div
        className={`min-h-screen w-full relative bg-white flex flex-col items-center justify-start pt-6 px-0 pb-[70px] box-border gap-[34px] text-left text-5xl ${textConfig.fontColor} font-poppins`}
      >
        {/* Greeting Section */}
        <div className="w-80 flex flex-col items-start justify-start pt-[11px] pb-1.5 pl-[29px] pr-14 box-border text-center font-garet">
          <div className="relative tracking-[0.01em] lg:text-black mq350small:font-garet mq350small:text-xl mq350small:text-black">
            <span>{greeting}</span>
            <span className="font-medium font-Poppins">👋🏼</span>
          </div>
          <div className="relative text-xl tracking-[0.01em] font-semibold font-poppins mt-[-5px] mq350small:font-poppins mq350small:text-mini">
            {userName}
          </div>
        </div>

        {/* Rewards Component */}
        <ViewReward group1410103762={assets.logo} vector="/send.svg" />

        {/* L1 Component */}
        <L1 />

        {/* L2 Component */}
        <L2
          points={points}
          totalShapes={totalShapes}
          shapesConfig={shapesConfig}
          cardStyle={cardStyle}
          textConfig={textConfig}
        />

        {/* View Rewards Button */}
        <div className="self-stretch flex flex-row items-center justify-center py-2 px-0 gap-1 text-mini">
          <div className="w-5 h-5 overflow-hidden shrink-0 flex flex-row items-center justify-center p-px box-border">
            <img
              className="w-4 relative h-[15px]"
              alt="View Rewards Icon"
              src={assets.viewRewardIcon}
            />
          </div>
          <div
            className="relative tracking-[0.01em] font-medium cursor-pointer mq350small:text-smi"
            onClick={openFrame}
          >
            View Rewards
          </div>
          <img
            className="w-5 relative h-5"
            alt="Frame Icon"
            src={assets.frameIcon}
          />
        </div>

        {/* Navigation Buttons */}
        <div className="w-full flex flex-row items-center justify-between py-2 px-0 gap-1 lg:gap-1">
          <div
            className={`w-[70px] rounded-tl-none rounded-tr-3xs rounded-br-3xs rounded-bl-none ${cardStyle.bgColor} ${cardStyle.borderColor} border-[1px] border-solid box-border flex flex-row items-center justify-center py-[9px] px-0 cursor-pointer lg:gap-2.5`}
            onClick={handleNavigate(navigationPaths.game)}
          >
            <img
              className="w-6 relative h-[22px]"
              alt="Game Icon"
              src={assets.icon1}
            />
          </div>
          <div
            className={`w-[70px] rounded-tl-3xs rounded-tr-none rounded-br-none rounded-bl-3xs ${cardStyle.bgColor} ${cardStyle.borderColor} border-[1px] border-solid box-border flex flex-row items-center justify-center py-[9px] px-0 cursor-pointer lg:gap-2.5`}
            onClick={handleNavigate(navigationPaths.reservation)}
          >
            <img
              className="w-6 relative h-[22px]"
              alt="Reservation Icon"
              src={assets.icon2}
            />
          </div>
        </div>
      </div>

      {/* Reward Modal */}
      {isFrameOpen && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Bottom"
          onOutsideClick={closeFrame}
        >
          <Reward onClose={closeFrame} />
        </PortalDrawer>
      )}
    </>
  );
};

export default LoyaltyCard;
