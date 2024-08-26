import { Weapon } from "@/types/chapterJsonData";

interface Props {
  data: Weapon[];
}

export default function WeaponPart({ data }: Props) {
  return (
    <div className="flex flex-col w-full">
      <div className="relative w-full h-10">
        <h2 className="absolute left-1 -rotate-12 text-xl bg-orange-400 rounded-lg px-2 py-1">
          무기
        </h2>
        <span className="absolute left-[5%] top-8 w-[95%] border-b-2 border-orange-400" />
      </div>
      <div>
        {data.map((v, i) => (
          <div
            key={i}
            className="flex flex-col gap-1 px-2 py-4 border-b-2 border-orange-400 border-dashed last:border-0"
          >
            <div className="flex gap-4 items-end">
              <h3 className="text-orange-400 text-xl">{v.name}</h3>
              <p className="text-orange-500">{v.weight}</p>
            </div>
            <div>
              {v.description.map((v, i) => (
                <p key={i}>{v}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
