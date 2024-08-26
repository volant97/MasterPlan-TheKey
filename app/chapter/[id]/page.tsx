"use client";

import CheckBoard from "@/components/chapter/CheckBoard";
import { useState } from "react";
import jsonData from "@/chapterData.json";
import { CaseData, JsonData } from "../../../types/chapterJsonData";

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
      <div className="flex flex-col gap-6">
        <div className="flex gap-3 w-full text-2xl">
          <h1 className="text-orange-400">{`사건 ${params.id}`}</h1>
          <div className="flex items-center ">
            <span className="h-6 border-l-2 border-orange-400" />
          </div>
          <h1>초승달 살인 사건</h1>
        </div>
        <div>
          <div className="flex w-full">
            <p>
              탐구 협회의 첫 의뢰로 논리탐정 로지코가 간 곳은 지금까지 본 것
              중에서 가장 어두운 숲이었습니다. 로지코는 그리자 속에 숨어서
              마녀들의 집회를 지켜보며, 자기가 제대로 숨었다고 생각했습니다.
              그래서 마녀 세 명이 다가와 동료 마녀의 살인 사건을 해결해 달라고
              부탁했을 때 충격을 받았습니다.
            </p>
          </div>
        </div>
      </div>

      {/* 2 - 용의자 */}
      <div className="flex flex-col w-full">
        <div className="relative w-full h-10">
          <h2 className="absolute left-1 -rotate-12 text-xl bg-orange-400 rounded-lg px-2 py-1">
            용의자
          </h2>
          <span className="absolute left-[5%] top-8 w-[95%] border-b-2 border-orange-400" />
        </div>
        <div>
          <div className="flex flex-col gap-1 px-2 py-4 border-b-2 border-orange-400 border-dashed">
            <h3 className="text-orange-400 text-xl">레이디 바이올렛</h3>
            <div>
              <p>사법권이 미치지 않는 세계 최대의 영역인.</p>
              <p>바이올렛 제도의 상속자.</p>
            </div>
            <div>
              <p className="text-orange-500">
                152cm / 오른손잡이 / 파란 눈 / 금방 / 처녀자리
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2 px-2 py-4 border-b-2 border-orange-400 border-dashed">
            <h3 className="text-orange-400 text-xl">모브 부사장</h3>
            <div>
              <p>텍코 퓨처스의 부사장.</p>
              <p>메타버스에 들어오라는 요청을 받으면 도망칠 것.</p>
            </div>
            <div>
              <p className="text-orange-500">
                173cm / 오른손잡이 / 어두운 녹색 눈 / 검은 머리 / 황소자리
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2 px-2 py-4">
            <h3 className="text-orange-400 text-xl">버밀리온 공작부인</h3>
            <div>
              <p>크고 오래된 비밀을 간직한 키 크고 나이 많은 여성</p>
              <p>만약 살인자라면, 이번이 처음은 아닐 것이다.</p>
            </div>
            <div>
              <p className="text-orange-500">
                175cm / 왼손잡이 / 회색 눈 / 백발 / 물고기자리
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 3 - 장소 */}
      <div className="flex flex-col w-full">
        <div className="relative w-full h-10">
          <h2 className="absolute left-1 -rotate-12 text-xl bg-orange-400 rounded-lg px-2 py-1">
            장소
          </h2>
          <span className="absolute left-[5%] top-8 w-[95%] border-b-2 border-orange-400" />
        </div>
        <div>
          <div className="flex flex-col gap-1 px-2 py-4 border-b-2 border-orange-400 border-dashed">
            <div className="flex gap-4 items-end">
              <h3 className="text-orange-400 text-xl">큰 모닥불</h3>
              <p className="text-orange-500">실외</p>
            </div>
            <div>
              <p>
                타닥타닥 타는 모닥불가에 다닥다닥 모여서 파닥파닥 춤을 추자.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-1 px-2 py-4 border-b-2 border-orange-400 border-dashed">
            <div className="flex gap-4 items-end">
              <h3 className="text-orange-400 text-xl">고대 유적</h3>
              <p className="text-orange-500">실외</p>
            </div>
            <div>
              <p>이끼에 덮여 있기는 하지만, 잘아는 그 유적이다.</p>
            </div>
          </div>
          <div className="flex flex-col gap-1 px-2 py-4">
            <div className="flex gap-4 items-end">
              <h3 className="text-orange-400 text-xl">빽빽한 숲</h3>
              <p className="text-orange-500">실외</p>
            </div>
            <div>
              <p>
                아름답고, 어둡고, 싶은 숲이지만 부엉이 울음 소리는 무심하다.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 4 - 무기 */}
      <div className="flex flex-col w-full">
        <div className="relative w-full h-10">
          <h2 className="absolute left-1 -rotate-12 text-xl bg-orange-400 rounded-lg px-2 py-1">
            무기
          </h2>
          <span className="absolute left-[5%] top-8 w-[95%] border-b-2 border-orange-400" />
        </div>
        <div>
          <div className="flex flex-col gap-1 px-2 py-4 border-b-2 border-orange-400 border-dashed">
            <div className="flex gap-4 items-end">
              <h3 className="text-orange-400 text-xl">솥</h3>
              <p className="text-orange-500">무거움</p>
            </div>
            <div>
              <p>들어올릴 수 있다면 누군가를 후려칠 수도 있다.</p>
              <p>아니면 속에 든 것을 한 모금만 먹이거나.</p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-1 px-2 py-4 border-b-2 border-orange-400 border-dashed">
            <div className="flex gap-4 items-end">
              <h3 className="text-orange-400 text-xl">나무토막</h3>
              <p className="text-orange-500">무거움</p>
            </div>
            <div>
              <p>크고 무거운 참나무 토막.</p>
              <p>누군가가 이걸로 사람을 죽이려고 나무를 죽였다.</p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-1 px-2 py-4">
            <div className="flex gap-4 items-end">
              <h3 className="text-orange-400 text-xl">빗자루</h3>
              <p className="text-orange-500">보통 무게</p>
            </div>
            <div>
              <p>
                마녀들은 이걸 타고 날아다닌다고 하지만, 로지코는 청소에만 썼다.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 5 - 단서 */}
      <div className="flex flex-col w-full">
        <div className="relative w-full h-10">
          <h2 className="absolute left-1 -rotate-12 text-xl bg-orange-400 rounded-lg px-2 py-1">
            단서
          </h2>
          <span className="absolute left-[5%] top-8 w-[95%] border-b-2 border-orange-400" />
        </div>
        <div>
          <div className="flex flex-col gap-2 px-2 py-4">
            <div className="flex gap-2">
              <span>▶</span>
              <div>
                <p>처녀 자리인 사람이 부영이 아래에 서있었다.</p>
                <p>분명 성격대로 뭔가 정리하고 있었을 것이다.</p>
              </div>
            </div>
            <div className="flex gap-2">
              <span>▶</span>
              <div>
                <p>놀랍게도 솥은 큰 모닥불에 없었다.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 6 - 진술 */}
      <div className="flex flex-col w-full">
        <div className="relative w-full h-10">
          <h2 className="absolute left-1 -rotate-12 text-xl bg-orange-400 rounded-lg px-2 py-1">
            진술
          </h2>
          <p className="absolute right-0 bottom-3 text-xs text-orange-400">
            범인은 거짓말을 합니다.
          </p>
          <span className="absolute left-[5%] top-8 w-[95%] border-b-2 border-orange-400" />
        </div>
        <div>
          <div className="flex flex-col gap-2 px-2 py-4">
            <div className="flex gap-2">
              <span>▶</span>
              <div>
                <p className="text-orange-400">레이디 바이올렛</p>
                <p>평민은 믿을 게 못 되죠.</p>
                <p>버밀리온 공작부인이 빗자루를 갖고 왔어요.</p>
              </div>
            </div>
            <div className="flex gap-2">
              <span>▶</span>
              <div>
                <p className="text-orange-400">모브 부사장</p>
                <p>난 빗자루를 가져오지 않았는데.</p>
              </div>
            </div>
            <div className="flex gap-2">
              <span>▶</span>
              <div>
                <p className="text-orange-400">버밀리온 공작부인</p>
                <p>나는 나무토막을 가져오지 않았어.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

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
