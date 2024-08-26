interface Props {
  data: string[][];
}

export default function CluePart({ data }: Props) {
  return (
    <div className="flex flex-col w-full">
      <div className="relative w-full h-10">
        <h2 className="absolute left-1 -rotate-12 text-xl bg-orange-400 rounded-lg px-2 py-1">
          단서
        </h2>
        <span className="absolute left-[5%] top-8 w-[95%] border-b-2 border-orange-400" />
      </div>
      <div>
        <div className="flex flex-col gap-2 px-2 py-4">
          {data.map((v, i) => (
            <div key={i} className="flex gap-2">
              <span>▶</span>
              <div>
                {v.map((v, i) => (
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
