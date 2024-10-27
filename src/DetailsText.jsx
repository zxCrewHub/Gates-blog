import React, { useState } from "react";

const DetailsText = ({ chapters }) => {
  const [chapterId, setChapterId] = useState(1);

  const chapter = chapters.find((el) => el.chapterId === chapterId.toString());
  return (
    <div className="flex items-center">
      <p className="text-xl font-bold tracking-widest">CHAPTER 1</p>
      <div className="h-px w-full bg-gray-300 border-l-[10px] border-l-black"></div>

      <p className="text-red-500">{chapter.content}</p>
      <button
        onClick={() => setChapterId(chapterId - 1)}
        disabled={chapterId === 1}
      >
        Назад
      </button>
      <button
        onClick={() => setChapterId(chapterId + 1)}
        disabled={chapters.length === chapterId}
      >
        Вперед
      </button>
    </div>
  );
};

export default DetailsText;
