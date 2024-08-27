import ChapterBtn from "@/components/main/ChapterBtn";

export default function MainPage() {
  return (
    <div className="flex justify-center items-center">
      <div className="grid grid-cols-3 grid-flow-row gap-4">
        <ChapterBtn chapter="test1" isActivated={true} />
        <ChapterBtn chapter="test2" isActivated={true} />
        <ChapterBtn chapter="2" isActivated={false} />
        <ChapterBtn chapter="3" isActivated={false} />
        <ChapterBtn chapter="4" isActivated={false} />
        <ChapterBtn chapter="5" isActivated={false} />
        <ChapterBtn chapter="6" isActivated={false} />
      </div>
    </div>
  );
}
