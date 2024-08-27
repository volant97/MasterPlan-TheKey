"use client";

import { Answers } from "@/types/chapterJsonData";
import { useState } from "react";

interface Props {
  data: Answers;
}

// TODO : form으로 변경

export default function AnswerPart({ data }: Props) {
  const [feedBack, setFeedBack] = useState<number | null>(null);

  const submitBtnClickHandler = () => {
    console.log(feedBack);
    if (true) {
      setFeedBack(1);
    } else {
      setFeedBack(0);
    }
  };

  return (
    <div className="flex flex-col w-full mb-6">
      <div className="relative w-full h-10">
        <h2 className="absolute left-1 -rotate-12 text-xl bg-orange-400 rounded-lg px-2 py-1">
          정답
        </h2>
        <p className="absolute right-0 bottom-3 text-xs text-orange-400">
          추리하여 찾아낸 범인을 적어주세요!
        </p>
        <span className="absolute left-[5%] top-8 w-[95%] border-b-2 border-orange-400" />
      </div>
      <div className="flex flex-col gap-8">
        <div>
          <div className="flex flex-col gap-6 px-2 py-4">
            <div className="flex justify-between gap-2">
              <h3 className="w-28 text-orange-400 text-2xl">누가?</h3>
              <input
                type="text"
                placeholder="정답 입력"
                className="w-[60%] bg-transparent border-b-2 border-blue-500 pl-2 outline-none"
              />
            </div>
            <div className="flex justify-between gap-2">
              <h3 className="w-28 text-orange-400 text-2xl">무엇으로?</h3>
              <input
                type="text"
                placeholder="정답 입력"
                className="w-[60%] bg-transparent border-b-2 border-blue-500 pl-2 outline-none"
              />
            </div>
            <div className="flex justify-between gap-2">
              <h3 className="w-28 text-orange-400 text-2xl">어디에서?</h3>
              <input
                type="text"
                placeholder="정답 입력"
                className="w-[60%] bg-transparent border-b-2 border-blue-500 pl-2 outline-none"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <button
            onClick={submitBtnClickHandler}
            className="w-32 h-12 text-orange-400 hover:bg-orange-500 hover:text-white hover:scale-105 active:scale-95 rounded-lg border-2 border-orange-400"
          >
            정답 제출
          </button>
        </div>

        {feedBack !== null && (
          <div className="flex flex-col items-center">
            {feedBack === 1 ? (
              <>
                <p>정답입니다!</p>
                <p>체크박스 100%까지 도전해볼까요?</p>
              </>
            ) : (
              <>
                <p>아쉽네요...</p>
                <p>다시 한번만 더 추리해볼까요?!</p>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
