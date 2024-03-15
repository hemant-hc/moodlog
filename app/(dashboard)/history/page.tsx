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
    <div className="h-full w-full p-8 bg-bl-light">
      <div className="text-xl mb-2">{`Average Sentiment Score: ${avg}`}</div>
      <div className="text-slate-400 text-xl mb-8">{`Sentiment Score is calculated based on your journals on a scale from -10 to 10`}</div>
      <div className="h-[80%] w-full">
        <HistoryChart data={analyses} />
      </div>
    </div>
  );
};

export default History;
