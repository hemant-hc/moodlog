import { IEntry } from "@/interface/entry";

type EntryCardProps = {
  entry: IEntry;
};

const EntryCard = ({ entry }: EntryCardProps) => {
  const date = new Date(entry.createdAt).toDateString();
  const contentWords = entry.content.split(" ");
  const contentPreview =
    contentWords.length > 15
      ? `${contentWords.slice(0, 24).join(" ")} ...`
      : entry.content;

  return (
    <div className="overflow-hidden h-40 w-120 rounded-lg bg-bl-light1 shadow">
      <div className="px-4 pt-5 text-slate-400 text-sm">{date}</div>
      <div className="px-4 py-5">{contentPreview}</div>
    </div>
  );
};

export default EntryCard;
