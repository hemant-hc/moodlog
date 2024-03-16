"use client";

import { IEntry } from "@/interface/entry";
import { deleteEntry } from "@/utils/api";
import { MdDelete } from "react-icons/md";
import { useRouter } from "next/navigation";

type EntryCardProps = {
  entry: IEntry;
};

const EntryCard = ({ entry }: EntryCardProps) => {
  const router = useRouter();
  const date = new Date(entry.createdAt).toDateString();
  const contentWords = entry.content.split(" ");
  const contentPreview =
    contentWords.length > 15
      ? `${contentWords.slice(0, 24).join(" ")} ...`
      : entry.content;

  const handleDelete = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    await deleteEntry(entry.id);
    router.refresh();
  };

  return (
    <div className="overflow-hidden sm:h-40 sm:w-120 h-50 rounded-lg bg-bl-light1 shadow">
      <div className="flex justify-between">
        <div className="px-4 pt-5 text-slate-400 text-sm">{date}</div>
        <button
          onClick={handleDelete}
          className="bg-zinc-600 hover:scale-110  hover:bg-red-400 p-1 text-lg m-3 rounded-md"
        >
          <MdDelete />
        </button>
      </div>
      <div className="sm:text-base text-sm px-4 py-5">{contentPreview}</div>
    </div>
  );
};

export default EntryCard;
