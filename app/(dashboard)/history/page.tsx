import HistoryChart from "@/components/HistoryChart";
import { getUserByClerkID } from "@/utils/auth";
import { prisma } from "@/utils/db";

const getData = async () => {
  const user = await getUserByClerkID();
  const analyses = await prisma.entryAnalysis.findMany({
    where: {
      userId: user.id,
    },
    orderBy: {
      createdAt: "asc",
    },
  });

  const sum = analyses.reduce(
    (all, current) => all + current.sentimentScore,
    0
  );
  const avg = Math.round(sum / analyses.length);

  return { analyses, avg };
};

const History = async () => {
  const { avg, analyses } = await getData();

  return (
    <div className="h-full w-full p-8 bg-bl-light text-white">
      <div className="text-xl mb-8">{`Average Sentiment: ${avg}`}</div>
      <div className="h-full w-full">
        <HistoryChart data={analyses} />
      </div>
    </div>
  );
};

export default History;
