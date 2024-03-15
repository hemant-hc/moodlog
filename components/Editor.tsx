"use client";

import { updateEntry } from "@/utils/api";
import { useAutosave } from "react-autosave";
import { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const Editor = ({ entry }: any) => {
  const [value, setValue] = useState(entry.content);
  const [isLoading, setIsLoading] = useState(false);
  const [analysis, setAnalysis] = useState(entry.analysis);
  const [isOpen, setIsOpen] = useState(false);

  const { mood, summary, subject, negative, color } = analysis ?? {};

  const analysisData = [
    { name: "Summary", value: summary },
    { name: "Subject", value: subject },
    { name: "Mood", value: mood },
    { name: "Negative", value: negative ? "True" : "False" },
  ];

  useAutosave({
    data: value,
    onSave: async (_value) => {
      setIsLoading(true);
      const data = await updateEntry(entry.id as string, _value as string);
      setAnalysis(data.analysis);
      setIsLoading(false);
    },
  });

  return (
    <div className="w-full h-full grid grid-cols-3 bg-bl-light1">
      <div id="editor" className="sm:col-span-2 col-span-3">
        <textarea
          className="w-full h-full p-8 text-md bg-bl-dark outline-none"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <div
        id="analysis"
        className="border-l border-white/30 sm:block hidden col-span-1 "
      >
        <div
          className="px-6 py-10 sm:visible"
          style={{ backgroundColor: color }}
        >
          <h2 className="text-2xl text-black font-semibold lg:text-left text-center">
            Analysis
          </h2>
        </div>
        <div>
          <ul>
            {analysisData.map((item) => (
              <li
                key={item.name}
                className="flex flex-col lg:px-0 sm:p-2 lg:flex-row md:items-center border-t border-white/30"
              >
                <span className="text-base md:text-lg text-center lg:text-left sm:text-center lg:px-1 px-2 lg:py-4 md:pt-2 sm:pt-1 ml-2 lg:w-1/4">
                  {item.name}
                </span>
                <span className="px-2 lg:py-4 md:py-2 sm:py-1 mr-2 w-full lg:text-left sm:text-center lg:w-3/4">
                  {" "}
                  {isLoading ? (
                    <ClipLoader color="white" size={18} />
                  ) : (
                    item.value
                  )}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Editor;
