const box0 =
  "flex justify-center items-center min-w-8 min-h-8 border-[1px] border-blue-600";

interface Props {
  v: number;
  onClick: () => void;
}

export default function CheckBtn({ v, onClick }: Props) {
  let text = "";

  if (v === 1) text = "v";
  if (v === 2) text = "-";

  return (
    <button className={`${box0} active:bg-blue-600`} onClick={onClick}>
      {text}
    </button>
  );
}
