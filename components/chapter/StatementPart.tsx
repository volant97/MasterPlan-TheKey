import { Statement } from "@/types/chapterJsonData";

interface Props {
  data: Statement[];
  difficulty: number;
}

export default function StatementPart({ data, difficulty }: Props) {
  return (
    <div className="flex flex-col w-full">
      <div className="relative w-full h-10">
        <h2 className="absolute left-1 -rotate-12 text-xl bg-orange-400 rounded-lg px-2 py-1">
          진술
        </h2>
        {difficulty === 2 || difficulty === 4 ? (
          <p className="absolute right-0 bottom-3 text-xs text-orange-400">
            범인은 거짓말을 합니다.
          </p>
        ) : null}

        <span className="absolute left-[5%] top-8 w-[95%] border-b-2 border-orange-400" />
      </div>
      <div>
        <div className="flex flex-col gap-2 px-2 py-4">
          {data.map((v, i) => (
            <div key={i} className="flex gap-2">
              <span>▶</span>
              <div>
                <p className="text-orange-400">{v.person}</p>
                {v.text.map((v, i) => (
                  <p key={i}>{v}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
