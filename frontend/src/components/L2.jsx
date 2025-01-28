import React from "react";

const L2 = ({
  points = 3, // Dynamic points
  totalShapes = 8, // Total number of shapes
  shapesConfig = {
    shapeType: "circle", // Options: "circle", "square", "custom"
    filledIcon: "", // Icon for filled state (optional for custom shapes)
    emptyIcon: "/empty-icon.svg", // Icon for empty state (optional for custom shapes)
    filledColor: "bg-green-500", // Filled color
    emptyColor: "bg-gray-200", // Empty color
  },
  cardStyle = {
    bgColor: "bg-seagreen-100",
  },
  textConfig = {
    pointsLabel: "Points",
  },
}) => {
  return (
    <div
      className={`w-60 shadow-[0px_25px_58px_rgba(1,_110,_73,_0.5)] rounded-3xs ${cardStyle.bgColor} h-[340px] flex flex-col items-center justify-center py-1 px-2.5 box-border gap-1.5 text-3xs text-white md:flex-col md:flex-wrap`}
    >
      <div className="self-stretch rounded-[21px] h-[301px] overflow-hidden shrink-0 flex flex-row items-center justify-center flex-wrap content-center py-[33px] px-[11px] box-border gap-x-[27px] gap-y-[62px]">
        {Array.from({ length: totalShapes }).map((_, index) => (
          <div
            key={index}
            className={`w-10 h-10 ${index < points ? shapesConfig.filledColor : shapesConfig.emptyColor} ${
              shapesConfig.shapeType === "circle" ? "rounded-full" : "rounded-none"
            }`}
          ></div>
        ))}
      </div>
      <div className="relative tracking-[0.01em] font-medium">
        {textConfig.pointsLabel}: {points}
      </div>
    </div>
  );
};

export default L2;
