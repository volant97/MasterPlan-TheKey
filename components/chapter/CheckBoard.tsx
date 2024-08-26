"use client";

import { useState } from "react";
import CheckBtn from "@/components/chapter/CheckBtn";

// TODO : CheckBoard 안에 tailwind CSS components로 저장해야함
// TODO : 색상도 테마 저장
// TODO : 하단 Nav 활용해서 체크박스를 모달 토글로 활용해도 좋을듯
// TODO : -(x) 채우기 버튼
// TODO : arr usestate 객체로
// TODO : 정답코드 생성 페이지 제작

const box1 = "flex w-full";
const box2 = "flex w-full";
const box2_col = "flex flex-col w-full";
const box2_grid = "grid grid-cols-3 grid-flow-row w-full";
const box3 = "flex w-full";
const box3_col = "flex flex-col w-full";
const box0 =
  "flex justify-center items-center w-full h-10 text-orange-400 text-xs";
const center = "justify-center items-center";

export default function CheckBoard() {
  const [arr1, setArr1] = useState<number[]>([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [arr2, setArr2] = useState<number[]>([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [arr3, setArr3] = useState<number[]>([0, 0, 0, 0, 0, 0, 0, 0, 0]);

  const answer1 = [2, 2, 1, 2, 1, 2, 1, 2, 2];
  const answer2 = [2, 1, 2, 1, 2, 2, 2, 2, 1];
  const answer3 = [2, 1, 2, 2, 2, 1, 1, 2, 2];

  const [feedBack, setFeedBack] = useState<number | null>(null);

  // 유니언 타입 사용하여 typescript 에러 방지
  const increaseValue = (arrNum: 1 | 2 | 3, index: number) => {
    // 배열과 상태 업데이트 함수를 매핑
    const stateMap = {
      1: { arr: arr1, setter: setArr1 },
      2: { arr: arr2, setter: setArr2 },
      3: { arr: arr3, setter: setArr3 },
    };

    // 선택된 배열과 상태 업데이트 함수 가져와서 구조분해할당
    const { arr, setter } = stateMap[arrNum];

    // 상태 업데이트
    setter(arr.map((v, i) => (i === index ? (v === 2 ? 0 : v + 1) : v)));
  };

  const submitBtnClickHandler = () => {
    // 비교 방법1) JSON.stringify(arr1) === JSON.stringify(answer) : 간결함, 다차원 배열 비교
    // 비교 방법2) arr1.every((v, i) => v === answer[i]) : 성능, 정밀한 비교
    if (
      arr1.every((v, i) => v === answer1[i]) &&
      arr2.every((v, i) => v === answer2[i]) &&
      arr3.every((v, i) => v === answer3[i])
    ) {
      setFeedBack(1);
    } else {
      setFeedBack(0);
    }
  };

  return (
    <div className="flex flex-col gap-8 w-full">
      <div className="flex flex-col w-full h-full *:text-sm *:text-balance *:text-center">
        {/* 1단 */}
        <div className={`${box1}`}>
          {/* 1구역 */}
          <div className={`${box2_col} !w-2/3`}></div>

          {/* 2구역 */}
          <div className={`${box2_col}`}>
            <div className={`${box3} ${center} text-gray-400`}>용의자</div>
            <div className={`${box3}`}>
              <div className={`${box0}`}>레이디</div>
              <div className={`${box0}`}>모브</div>
              <div className={`${box0}`}>버밀리온</div>
            </div>
          </div>

          {/* 3구역 */}
          <div className={`${box2_col}`}>
            <div className={`${box3} ${center} text-gray-400`}>장소</div>
            <div className={`${box3}`}>
              <div className={`${box0}`}>모닥불</div>
              <div className={`${box0}`}>유적</div>
              <div className={`${box0}`}>숲</div>
            </div>
          </div>
        </div>

        {/* 2단 */}
        <div className={`${box1}`}>
          {/* 4구역 */}
          <div className={`${box2} !w-2/3`}>
            <div className={`${box3} ${center} !w-1/2 text-gray-400`}>무기</div>
            <div className={`${box3_col}`}>
              <div className={`${box0}`}>솥</div>
              <div className={`${box0}`}>나무</div>
              <div className={`${box0}`}>빗자루</div>
            </div>
          </div>

          {/* 5구역 */}
          <div
            className={`${box2_grid} border-2 border-blue-600 border-r-[1px] border-b-[1px]`}
          >
            {arr1.map((v, i) => (
              <CheckBtn key={i} v={v} onClick={() => increaseValue(1, i)} />
            ))}
          </div>

          {/* 6구역 */}
          <div
            className={`${box2_grid} border-2 border-blue-600 border-l-[1px] border-b-[1px]`}
          >
            {arr2.map((v, i) => (
              <CheckBtn key={i} v={v} onClick={() => increaseValue(2, i)} />
            ))}
          </div>
        </div>

        {/* 3단 */}
        <div className="flex">
          <div className={`${box1}`}>
            {/* 7구역 */}
            <div className={`${box2} !w-2/3`}>
              <div className={`${box3} ${center} !w-1/2 text-gray-400`}>
                장소
              </div>
              <div className={`${box3_col}`}>
                <div className={`${box0}`}>모닥불</div>
                <div className={`${box0}`}>유적</div>
                <div className={`${box0}`}>숲</div>
              </div>
            </div>

            {/* 8구역 */}
            <div
              className={`${box2_grid} border-2 border-blue-600 border-t-[1px] border-r-[1px]`}
            >
              {arr3.map((v, i) => (
                <CheckBtn key={i} v={v} onClick={() => increaseValue(3, i)} />
              ))}
            </div>

            {/* 9구역 */}
            <div
              className={`${box2_col} ${center} border-2 border-blue-600 border-l-[1px] border-t-[1px] border-r-neutral-900 border-b-neutral-900`}
            >
              <button
                onClick={submitBtnClickHandler}
                className={`${box0} !w-2/3 hover:bg-orange-500 hover:text-white hover:scale-105 active:scale-95 rounded-lg border-2 border-orange-400`}
              >
                100% 도전
              </button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="flex flex-col items-center">
          {feedBack === 1 ? (
            <>
              <p>100%!!!</p>
              <p>체크박스까지 전부 맞추셨군요!</p>
            </>
          ) : feedBack === 0 ? (
            <>
              <p>아쉽네요</p>
              <p>다시 한번 100% 도전해볼까요?!</p>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
}
