import React, { useState } from "react";
import Chapter from "./components/ui-kit/Chapter";

const DetailsText = ({ chapters }) => {
  const [chapterIndex, setChapterIndex] = useState(0);

  return (
    <div className="container">
      <Chapter
        chapter={chapters[chapterIndex].title}
        isRightDirection={false}
      />
      <p className="text-2xl min-h-[400px] py-6">
        {chapters[chapterIndex].content}
      </p>
      <Chapter
        chapter={
          chapters[chapterIndex + 1]?.title || chapters[chapterIndex - 1].title
        }
        isRightDirection={true}
      />
      <div className="flex justify-end gap-3 mt-2 ">
        <button
          className="flex items-center justify-center w-[31px] h-[31px] border-2 border-black rounded-full"
          onClick={() => setChapterIndex(chapterIndex - 1)}
          disabled={chapterIndex < 1}
        >
          🠔
        </button>
        <button
          className="flex items-center justify-center w-[31px] h-[31px] border-2 border-black rounded-full"
          onClick={() => setChapterIndex(chapterIndex + 1)}
          disabled={chapters.length === chapterIndex - 1}
        >
          🠖
        </button>
      </div>
    </div>
  );
};

export default DetailsText;
