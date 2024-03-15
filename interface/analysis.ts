export interface IAnalysis {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  entryId: string;
  userId: string;
  mood: string;
  negative: boolean;
  summary: string;
  subject: string;
  color: string;
  sentimentScore: number;
}

export interface IAnalysisCreate {
  entryId: string;
  userId: string;
  mood: string;
  negative: boolean;
  summary: string;
  subject: string;
  color: string;
  sentimentScore: number;
}
