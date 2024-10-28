import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LineTitle } from "./ui-kit/LineTitle";

export const Articles = ({ getData }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function kakto() {
      setData(await getData("date"));
    }
    kakto();
  }, []);
  return (
    <>
      {data.length && (
        <div className="container relative bg-white py-10">
          {/* Заголовок */}
          <LineTitle>New & Trendy</LineTitle>
          {/* Контейнер статей в формате 2x2 */}
          <div className="relative grid grid-cols-2 grid-rows-2 mt-8 h-[764px]">
            {/* Верхний левый угол — изображение */}
            <div
              className="relative bg-cover bg-center opacity-100 shadow-lg h-full"
              style={{
                backgroundImage: `url(${data[0].imageUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />

            {/* Верхний правый угол — статья */}

            <div
              className="relative p-20 flex flex-col justify-between shadow-lg " // Полупрозрачный белый фон
              style={{
                backgroundImage: `url(images/hero/Rectangle.png)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute w-full h-full bg-[rgba(255,255,255,0.8)] p-6 top-0 left-0"></div>
              <div className="relative z-30">
                {" "}
                {/* Добавлено z-30 для текста */}
                <p className="text-black text-sm opacity-75 mb-1">
                  {data[0].tags[0]} • {data[0].dateOfCreate}
                </p>
                <h3 className="text-black text-xl font-semibold mb-2">
                  {data[0].title}
                </h3>
                <p className="text-black opacity-75 mb-4 h-36 text-ellipsis line-clamp-6">
                  {data[0].content}
                </p>
              </div>
              <div className="flex items-center justify-between relative z-30">
                {" "}
                {/* Добавлено z-30 для текста */}
                <p className="text-black text-sm opacity-75">
                  {data[0].reads} Reads
                </p>
                <Link
                  to={`/details/${data[0].id}`}
                  className="text-black font-semibold hover:underline flex items-center"
                >
                  Read Full ➔
                </Link>
              </div>
            </div>

            {/* Нижний левый угол — статья */}
            <div
              className="relative p-20 flex flex-col justify-between shadow-lg" // Полупрозрачный белый фон
              style={{
                backgroundImage: `url(images/hero/Rectangle.png)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute w-full h-full bg-[rgba(255,255,255,0.8)] p-6 top-0 left-0"></div>
              <div className="relative z-30">
                {" "}
                {/* Добавлено z-30 для текста */}
                <p className="text-black text-sm opacity-75 mb-1">
                  {data[1].tags[0]} • {data[1].dateOfCreate}
                </p>
                <h3 className="text-black text-xl font-semibold mb-2">
                  {data[1].title}
                </h3>
                <p className="text-black opacity-75 mb-4 h-36 text-ellipsis line-clamp-6">
                  {data[1].content}
                </p>
              </div>
              <div className="flex items-center justify-between relative z-30">
                {" "}
                {/* Добавлено z-30 для текста */}
                <p className="text-black text-sm opacity-75">
                  {data[1].reads} Reads
                </p>
                <Link
                  to={`/details/${data[1].id}`}
                  className="text-black font-semibold hover:underline flex items-center"
                >
                  Read Full ➔
                </Link>
              </div>
            </div>
            {/* Нижний правый угол — изображение */}
            <div
              className="relative bg-cover bg-center opacity-100 shadow-lg h-full"
              style={{
                backgroundImage: `url(${data[1].imageUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </div>
        </div>
      )}
    </>
  );
};
