"use client";

import { askQuestion } from "@/utils/api";
import { FormEventHandler, useState } from "react";
import { ClipLoader } from "react-spinners";

const Question = () => {
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState();

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setLoading(true);

    const answer = await askQuestion(value);
    setResponse(answer);
    setValue("");
    setLoading(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="px-2 py-2">
        <input
          onChange={(e) => setValue(e.target.value)}
          value={value}
          type="text"
          placeholder="Ask a question"
          className="border border-black/20 lg:px-4 sm:px-3 px-2 bg-slate-300 sm:py-2 py-1 sm:h-14 h-10 sm:w-[80%] w-[100%] text-black text-lg rounded-lg"
        />
        <button
          disabled={loading}
          type="submit"
          className="bg-blue-400 sm:px-4 px-2 sm:ml-6 sm:py-2 py-1 sm:mt-0 mt-2 rounded-lg text-lg"
        >
          Ask
        </button>
      </form>
      <div className="m-4 sm:text-base text-xs">
        {loading && <ClipLoader color="white" size={18} />}
        {response && <div>{response}</div>}
      </div>
    </div>
  );
};

export default Question;
