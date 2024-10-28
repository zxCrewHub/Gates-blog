import React from "react";

const Chapter = ({ chapter, isRightDirection }) => {
  return (
    <div
      className={`flex ${
        isRightDirection ? "items-end" : "items-start"
      } flex-col`}
    >
      <p className="text-[35px] font-bold tracking-widest">{chapter}</p>
      <div className="h-px w-full bg-gray-300 border-l-[10px] border-l-black"></div>
    </div>
  );
};

export default Chapter;
