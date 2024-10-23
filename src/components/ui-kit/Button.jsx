const Button = ({ text }) => {
  return (
    <div>
      <button
        className="border-white border-2 font-poppins text-14 font-normal transition duration-300 ease-in-out  flex justify-center items-center bg-gradient-to-r from-gray-700 to-black text-white py-1 px-4 rounded hover:bg-gray-800"
        onClick={() => console.log("Нажато")}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
