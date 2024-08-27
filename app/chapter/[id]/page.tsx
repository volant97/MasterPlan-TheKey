import CheckBoard from "@/components/chapter/CheckBoard";
import jsonData from "@/chapterData.json";
import { CaseData, JsonData } from "../../../types/chapterJsonData";
import CasePart from "@/components/chapter/CasePart";
import SuspectPart from "@/components/chapter/SuspectPart";
import PlacePart from "@/components/chapter/PlacePart";
import WeaponPart from "@/components/chapter/WeaponPart";
import CluePart from "@/components/chapter/CluePart";
import StatementPart from "@/components/chapter/StatementPart";
import AnswerPart from "@/components/chapter/AnswerPart";

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
      <AnswerPart data={data.answers} />

      {/* 8 - 체크박스 */}
      <CheckBoard
        suspects={data.suspects}
        places={data.places}
        weapons={data.weapons}
        checkboardAnswers={data.checkboardAnswers}
      />

      {/* 해설 */}
    </div>
  );
}
