import { Hero } from "../components/Hero";
import Trandingnow from "../components/Trandingnow"
import { getAllPosts } from "../services/fetch/fetch";
import { Articles } from "../components/Articles ";

function Main() {
  async function getData(sort = "", tag = "") {
    const data = await getAllPosts(sort, tag);
    let result = null;
    if (data.status === "OK") {
      result = data.data;
    } else {
      result = data.error;
    }
    return (result);
  }
  return (
    <div>
<Trandingnow></Trandingnow>

      <Hero></Hero>
      <Articles getData={getData} />
    </div>
  );
}

export default Main;
