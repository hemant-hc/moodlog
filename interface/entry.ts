import { IAnalysis } from "./analysis";

export interface IEntry {
  id: string;
  content: string;
  createdAt: Date;
  analysis?: IAnalysis;
}

export type TEntries = IEntry[];
