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
      <button
        className="bg-blue-500 sm:p-3 p-1 sm:text-lg text-base"
        onClick={handleOnClick}
      >
        <span className="inline-flex sm:px-2 px-1">
          Add New <AiOutlinePlus className="sm:ml-2 ml-1 mt-1" size={18} />
        </span>
      </button>
    </div>
  );
};

export default NewEntryCard;
