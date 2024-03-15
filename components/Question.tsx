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
          className="border border-black/20 px-4 bg-slate-300 py-2 h-14 w-[80%] text-black text-lg rounded-lg"
        />
        <button
          disabled={loading}
          type="submit"
          className="bg-blue-400 px-4 ml-6 py-2 rounded-lg text-lg"
        >
          Ask
        </button>
      </form>
      <div className="m-4">
        {loading && <ClipLoader color="white" size={18} />}
        {response && <div>{response}</div>}
      </div>
    </div>
  );
};

export default Question;
