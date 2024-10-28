import { useEffect } from "react";
import { Hero } from "../components/Hero";
import { getAllPosts } from "../services/fetch/fetch";import Trandingnow from "../components/Trandingnow"


function Main() {
  async function getData(sort = "", tag = "") {
    const data = await getAllPosts(sort, tag);
    let result = null;
    if (data.status === "OK") {
      result = data.data;
    } else {
      result = data.error;
    }
    console.log(result);
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <Hero></Hero><Trandingnow></Trandingnow>
    </div>
  );
}

export default Main;
