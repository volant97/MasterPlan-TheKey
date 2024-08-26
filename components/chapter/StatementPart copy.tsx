import { Statement } from "@/types/chapterJsonData";

interface Props {
  data: Statement[];
}

export default function StatementPart({ data }: Props) {
  return (
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
  );
}
