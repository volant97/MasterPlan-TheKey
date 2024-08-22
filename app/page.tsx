import ChapterBtn from "@/components/mainpage/ChapterBtn";

export default function MainPage() {
  return (
    <div className="flex flex-wrap justify-center items-center gap-4 m-2">
      <ChapterBtn chapter="1" />
      <ChapterBtn chapter="2" />
      <ChapterBtn chapter="3" />
      <ChapterBtn chapter="4" />
      <ChapterBtn chapter="5" />
      <ChapterBtn chapter="6" />
    </div>
  );
}
