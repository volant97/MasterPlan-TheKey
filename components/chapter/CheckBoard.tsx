"use client";

import { useState } from "react";
import CheckBtn from "@/components/chapter/CheckBtn";
import {
  CheckboardAnswers,
  Place,
  Suspect,
  Weapon,
} from "@/types/chapterJsonData";

// TODO : CheckBoard 안에 tailwind CSS components로 저장해야함
// TODO : 색상도 테마 저장
// TODO : 하단 Nav 활용해서 체크박스를 모달 토글로 활용해도 좋을듯
// TODO : -(x) 채우기 버튼
// TODO : 정답코드 생성 페이지 제작

const box1 = "flex w-full";
const box2 = "flex w-full";
const box2_col = "flex flex-col w-full";
const box2_grid = "grid grid-cols-3 grid-flow-row w-full";
const box3 = "flex w-full";
const box3_col = "flex flex-col w-full";
const box0 =
  "flex justify-center items-center w-full h-10 text-orange-400 text-xs break-keep";
const center = "justify-center items-center";

interface Props {
  suspects: Suspect[];
  places: Place[];
  weapons: Weapon[];
  checkboardAnswers: CheckboardAnswers;
}

// TODO : 표 인물, 장소, 무기 등 클릭 시 배경색상 변경

export default function CheckBoard({
  suspects,
  places,
  weapons,
  checkboardAnswers,
}: Props) {
  const [arr1, setArr1] = useState<number[]>([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [arr2, setArr2] = useState<number[]>([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [arr3, setArr3] = useState<number[]>([0, 0, 0, 0, 0, 0, 0, 0, 0]);

  const answer1 = checkboardAnswers.answer1;
  const answer2 = checkboardAnswers.answer2;
  const answer3 = checkboardAnswers.answer3;

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

  const fillBtnClickHandler = () => {
    setArr1(arr1.map((v) => (v === 0 ? 2 : v)));
    setArr2(arr2.map((v) => (v === 0 ? 2 : v)));
    setArr3(arr3.map((v) => (v === 0 ? 2 : v)));
  };

  const clearBtnClickHandler = () => {
    if (confirm("체크보드의 내용을 모두 지우겠습니까?")) {
      setArr1(arr1.map((v) => 0));
      setArr2(arr2.map((v) => 0));
      setArr3(arr3.map((v) => 0));
    }
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
    <div className="flex flex-col gap-10 w-full">
      <div className="flex flex-col w-full h-full *:text-sm *:text-balance *:text-center">
        {/* 1단 */}
        <div className={`${box1}`}>
          {/* 1구역 */}
          <div className={`${box2_col} !w-2/3`}></div>

          {/* 2구역 */}
          <div className={`${box2_col}`}>
            <div className={`${box3} ${center} text-gray-400`}>용의자</div>
            <div className={`${box3}`}>
              <div className={`${box0}`}>{suspects[0].shortened}</div>
              <div className={`${box0}`}>{suspects[1].shortened}</div>
              <div className={`${box0}`}>{suspects[2].shortened}</div>
            </div>
          </div>

          {/* 3구역 */}
          <div className={`${box2_col}`}>
            <div className={`${box3} ${center} text-gray-400`}>장소</div>
            <div className={`${box3}`}>
              <div className={`${box0}`}>{places[0].shortened}</div>
              <div className={`${box0}`}>{places[1].shortened}</div>
              <div className={`${box0}`}>{places[2].shortened}</div>
            </div>
          </div>
        </div>

        {/* 2단 */}
        <div className={`${box1}`}>
          {/* 4구역 */}
          <div className={`${box2} !w-2/3`}>
            <div className={`${box3} ${center} !w-1/2 text-gray-400`}>무기</div>
            <div className={`${box3_col}`}>
              <div className={`${box0}`}>{weapons[0].shortened}</div>
              <div className={`${box0}`}>{weapons[1].shortened}</div>
              <div className={`${box0}`}>{weapons[2].shortened}</div>
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
                <div className={`${box0}`}>{places[0].shortened}</div>
                <div className={`${box0}`}>{places[1].shortened}</div>
                <div className={`${box0}`}>{places[2].shortened}</div>
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
              className={`${box2_col} ${center} gap-3 border-2 border-blue-600 border-l-[1px] border-t-[1px] border-r-neutral-900 border-b-neutral-900`}
            >
              <button
                onClick={fillBtnClickHandler}
                className={`${box0} !w-2/3 hover:bg-orange-500 hover:text-white hover:scale-105 active:scale-95 rounded-lg border-2 border-orange-400`}
              >
                - 채우기
              </button>
              <button
                onClick={clearBtnClickHandler}
                className={`${box0} !w-2/3 hover:bg-orange-500 hover:text-white hover:scale-105 active:scale-95 rounded-lg border-2 border-orange-400`}
              >
                모두 지우기
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <button
          onClick={submitBtnClickHandler}
          className={`w-32 h-12 text-orange-400 hover:bg-orange-500 hover:text-white hover:scale-105 active:scale-95 rounded-lg border-2 border-orange-400`}
        >
          100% 도전
        </button>
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
