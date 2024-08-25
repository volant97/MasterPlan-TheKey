"use client";

import CheckBtn from "@/components/chapter/CheckBtn";
import { useState } from "react";

const box1 = "flex w-full border-2 border-white";
const box2 = "flex w-full border-2 border-red-400";
const box2_col = "flex flex-col w-full border-2 border-red-400";
const box2_grid =
  "grid grid-cols-3 grid-flow-row w-full border-2 border-red-400";
const box3 = "flex w-full border-2 border-red-700";
const box3_col = "flex flex-col w-full border-2 border-red-700";
const box0 =
  "flex justify-center items-center w-full h-10 border-2 border-blue-700";

const center = "justify-center items-center";

interface Props {
  params: { id: number };
}

export default function C1Page({ params }: Props) {
  const [arr1, setArr1] = useState<number[]>([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [arr2, setArr2] = useState<number[]>([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [arr3, setArr3] = useState<number[]>([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const answer1 = [1, 1, 2, 0, 0, 0, 0, 0, 0];
  const answer2 = [1, 0, 0, 0, 0, 0, 0, 0, 0];
  const answer3 = [1, 0, 0, 0, 0, 0, 0, 0, 0];

  // 기존 함수
  // const increaseValue = (arrNum: number, index: number) => {
  //   const callback = (prev: number[]) => {
  //     return prev.map((v, i) => {
  //       return i === index ? (v === 2 ? (v = 0) : v + 1) : v;
  //     });
  //   };
  //   if (arrNum === 1) {
  //     setArr1(callback);
  //   }
  //   if (arrNum === 2) {
  //     setArr2(callback);
  //   }
  //   if (arrNum === 3) {
  //     setArr3(callback);
  //   }
  // };

  // 개선 된 함수
  // 유니언 타입 사용하여 typescript 에러 방지
  const increaseValue = (arrNum: 1 | 2 | 3, index: number) => {
    // 배열과 상태 업데이트 함수를 매핑
    const stateMap = {
      1: { arr: arr1, setter: setArr1 },
      2: { arr: arr2, setter: setArr2 },
      3: { arr: arr3, setter: setArr3 },
    };

    // 선택된 배열과 상태 업데이트 함수 가져오기
    const { arr, setter } = stateMap[arrNum];

    // 상태 업데이트
    setter(arr.map((v, i) => (i === index ? (v === 2 ? 0 : v + 1) : v)));
  };

  const submitBtnClickHandler = () => {
    console.log(arr1, arr2, arr3);
    // 비교 방법1) JSON.stringify(arr1) === JSON.stringify(answer) : 간결함, 다차원 배열 비교
    // 비교 방법2) arr1.every((v, i) => v === answer[i]) : 성능, 정밀한 비교
    if (
      arr1.every((v, i) => v === answer1[i]) &&
      arr2.every((v, i) => v === answer2[i]) &&
      arr3.every((v, i) => v === answer3[i])
    ) {
      console.log(arr1);
      console.log("정답");
    } else {
      console.log("오답");
    }
  };

  return (
    <div className="flex flex-col items-center gap-6">
      <h1 className="text-2xl">{`사건 ${params.id}`}</h1>
      <div className="flex flex-col w-full h-full">
        {/* 1단 */}
        <div className={`${box1}`}>
          {/* 1구역 */}
          <div className={`${box2_col}`}></div>

          {/* 2구역 */}
          <div className={`${box2_col}`}>
            <div className={`${box3} ${center}`}>용의자</div>
            <div className={`${box3}`}>
              <div className={`${box0}`}>브라운</div>
              <div className={`${box0}`}>버밀</div>
              <div className={`${box0}`}>아주어</div>
            </div>
          </div>

          {/* 3구역 */}
          <div className={`${box2_col}`}>
            <div className={`${box3} ${center}`}>장소</div>
            <div className={`${box3}`}>
              <div className={`${box0}`}>마당</div>
              <div className={`${box0}`}>차고</div>
              <div className={`${box0}`}>침실</div>
            </div>
          </div>
        </div>

        {/* 2단 */}
        <div className={`${box1}`}>
          {/* 4구역 */}
          <div className={`${box2}`}>
            <div className={`${box3} ${center}`}>무기</div>
            <div className={`${box3_col}`}>
              <div className={`${box0}`}>보드</div>
              <div className={`${box0}`}>수정</div>
              <div className={`${box0}`}>암호책</div>
            </div>
          </div>

          {/* 5구역 */}
          <div className={`${box2_grid}`}>
            {arr1.map((v, i) => (
              <CheckBtn key={i} v={v} onClick={() => increaseValue(1, i)} />
            ))}
          </div>

          {/* 6구역 */}
          <div className={`${box2_grid}`}>
            {arr2.map((v, i) => (
              <CheckBtn key={i} v={v} onClick={() => increaseValue(2, i)} />
            ))}
          </div>
        </div>

        {/* 3단 */}
        <div className="flex">
          <div className={`${box1}`}>
            {/* 7구역 */}
            <div className={`${box2}`}>
              <div className={`${box3} ${center}`}>장소</div>
              <div className={`${box3_col}`}>
                <div className={`${box0}`}>마당</div>
                <div className={`${box0}`}>차고</div>
                <div className={`${box0}`}>침실</div>
              </div>
            </div>

            {/* 8구역 */}
            <div className={`${box2_grid}`}>
              {arr3.map((v, i) => (
                <CheckBtn key={i} v={v} onClick={() => increaseValue(3, i)} />
              ))}
            </div>

            {/* 9구역 */}
            <div className={`${box2_col} ${center}`}>
              <button
                onClick={submitBtnClickHandler}
                className={`${box0} hover:bg-blue-400`}
              >
                제출
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
