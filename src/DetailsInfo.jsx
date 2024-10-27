import React from "react";

const DetailsInfo = ({ title, reads, stars, imageUrl }) => {
  return (
    <div className=" bg-[url('/public/images/hero/hero_bg.png')] w-[1283px] h-[404px] bg-center flex flex-col justify-center items-center gap-10px ">
      <p className="text-white text-9xl">{title}</p>
      <p className="text-white text-5xl">{stars} stars</p>
      <p className="text-white text-5xl">{reads} reads</p>
    </div>
  );
};

export default DetailsInfo;
