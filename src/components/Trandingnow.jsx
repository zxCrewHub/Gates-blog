import { useState, useEffect } from "react";
import Card from "./Card";
import { LineTitle } from "./ui-kit/LineTitle";

function Trandingnow({ getData }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getCards() {
      setData(await getData("reads "));
    }
    getCards();
  }, []);
  return (
    <section className="container py-10">
      <div className="w-full ">
        <LineTitle>Tranding now</LineTitle>

        <div className="flex justify-center gap-x-28 gap-y-10 flex-wrap w-full ">
          {data.length && data.map((e) => <Card key={e.id} obj={e} />)}
        </div>
        <div></div>
      </div>
    </section>
  );
}

export default Trandingnow;
