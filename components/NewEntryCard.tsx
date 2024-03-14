"use client";

import { createNewEntry } from "@/utils/api";
import { useRouter } from "next/navigation";
import { AiOutlinePlus } from "react-icons/ai";

const NewEntryCard = () => {
  const router = useRouter();

  const handleOnClick = async () => {
    const data = await createNewEntry();
    router.push(`/journal/${data.id}`);
  };

  return (
    <div className="cursor-pointer overflow-hidden rounded-lg bg-bl-light1 shadow">
      <button className="bg-blue-500 p-3 text-lg" onClick={handleOnClick}>
        <span className="inline-flex px-2">
          Add New <AiOutlinePlus className="ml-2 mt-1" size={18} />
        </span>
      </button>
    </div>
  );
};

export default NewEntryCard;
