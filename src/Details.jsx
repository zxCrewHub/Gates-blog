import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DetailsInfo from "./DetailsInfo";
import DetailsText from "./DetailsText";
import { getPostByID } from "./services/fetch/fetch";

// const Details = () => {
//   const { dataId } = useParams();
//   const data = {
//     chapters: [
//       {
//         id: "1",
//         title: "Attack on Titan",
//         reads: 1000000,
//         stars: 5,
//         content:
//           "Chapter 1 content of Attack on Titan. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tempor erat libero, in consequat est viverra in.",
//         imageUrl: "/images/hero/hero_bg.png",
//         chapters: [
//           {
//             chapterId: "1",
//             title: "Chapter 1 - The Fall of Shiganshina",
//             content:
//               "In this chapter, the Titans breach the outer walls, and Eren witnesses the fall of his home.",
//             stars: 5,
//           },
//           {
//             chapterId: "2",
//             title: "Chapter 2 - That Day",
//             content:
//               "Eren vows to kill all Titans after the death of his mother. He enlists in the military.",
//             stars: 4.9,
//           },
//         ],
//       },
//       {
//         id: "2",
//         title: "Dr. Stone",
//         reads: 850000,
//         stars: 4.5,
//         content:
//           "Chapter 1 content of Dr. Stone. Humanity has been petrified for thousands of years. Now, Senku begins the journey to revive the world.",
//         imageUrl: "/images/hero/hero_bg.png",
//         chapters: [
//           {
//             chapterId: "1",
//             title: "Chapter 1 - Stone World",
//             content:
//               "Senku revives after 3,700 years of petrification, and he starts planning to rebuild civilization.",
//             stars: 4.7,
//           },
//           {
//             chapterId: "2",
//             title: "Chapter 2 - King of the Stone World",
//             content:
//               "Senku and Taiju start reviving more people, but some don't agree with their vision.",
//             stars: 4.5,
//           },
//         ],
//       },
//       {
//         id: "3",
//         title: "Sword Art Online",
//         reads: 920000,
//         stars: 4.8,
//         content:
//           "Chapter 1 content of Sword Art Online. Kirito and thousands of players are trapped inside a virtual reality game, where dying in the game means dying in real life.",
//         imageUrl: "/images/hero/hero_bg.png",
//         chapters: [
//           {
//             chapterId: "1",
//             title: "Chapter 1 - The World of Swords",
//             content:
//               "Kirito enters Sword Art Online and quickly realizes the game is more dangerous than expected.",
//             stars: 4.8,
//           },
//           {
//             chapterId: "2",
//             title: "Chapter 2 - Beater",
//             content:
//               "Kirito gains the nickname 'Beater' after defeating high-level bosses with his knowledge and skill.",
//             stars: 4.7,
//           },
//         ],
//       },
//       {
//         id: "4",
//         title: "Demon Slayer",
//         reads: 780000,
//         stars: 4.9,
//         content:
//           "Chapter 1 content of Demon Slayer. Tanjiro Kamado's family is slaughtered by demons, and his sister Nezuko is turned into a demon.",
//         imageUrl: "/images/hero/hero_bg.png",
//         chapters: [
//           {
//             chapterId: "1",
//             title: "Chapter 1 - Cruelty",
//             content:
//               "Tanjiro begins his journey as a demon slayer after his family is killed by demons.",
//             stars: 4.9,
//           },
//           {
//             chapterId: "2",
//             title: "Chapter 2 - Trainer",
//             content:
//               "Tanjiro finds a trainer to help him become stronger and master the art of demon slaying.",
//             stars: 4.8,
//           },
//         ],
//       },
//       {
//         id: "5",
//         title: "My Hero Academia",
//         reads: 670000,
//         stars: 4.7,
//         content:
//           "Chapter 1 content of My Hero Academia. In a world where most people have superpowers, Izuku Midoriya is born powerless but dreams of becoming a hero.",
//         imageUrl: "/images/hero/hero_bg.png",
//         chapters: [
//           {
//             chapterId: "1",
//             title: "Chapter 1 - Izuku Midoriya: Origin",
//             content:
//               "Izuku is born without a Quirk but still dreams of becoming the greatest hero.",
//             stars: 4.7,
//           },
//           {
//             chapterId: "2",
//             title: "Chapter 2 - Roaring Muscles",
//             content:
//               "Izuku begins training with All Might to inherit the One For All Quirk and become a true hero.",
//             stars: 4.6,
//           },
//         ],
//       },
//     ],
//   };

//   const chapter = data.chapters.find((chapter) => chapter.id === dataId);
//   return (
//     <div className="pt-24">
//       <DetailsInfo
//         imageUrl={chapter.imageUrl}
//         title={chapter.title}
//         stars={chapter.stars}
//         reads={chapter.reads}
//       />
//       <DetailsText chapters={chapter.chapters} />
//     </div>
//   );
// };

// export default Details;

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
