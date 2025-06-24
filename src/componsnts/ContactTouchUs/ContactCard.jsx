import React from "react";

const ContactCard = ({
  title,
  address,
  direction = "top-down",
  bgColor = "bg-orange-400",
  className = "",
  icon = null,
  minHeight = "min-h-[180px] md:min-h-[220px]", // customizable min-height
}) => {
  const bgClass =
    direction === "top-down"
      ? "absolute left-0 top-0 w-full h-0 group-hover:h-full"
      : "absolute left-0 bottom-0 w-full h-0 group-hover:h-full";
  const textColor =
    "transition-colors duration-500 ease-in-out group-hover:text-white";
  const addressColor =
    "transition-colors duration-500 ease-in-out group-hover:text-white text-gray-500";

  return (
    <div
      className={`flex flex-row gap-5 p-8 cursor-pointer relative items-start group w-full rounded-2xl shadow-md/50 transition-all duration-300 ease-in ${minHeight} ${className}`}
    >
      {/* Animated background */}
      <div
        className={`${bgClass} ${bgColor} -z-10 transition-all duration-500 ease-in-out rounded-2xl`}
        style={{ transitionProperty: "height,top,bottom" }}
      ></div>
      {/* Optional icon */}
      {icon && <div className="mt-2">{icon}</div>}
      <div className="flex flex-col gap-4 justify-center w-full">
        <h2
          className={`font-semibold md:text-[1.5rem] text-[1.3rem] text-black ${textColor}`}
        >
          {title}
        </h2>
        <p className={`font-semibold text-[1rem] ${addressColor}`}>{address}</p>
      </div>
    </div>
  );
};

export default ContactCard;
