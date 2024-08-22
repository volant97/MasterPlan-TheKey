"use client";

import { redirect } from "next/navigation";

interface Props {
  chapter: string;
}

export default function ChapterBtn({ chapter }: Props) {
  const btnClickHandler = () => {
    console.log(chapter);
    redirect(`/chapter/${chapter}`);
  };

  return (
    <button
      onClick={btnClickHandler}
      className="flex flex-col justify-center items-center size-24 rounded-2xl border-4 border-yellow-600 bg-yellow-950 shadow-md shadow-black *:font-SDSamliphopangche cursor-pointer active:scale-95 active:bg-yellow-600"
    >
      <p className="text-2xl">{chapter}</p>
      <p className="text-lg">☆☆☆</p>
    </button>
  );
}
