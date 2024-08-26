interface Props {
  id: string;
  title: string;
  description: string;
}

export default function CasePart({ id, title, description }: Props) {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex gap-3 w-full text-2xl">
        <h1 className="text-orange-400">{`사건 ${id}`}</h1>
        <div className="flex items-center ">
          <span className="h-6 border-l-2 border-orange-400" />
        </div>
        <h1>{title}</h1>
      </div>
      <div>
        <div className="flex w-full">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}
