import { IAnalysisCreate } from "@/interface/analysis";
import { analyze } from "@/utils/ai";
import { getUserByClerkID } from "@/utils/auth";
import { prisma } from "@/utils/db";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

interface PATCHParams {
  params: {
    id: string;
  };
}

export const PATCH = async (request: Request, { params }: PATCHParams) => {
  const { content } = await request.json();
  console.log("params", params.id);
  const user = await getUserByClerkID();
  const updatedEntry = await prisma.journalEntry.update({
    where: {
      userId_id: {
        userId: user.id,
        id: params.id,
      },
    },
    data: {
      content,
    },
  });

  const analysis = (await analyze(updatedEntry.content)) as IAnalysisCreate;

  const updated = await prisma.entryAnalysis.upsert({
    where: {
      entryId: updatedEntry.id,
    },
    create: {
      ...analysis,
      userId: user.id,
      entryId: updatedEntry.id,
    },
    update: analysis,
  });

  revalidatePath(`/journal/${updatedEntry.id}`);

  return NextResponse.json({ data: { ...updatedEntry, analysis: updated } });
};
