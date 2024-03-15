import { IAnalysis, IAnalysisCreate } from "@/interface/analysis";
import { analyze } from "@/utils/ai";
import { getUserByClerkID } from "@/utils/auth";
import { prisma } from "@/utils/db";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export const POST = async () => {
  const user = await getUserByClerkID();
  const entry = await prisma.journalEntry.create({
    data: {
      userId: user.id,
      content: "Write about your days",
    },
  });

  const analysis = (await analyze(entry.content)) as IAnalysisCreate;
  await prisma.entryAnalysis.create({
    data: {
      ...analysis,
      userId: user.id,
      entryId: entry.id,
    },
  });

  revalidatePath("/journal");

  return NextResponse.json({ data: entry });
};

export const DELETE = async (request: Request) => {
  const user = await getUserByClerkID();
  const { id } = await request.json();
  await prisma.journalEntry.delete({
    where: {
      userId_id: {
        userId: user.id,
        id,
      },
    },
  });

  revalidatePath("/journal");

  return NextResponse.json({ data: "success" });
};
