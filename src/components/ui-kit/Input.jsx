import React from "react";

const Input = ({ text, placeholder }) => {
  return (
    <div className="flex items-center bg-gray-200 p-2 rounded w-[406px] h-[46px]">
      <label
        className="bg-black text-white px-3 py-1 rounded-l hover:bg-[#636363]  mr-2"
        htmlFor="inputField"
      >
        {text}
      </label>
      <input
        className="bg-grey-200 focus:outline-none px-3 py-1 w-full rounded-r  "
        type="text"
        id="inputField"
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
