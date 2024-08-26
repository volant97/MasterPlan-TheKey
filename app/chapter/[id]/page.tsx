"use client";

import CheckBoard from "@/components/chapter/CheckBoard";
import { useState } from "react";
import jsonData from "@/chapterData.json";
import { CaseData, JsonData } from "../../../types/chapterJsonData";
import CasePart from "@/components/chapter/CasePart";
import SuspectPart from "@/components/chapter/SuspectPart";
import PlacePart from "@/components/chapter/PlacePart";
import WeaponPart from "@/components/chapter/WeaponPart";
import CluePart from "@/components/chapter/CluePart";
import StatementPart from "@/components/chapter/StatementPart";

interface Props {
  params: { id: string };
}

export default function ChapterPage({ params }: Props) {
  // TODO : 용의자 장소 무기 이름, answer : props로 넘겨야 함
  // TODO : 폰트 개선
  // TODO : json 데이터 정리 및 검증
  // TODO : input select로
  // TODO : 수사시작, 각버튼에도 별 부여

  const data: CaseData = (jsonData as JsonData)[params.id];

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
    <div className="flex flex-col items-center gap-12">
      {/* 1 - 사건 */}
      <CasePart
        id={params.id}
        title={data.title}
        description={data.description}
      />

      {/* 2 - 용의자 */}
      <SuspectPart data={data.suspects} />

      {/* 3 - 장소 */}
      <PlacePart data={data.places} />

      {/* 4 - 무기 */}
      <WeaponPart data={data.weapons} />

      {/* 5 - 단서 */}
      <CluePart data={data.clues} />

      {/* 6 - 진술 */}
      <StatementPart data={data.statements} />

      {/* 7 - 정답 */}
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

      {/* 8 - 체크박스 */}
      <CheckBoard />
    </div>
  );
}
