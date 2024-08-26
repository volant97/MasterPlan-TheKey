import jsonData from "@/chapterData.json";

export default function page() {
  return <div>{jsonData[0].case}</div>;
}
