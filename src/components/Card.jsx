import { useEffect } from "react";
import { useState } from "react";


export const Card = ({ getData }) => {
  const [data, setData] = useState([]);
  useEffect(() => {async function fromserver() {
    setData(await getData('date'))
  } fromserver();
}, []);
  return (
    <div className="h-1/2 w-30% mt-5">
      <img
        src={`url(${data[0].imageUrl})`}
        alt="picture"
        className="h-1/2 w-full"
      />
      <div className="flex-col justify-between">
        <div className="flex justify-between w-1/2 text-xs mt-2">
          <a href="#" className="text-slate-500">
            Fantasy
          </a>
          <p className="text-slate-500">1 Mounth Ago</p>
        </div>
        <h2 className="font-bold text-2xl text-slate-800 mt-2">
          Attack On Titans
        </h2>

        <p className="text-slate-500 mt-1">
          {data[0].tags[0]} • {data[0].dateOfCreate}
        </p>

        <div className="flex justify-between text-xs mt-2">
          <p className="text-slate-500">12 Min Redd</p>
          <div className="flex">
            <a href="/ditailes/1" className="font-bold text-slate-700">
              Read Full
            </a>
            <img src="/public/images/hero/arrow.png" alt="arrow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
