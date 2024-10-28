import React from "react";

const DetailsInfo = ({ title, reads, stars, imageUrl }) => {
  return (
    <div
      style={{ backgroundImage: `url(${imageUrl})` }}
      className="h-[404px] bg-center bg-cover flex flex-col items-center justify-center gap-[10px] relative "
    >
      <div className="absolute w-full h-full bg-[rgba(0,0,0,0.65)]  top-0 left-0"></div>
      <p className="text-white text-9xl relative z-10">{title}</p>
      <p className="text-white text-5xl relative z-10">{stars} stars ⭐ </p>
      <p className="text-white text-[28px] mt-[20px] relative z-10">
        {reads} reads
      </p>
    </div>
  );
};

export default DetailsInfo;
