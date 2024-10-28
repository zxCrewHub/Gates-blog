import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DetailsInfo from "../components/DetailsInfo";
import DetailsText from "../components/DetailsText";
import { getPostByID } from "../services/fetch/fetch";

const Details = () => {
  const { dataId } = useParams();
  const [post, setPost] = useState(null);

  async function getData(id) {
    const data = await getPostByID(id);
    if (data.status === "OK") {
      setPost(data.data);
    } else {
      console.error("Ошибка:", data.error);
    }
  }

  useEffect(() => {
    if (dataId) getData(dataId);
  }, [dataId]);
  console.log(post);
  return (
    <>
      {post && (
        <div className="pt-24 ">
          <div key={post.id}>
            <DetailsInfo
              imageUrl={post.imageUrl}
              title={post.title}
              stars={post.stars}
              reads={post.reads}
            />
            <DetailsText chapters={post.chapters} />
          </div>
        </div>
      )}{" "}
    </>
  );
};
export default Details;
