interface Props {
  id: string;
  title: string;
  description: string;
  difficulty: number;
}

export default function CasePart({
  id,
  title,
  description,
  difficulty,
}: Props) {
  return (
    <div className="flex flex-col gap-10 w-full">
      <div className="flex flex-col items-start">
        <div className="relative flex gap-3 w-full text-2xl">
          <h1 className="text-orange-400 min-w-16">{`사건 ${id}`}</h1>
          <div className="flex justify-center items-center h-full">
            <span className="h-6 border-l-2 border-orange-400 mt-1" />
          </div>
          <h1>{title}</h1>
          <p className="absolute top-8 w-16 text-base">난이도 {difficulty}</p>
        </div>
      </div>

      <div>
        <div className="flex w-full">
          <p className="break-keep">{description}</p>
        </div>
      </div>
    </div>
  );
}
