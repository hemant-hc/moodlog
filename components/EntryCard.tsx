"use client";

import { IEntry } from "@/interface/entry";
import { deleteEntry } from "@/utils/api";
import { MdDelete } from "react-icons/md";

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

  const handleDelete = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    await deleteEntry(entry.id);
    console.log("hi");
  };

  return (
    <div className="overflow-hidden h-40 w-120 rounded-lg bg-bl-light1 shadow">
      <div className="flex justify-between">
        <div className="px-4 pt-5 text-slate-400 text-sm">{date}</div>
        <button
          onClick={handleDelete}
          className="bg-red-400 p-2 text-lg m-3 rounded-md"
        >
          <MdDelete />
        </button>
      </div>
      <div className="px-4 py-5">{contentPreview}</div>
    </div>
  );
};

export default EntryCard;
