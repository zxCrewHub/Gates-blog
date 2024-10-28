//импортирую этот компонент в Main.jsx

import Input from "./ui-kit/Input";

export const Hero = () => {
  return (
    <div className="bg-[url('/public/images/hero/hero_bg.png')]  bg-cover bg-center "><div className="container flex relative">
      <div className="flex flex-col justify-center">
        <div className=" flex justify-between flex-col gap-8">
          <h1 className="text-white text-7xl w-full ">Welcome to Gates</h1>
          <p className="text-white text-base opacity-70 w-5/6">
            Get the latest news on your favourite mangas, anime and manhwa
            around the world!
          </p>
          <Input text="Subscribe" placeholder="Enter your email" />
        </div>
      </div>
      <div className="image__wrapper">
        <img
          src="/public/images/hero/intersect.png"
          alt="anime girl"
          className="w-full "
        />
      </div>
      <ul className="absolute right-0 bottom-[10%]">
        <li className="text-white opacity-60 hover:opacity-90">
          <a href="">Action</a>
        </li>
        <li className="text-white opacity-60 hover:opacity-90">
          <a href="">Comedy</a>
        </li>
        <li className="text-white opacity-60 hover:opacity-90">
          <a href="">Drama</a>
        </li>
        <li className="text-white opacity-60 hover:opacity-90">
          <a href="">Military</a>
        </li>
        <li className="text-white opacity-60 hover:opacity-90">
          <a href="">Fantasy</a>
        </li>
      </ul></div>
    </div>
  );
};
