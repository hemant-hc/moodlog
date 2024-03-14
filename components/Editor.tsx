"use client";

import { updateEntry } from "@/utils/api";
import { useAutosave } from "react-autosave";
import { useState } from "react";

const Editor = ({ entry }) => {
  const [value, setValue] = useState(entry.content);
  const [isLoading, setIsLoading] = useState(false);
  const [analysis, setAnalysis] = useState(entry.analysis);

  const { mood, summary, subject, negative, color } = analysis;

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
      const data = await updateEntry(entry.id, _value);
      setAnalysis(data.analysis);
      setIsLoading(false);
    },
  });

  return (
    <div className="w-full h-full grid grid-cols-3 bg-bl-light1 text-white">
      <div className="col-span-2">
        {isLoading && <div>...loading</div>}
        <textarea
          className="w-full h-full p-8 text-md bg-bl-dark outline-none"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>

      <div className="border-l border-white/30">
        <div className="px-6 py-10" style={{ backgroundColor: color }}>
          <h2 className="text-2xl text-black font-semibold">Analysis</h2>
        </div>
        <div>
          <ul>
            {analysisData.map((item) => (
              <li
                key={item.name}
                className="flex items-center border-t border-white/30"
              >
                <span className="text-lg font-medium px-2 py-4 ml-2 w-1/4">
                  {item.name}
                </span>
                <span className="px-2 py-4 mr-2 w-3/4">{item.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Editor;
