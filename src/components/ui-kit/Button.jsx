import React from "react";

const Button = ({ text }) => {
  return (
    <div>
      <button
        className="bg-black text-white text-center hover:border-white hover:border-2 py-1 px-3 rounded w-[86px] h-[26px]  mt-14 text-center leading-[10px]"
        onClick={() => console.log("Нажато")}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
