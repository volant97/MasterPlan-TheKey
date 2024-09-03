import Link from "next/link";

interface Props {
  chapter: string;
  isActivated: boolean;
}

export default function ChapterBtn({ chapter, isActivated }: Props) {
  return (
    <Link href={`/chapter/${chapter}`}>
      <button
        className="flex flex-col justify-center items-center size-24 rounded-2xl border-4 border-yellow-600 bg-yellow-950 shadow-md shadow-black *:font-SDSamliphopangche cursor-pointer enabled:active:scale-95 enabled:active:bg-yellow-600 enabled:hover:scale-105 disabled:opacity-50 disabled:cursor-default"
        disabled={!isActivated}
      >
        <p className="text-2xl">{chapter}</p>
        {isActivated ? (
          <p className="text-lg">🔑</p>
        ) : (
          <p className="text-lg">🔒</p>
        )}
      </button>
    </Link>
  );
}
