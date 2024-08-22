import ChapterBtn from "@/components/mainpage/ChapterBtn";

export default function MainPage() {
  return (
    <div className="flex flex-wrap justify-center items-center gap-4 m-2">
      <ChapterBtn chapter="1" isActivated={true} />
      <ChapterBtn chapter="2" isActivated={false} />
      <ChapterBtn chapter="3" isActivated={false} />
      <ChapterBtn chapter="4" isActivated={false} />
      <ChapterBtn chapter="5" isActivated={false} />
      <ChapterBtn chapter="6" isActivated={false} />
    </div>
  );
}
