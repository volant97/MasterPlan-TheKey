import { Suspect } from "@/types/chapterJsonData";

interface Props {
  data: Suspect[];
}

export default function SuspectPart({ data }: Props) {
  return (
    <div className="flex flex-col w-full">
      <div className="relative w-full h-10">
        <h2 className="absolute left-1 -rotate-12 text-xl bg-orange-400 rounded-lg px-2 py-1">
          용의자
        </h2>
        <span className="absolute left-[5%] top-8 w-[95%] border-b-2 border-orange-400" />
      </div>
      <div>
        {data.map((v, i) => {
          return (
            <div
              key={i}
              className="flex flex-col gap-1 px-2 py-4 border-b-2 border-orange-400 border-dashed last:border-0"
            >
              <h3 className="text-orange-400 text-xl">{v.name}</h3>
              <div>
                <p>{v.description}</p>
                <p>{v.details}</p>
              </div>
              <div>
                <p className="text-orange-500">{v.attributes}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
