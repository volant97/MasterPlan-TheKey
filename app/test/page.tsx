"use client";
import jsonData from "@/chapterData.json";

export default function page() {
  return (
    <div>
      <div>{jsonData[0].checkboardAnswers.answer1}</div>
    </div>
  );
}
