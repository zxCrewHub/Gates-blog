// import { useEffect } from "react";
// import { useState } from "react";

import { Link } from "react-router-dom";

export const Card = ({ obj }) => {
  // const [data, setData] = useState([]);
  const { id, title, reads, tags, dateOfCreate, content, imageUrl } = obj;

  function getDateAgo(date) {
    const dateCreate = new Date(date);
    const createTimeStamp = dateCreate.getTime();
    const timeAgo = Date.now() - createTimeStamp;
    const mounth = Math.floor(timeAgo / 2628000000);
    return `${mounth} mounth ago`;
  }

  return (
    <div className="max-w-[329px] mt-5">
      <img
        src={imageUrl}
        alt="picture"
        className="w-[329px] h-[254px] object-cover rounded-md"
      />
      <div className="flex-col justify-between">
        <div className="flex gap-2 text-xs mt-2">
          {tags.map((e) => (
            <p
              key={e + title}
              className="text-white bg-slate-400 rounded-md px-2 py-1"
            >
              {e}
            </p>
          ))}
        </div>
        <div>
          <p className="text-slate-500">{getDateAgo(dateOfCreate)}</p>
        </div>
        <h2 className="font-bold text-2xl text-slate-800 mt-2">{title}</h2>
        <p className="text-black opacity-75 mb-4 h-36 text-ellipsis line-clamp-6">
          {content}
        </p>

        <div className="flex justify-between text-xs mt-2">
          <p className="text-slate-500">{reads} Reads</p>
          <div className="flex">
            <Link to={`/details/${id}`} className="font-bold text-slate-700">
              Read Full
            </Link>
            <img src="/public/images/hero/arrow.png" alt="arrow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
