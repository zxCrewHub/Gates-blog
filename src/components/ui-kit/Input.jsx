const Input = ({ text, placeholder }) => {
  return (
    <div className="  w-[406px] h-[46px] flex items-center bg-[#E5E5E5] rounded overflow-hidden shadow-lg">
      <label
        className="bg-black text-white px-4 py-1 ml-2 font-semibold  transition-all duration-300 min-w-28 text-center"
        style={{
          background: "linear-gradient(180deg, #2C2C2C 0%, #000000 100%)",
        }}
        htmlFor={text}
      >
        {text}
      </label>
      <input
        className="px-4 py-3 w-64 bg-[#E5E5E5] text-gray-600 placeholder-gray-500 outline-none border-0 "
        type="text"
        id={text}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
